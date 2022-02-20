import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "@firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6gfot-Qvk2hoOwhYwD8GWAwXZRU-mrMA",
  authDomain: "sabr-blog.firebaseapp.com",
  databaseURL: "https://sabr-blog-default-rtdb.firebaseio.com",
  projectId: "sabr-blog",
  storageBucket: "sabr-blog.appspot.com",
  messagingSenderId: "39883261276",
  appId: "1:39883261276:web:2285f1ea9c50b20917ad99",
  measurementId: "G-E6E6HM5GJ9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const dbRef = ref(getDatabase());
// get(child(dbRef, `BlogOne/${userId}`))
//   .then((snapshot) => {
//     if (snapshot.exists()) {
//       console.log(snapshot.val());
//     } else {
//       console.log("No data available");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
