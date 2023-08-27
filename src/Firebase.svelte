<script>
  // Makes a custom event to send data to user.
  import { afterUpdate, createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  // Initialise the app, auth and the firestore.
  import { initializeApp } from "firebase/app";
  //import { getAnalytics } from "firebase/analytics";
  import {
    getAuth,
    fetchSignInMethodsForEmail,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail,
    deleteUser,
  } from "firebase/auth";
  import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    deleteDoc,
  } from "firebase/firestore";

  // Config.
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
  };

  // Setup.
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  //const analytics = getAnalytics(app);

  // Account state and pfpColor.
  let accountState = "";
  let userColors = [
    "#ffffeb",
    "#ffe478",
    "#eb564b",
    "#3ca370",
    "#4da6ff",
    "#ff6b97",
    "#ba6156",
    "#7e7e8f",
    "#43434f",
  ];
  let imgColor = null;
  let prevImgColor = null;

  // Name is a part of email, email and password are used for the sign in panel.
  let name = " ";
  let email = "";
  let password = "";

  // The cloudData is from the firestore.
  export let cloudData;
  let prevCloudData = null;

  /* 
  [1]Hides the verifiy button,
  [2]The delete panel,
  [3] The reset password,
  [4] Hides panel, 
  [5] error console, where all the errors are handled
   */
  let debounceVerification = false;
  let accountDeleting = false;
  let wrongPassword = false;
  export let hidePanel;
  let errorConsole = "Error output panel";

  /*
  [1]This decides to show the loading sign for the simple profile.
  */
  let isLoading = false;

  // This handles the authstate, and does stuff.
  async function ACCOUNT_STATE() {
    isLoading = true;

    onAuthStateChanged(auth, function (user) {
      if (user) {
        //console.log("User is signed in");
        accountState = "signedIn";
        email = "";
        password = "";
        isLoading = false;
        GET_DATA();
      } else {
        //console.log("User is not signed in");
        accountState = "createOrSignIn";
        imgColor = userColors[0];
      }
    });
  }
  ACCOUNT_STATE();

  // Runs after everytime the component updates
  afterUpdate(() => {
    // 99% real user.
    if (auth && auth.currentUser) {
      name = auth.currentUser.email.split("@")[0]; // The email splitter.

      // Checks if the values are existing.
      if (cloudData != null && prevCloudData != null) {
        // If the cloudData has changed, data is saved
        if (JSON.stringify(cloudData) !== JSON.stringify(prevCloudData)) {
          //console.log("Cloud data has changed");
          SET_DATA();
        }
      }
      // Holds the new data as prev data
      prevCloudData = cloudData;
    }
  });

  // This handles the sign in
  function ACCOUNT_SIGN_IN() {
    fetchSignInMethodsForEmail(auth, email)
      .then((signInMethods) => {
        if (signInMethods.length > 0) {
          // Sign In to account.
          //console.log("ACCOUNT: Email account exists.");
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              //console.log("ACCOUNT: SIGNED IN ");
              ERROR_CONSOLE("Error output panel");
            })
            .catch((error) => {
              //console.error("ACCOUNT: SIGN IN ERROR ", error);
              ERROR_CONSOLE(error.code);
            });
        } else {
          // Create new account.
          //console.log("ACCOUNT: Email account does not exist.");
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              //console.log("ACCOUNT: NEW ACCOUNT CREATED ");
              ERROR_CONSOLE("Error output panel");
            })
            .catch((error) => {
              //console.log("ACCOUNT: NEW ACCOUNT ERROR ", error);
              ERROR_CONSOLE(error.code);
            });
        }
      })
      .catch((error) => {
        //console.error("ACCOUNT: Error checking email existence:", error);
        ERROR_CONSOLE(error.code);
      });
  }

  // Handles the sign out
  function ACCOUNT_SIGN_OUT() {
    signOut(auth)
      .then(() => {
        //console.log("ACCOUNT: signed out");
        name = "";
        imgColor = "white";
        ERROR_CONSOLE("Error output panel");
      })
      .catch((error) => {
        //console.log("ACCOUNT: Error signing out ", error);
        ERROR_CONSOLE(error.code);
      });
  }

  // sends a verification email
  function ACCOUNT_VERIFIY() {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        //console.log("ACCOUNT: Sent verification email");
        ERROR_CONSOLE("Error output panel");
      })
      .catch((error) => {
        //console.log("ACCOUNT: Send email verification error ", error);
        ERROR_CONSOLE(error.code);
      });
  }

  // Resets password, if user don't know password durning sign in
  function ACCOUNT_RESET_PASSWORD() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        //console.log("ACCOUNT: Sent reset password email");
        ERROR_CONSOLE("Error output panel");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ERROR_CONSOLE(error.code);
      });
  }

  // Deletes account and user data
  function ACCOUNT_DELETE() {
    const currentUser = auth.currentUser;

    // Delete user document in Firestore
    const userDocRef = doc(db, "users", currentUser.uid);
    deleteDoc(userDocRef)
      .then(() => {
        // Document successfully deleted
        // Continue with deleting the user account
        deleteUser(currentUser)
          .then(() => {
            accountState = "createOrSignIn";
            accountDeleting = false;
            ERROR_CONSOLE("Error output panel");
          })
          .catch((error) => {
            ERROR_CONSOLE(error.code);
          });
      })
      .catch((error) => {
        ERROR_CONSOLE(error.code);
      });
  }

  // Handles the error reports
  function ERROR_CONSOLE(code) {
    var errorMessages = {
      "auth/invalid-email": "Invalid email",
      "auth/too-many-requests": "Too many requests",
      "auth/user-disabled": "User is disabled",
      "auth/wrong-password": "Wrong password",
      "auth/invalid-password": "Invalid password",
      "auth/missing-password": "Missing password",
      "auth/email-already-in-use": "Email is already in use",
      "auth/weak-password": "Weak password",
      "auth/user-not-found": "User not found",
      "auth/operation-not-allowed": "Operation not allowed",
      "auth/network-request-failed": "Network request failed",
      "auth/internal-error": "Internal error",
      "auth/requires-recent-login":
        "Error: Recent sign-in required; please sign out and sign back in",
      "Error output panel": "Error output panel",
    };

    if (errorMessages.hasOwnProperty(code)) {
      errorConsole = errorMessages[code];
      if (code == "auth/wrong-password") {
        wrongPassword = true;
      } else if (code == "Error output panel") {
        wrongPassword = false;
      }
    } else {
      errorConsole = "Unknown error";
    }
  }

  // Sets data
  async function SET_DATA() {
    if (
      auth != null &&
      auth.currentUser &&
      auth.currentUser.emailVerified == true &&
      cloudData != null
    ) {
      //console.log("SAVING DATA");

      try {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          pfp: imgColor,
          info: cloudData,
        });
        //console.log("Document written with ID:", auth.currentUser.uid);
      } catch (error) {
        console.log(error.code, error.message);
      }
    }
  }

  // Gets data
  async function GET_DATA() {
    if (
      auth != null &&
      auth.currentUser != null &&
      auth.currentUser.emailVerified == true &&
      cloudData != null
    ) {
      try {
        const querySnapshot = await getDoc(
          doc(db, "users", auth.currentUser.uid)
        );
        if (querySnapshot && querySnapshot.exists() == true) {
          //console.log("DATABASE: Using stored data");
          imgColor = querySnapshot.data().pfp;
          cloudData = querySnapshot.data().info;
          dispatch("returnData", cloudData);
        } else {
          // User is new, giving user startup data
          //console.log("Firebase: Missing data");
          SET_DATA();
        }
      } catch (error) {
        console.error(error.code, error.message);
      }
    }
  }
