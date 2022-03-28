/* eslint-disable import/prefer-default-export */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDIy4R_pUt6O65yuh-xZP7xcKNBR2O2Tls',
  authDomain: 'test-5fde0.firebaseapp.com',
  projectId: 'test-5fde0',
  storageBucket: 'test-5fde0.appspot.com',
  messagingSenderId: '715430837641',
  appId: '1:715430837641:web:e481fa5a149932af0a3558',
  measurementId: 'G-87GS7J8C7H',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
// const analytics = getAnalytics(app)
