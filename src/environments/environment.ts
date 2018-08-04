// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC6YJActYUDmbPDp2W3qFNW2AD5l8D8Lew',
    authDomain: 'project-authentification.firebaseapp.com',
    databaseURL: 'https://project-authentification.firebaseio.com',
    projectId: 'project-authentification',
    storageBucket: 'project-authentification.appspot.com',
    messagingSenderId: '796095906119'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
