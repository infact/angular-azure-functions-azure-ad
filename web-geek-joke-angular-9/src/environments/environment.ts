// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  jokeUrl: "https://angular-azure-functions-azure-ad.azurewebsites.net/api/geek-joke",
  aadClientId: "92a3f4fb-d457-4e16-bc2b-187852b9b97d",
  redirectUrl: "http://localhost:4200/",
  aadUserReadScope: "api://92a3f4fb-d457-4e16-bc2b-187852b9b97d/default",
  apiBaseUrl: "https://angular-azure-functions-azure-ad.azurewebsites.net/",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.