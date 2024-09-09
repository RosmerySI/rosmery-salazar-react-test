
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBJwNzhksUcJpcrg1L29hz-FdnbIPQovmA",
  authDomain: "rosmery-salazar-react-test.firebaseapp.com",
  projectId: "rosmery-salazar-react-test",
  storageBucket: "rosmery-salazar-react-test.appspot.com",
  messagingSenderId: "473158145033",
  appId: "1:473158145033:web:cc255fac982052271e14d8"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app ,storage };

// firebase login
// firebase init
// firebase deploy