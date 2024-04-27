import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp } from 'firebase/app';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyBDXtfXekA4i5SpMumFDWTA9vEmJdEHrDI",
  authDomain: "tp-01-58b6f.firebaseapp.com",
  projectId: "tp-01-58b6f",
  storageBucket: "tp-01-58b6f.appspot.com",
  messagingSenderId: "598126968796",
  appId: "1:598126968796:web:9853fd29169a3d31499919",
  measurementId: "G-524JSGGLNX"
};

initializeApp(firebaseConfig);


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(HttpClientModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule)],
  
};