</script>

{#if hidePanel === false}
  <div class="container-fluid mt-2 p-2 border">
    <div class="row">
      <div class="col-sm-2">
        <!-- User icon -->
        <div class="container p-2 text-center">
          <img
            src="./user.svg"
            alt="standard icon for user"
            class="img-thumbnail border-1 border-opacity-75 border-dark"
            style="background-color: {imgColor};"
            width="45px"
            height="45px"
          />
        </div>
      </div>
      <div class="col">
        <!-- User name -->
        <div class="container mt-4 text-start">
          {#if accountState === "createOrSignIn"}
            <p class="text-dark text-opacity-75 h6">Not signed in</p>
          {:else if isLoading === true}
            <div class="spinner-border text-muted" />
          {:else if isLoading === false}
            <p class="text-dark text-opacity-75 h6">Welcome {name}!</p>
          {/if}
        </div>
      </div>
      <div class="col">
        <!-- View acccount button -->
        <div class="d-grid mt-3">
          <button
            type="button"
            class="btn text-light"
            style="background-color: #eb564b;"
            data-bs-toggle="modal"
            data-bs-target="#accountModal"
          >
            View Account</button
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="accountModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">My Account</h4>
          <button
            on:click={() => {
              if (imgColor !== prevImgColor) {
                SET_DATA();
              }
              prevImgColor = imgColor;
            }}
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          />
        </div>
        <div class="modal-body">
          <!-- User icon -->
          <div class="container p-2 text-center">
            <img
              src="./user.svg"
              alt="standard icon for user"
              class="img-thumbnail border-1 border-opacity-75 border-dark"
              style="background-color: {imgColor};"
              width="45px"
              height="45px"
            />
          </div>
          <!-- Account email/name -->
          {#if accountState === "createOrSignIn"}
            <p class="text-dark text-center text-opacity-75 h6">
              Not signed in
            </p>
          {:else if isLoading === true}
            <div class="spinner-border text-muted" />
          {:else if isLoading === false}
            <p class="text-dark text-center text-opacity-75 h6">
              {name}
            </p>
            <p class="text-dark text-center text-opacity-75 small">
              {auth.currentUser.email}
            </p>
          {/if}
          {#if accountState === "createOrSignIn"}
            <!-- Email and password -->
            <div class="input-group">
              <span class="input-group-text">Email</span>
              <input
                bind:value={email}
                class="form-control"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div class="input-group">
              <span class="input-group-text">Password</span>
              <input
                bind:value={password}
                class="form-control"
                type="password"
                placeholder="Your password"
              />
            </div>
            <!-- Sign in button and forgot email button -->
            <div class="row text-center">
              {#if wrongPassword === true}
                <button
                  on:click={ACCOUNT_RESET_PASSWORD}
                  class="btn mt-2"
                  style="color: #ff9166;"
                >
                  Reset Password
                </button>
              {/if}
              <button
                on:click={ACCOUNT_SIGN_IN}
                class="btn mt-2"
                style="background-color: #eb564b;"
              >
                Sign In
              </button>
            </div>
          {:else if accountDeleting === false}
            <!-- Signed in user -->
            <!-- Choose user pfp color dropdown -->
            <div class="dropdown text-center">
              <button
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Color List
              </button>
              <ul class="dropdown-menu bg-dark-subtle">
                {#each userColors as usercolor}
                  <button
                    on:click={() => {
                      imgColor = usercolor;
                    }}
                    class="dropdown-item btn mt-1"
                    style="background-color: {usercolor};"
                  >
                    <p />
                  </button>
                {/each}
              </ul>
            </div>
            <div class="row text-center">
              <!-- Verification button -->
              {#if auth && auth.currentUser && auth.currentUser.emailVerified === false && debounceVerification === false}
                <button
                  on:click={() => {
                    ACCOUNT_VERIFIY();
                    debounceVerification = true;
                  }}
                  class="btn text-light mt-2"
                  style="background-color: #3ca370;"
                >
                  Verifiy with email
                </button>
              {/if}

              <!-- Sign out button -->
              <button
                on:click={ACCOUNT_SIGN_OUT}
                class="btn text-light mt-2"
                style="background-color: #eb564b;"
                >Sign Out
              </button>

              <!-- Delete Account button -->
              <button
                on:click={() => {
                  accountDeleting = true;
                }}
                class="btn text-danger mt-2"
              >
                Delete Account
              </button>
            </div>
          {:else}
            <!-- Account delete panel -->
            <p class="text-bg-danger text-center">
              Are you sure you want to delete your account
            </p>

            <div class="row text-center">
              <div class="col">
                <button
                  on:click={() => {
                    accountDeleting = false;
                  }}
                  class="btn text-bg-dark opacity-50"
                >
                  No
                </button>
              </div>
              <div class="col">
                <button
                  on:click={ACCOUNT_DELETE}
                  class="btn text-bg-danger t-3"
                >
                  Yes
                </button>
              </div>
            </div>
          {/if}

          <div class="bg-black bg-opacity-10 mt-2">
            <p class="text-center text-danger">{errorConsole}</p>
            <br />
            <i>
              If the email we send has a broken link. Attempt using an
              proxy(like ultrasurf).
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
