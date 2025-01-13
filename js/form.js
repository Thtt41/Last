import { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Sign up functionality
document.getElementById("sign-up-btn").addEventListener("click", async () => {
  const name = document.querySelector(".sign-up input[type='text']").value.trim();
  const email = document.querySelector(".sign-up input[type='email']").value.trim();
  const password = document.querySelector(".sign-up input[type='password']").value;

  if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
  }

  try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid; // Get the UID

      // Reference the user's Firestore document using their UID
      const userDocRef = doc(db, "Users", userId);

      // Check if user document already exists (optional for sign-up, as it's a new account)
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
          alert("The user/email is already used");
          return;
      }

      // Store user information in Firestore    
    await setDoc(doc(db, "Users", userId), { name, email, createdAt: new Date() });
      alert("Account created successfully!");
  } catch (error) {
      console.error("Error during sign-up:", error);
      alert(`Sign-up failed: ${error.message}`);
  }
});


// Sign in functionality
document.getElementById("sign-in-btn").addEventListener("click", async () => {
  const email = document.querySelector(".sign-in input[type='email']").value.trim();
  const password = document.querySelector(".sign-in input[type='password']").value;

  if (!email || !password) {
      alert("Please enter both email and password.");
      return;
  }

  try {
      // Authenticate the user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid; // Get the UID

      // Reference the user's Firestore document
      const userDocRef = doc(db, "Users", userId);
      const userDoc = await getDoc(userDocRef);

      // Check if user data exists in Firestore
      if (userDoc.exists()) {
          alert(`Welcome back, ${userDoc.data().name}!`);
      } else {
          alert("User data not found. Please register.");
      }
  } catch (error) {
      console.error("Error during sign-in:", error);
      alert(`Sign-in failed: ${error.message}`);
  }
});
