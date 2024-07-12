import { addView } from "./crud.mjs";

addView();
console.log('tm');



<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDnqh8f62q3tqDgiovzNBCq-BAobG8KUck",
    authDomain: "anime-stream-3f377.firebaseapp.com",
    projectId: "anime-stream-3f377",
    storageBucket: "anime-stream-3f377.appspot.com",
    messagingSenderId: "202310223194",
    appId: "1:202310223194:web:3d10738391bbab34f49f63",
    measurementId: "G-79HQR2MX7N"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
