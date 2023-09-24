import "./scss/app.scss"
import "./testing.js"
import "./lang.js"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAlU5WjfdVlZo_93pJL0VnnAwTCNtIF7Ho",
	authDomain: "naturella-wwf.firebaseapp.com",
	projectId: "naturella-wwf",
	storageBucket: "naturella-wwf.appspot.com",
	messagingSenderId: "212891758686",
	appId: "1:212891758686:web:b24cc72e524ec934d684cf",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
