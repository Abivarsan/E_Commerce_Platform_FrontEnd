import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';




// Firebase configuration for the second projectn
const firebaseConfig = {
    apiKey: "AIzaSyDMX-He6pJx66g87owgxh33J3QR1OGlj1k",
    authDomain: "uni-tutor-3d240.firebaseapp.com",
    projectId: "uni-tutor-3d240",
    storageBucket: "uni-tutor-3d240.appspot.com",
    messagingSenderId: "345025359299",
    appId: "1:345025359299:web:7458ef5781b4a986a56176"
};

// Initialize Firebase for the second project
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
