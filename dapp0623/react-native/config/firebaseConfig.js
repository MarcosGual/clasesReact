import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBK5MvUakifKWyKOJe76dy50fA2H8odTLE",
    authDomain: "unproyecto-1f599.firebaseapp.com",
    projectId: "unproyecto-1f599",
    storageBucket: "unproyecto-1f599.appspot.com",
    messagingSenderId: "60585233805",
    appId: "1:60585233805:web:90d93abfae8b0ea24181c4"
};

//inicializa firebase en mi aplicación
initializeApp(firebaseConfig);

export const auth = getAuth();
export const database = getFirestore();