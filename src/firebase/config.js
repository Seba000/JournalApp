import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

//POR SEGURIDAD NO SUBO MIS CONFIG, ESTO DEBERÍA COLOCARLO EN VARIABLES DE ENTORNO PERO PREFERÍ ELIMINARLOS ANTES DE SUBIRLOS A GIT:)
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: " ",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
