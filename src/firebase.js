import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD-F9Kc9oaBeN3mix_lkSo3GtZeXfuDop4",
	authDomain: "tinder-clone-6f52b.firebaseapp.com",
	databaseURL: "https://tinder-clone-6f52b.firebaseio.com",
	projectId: "tinder-clone-6f52b",
	storageBucket: "tinder-clone-6f52b.appspot.com",
	messagingSenderId: "279477626207",
	appId: "1:279477626207:web:90210168dfca05a29a42ea",
	measurementId: "G-DSD2SRPFKC",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db;
