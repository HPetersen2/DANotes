import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-14281","appId":"1:1086086871376:web:2730cbb98a019ae8395455","storageBucket":"danotes-14281.firebasestorage.app","apiKey":"AIzaSyCUP6r8KC4kB7O5EAu_3u-2jZIz3BKmkUA","authDomain":"danotes-14281.firebaseapp.com","messagingSenderId":"1086086871376","measurementId":"G-C7M02HPP03"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
