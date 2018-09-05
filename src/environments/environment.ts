// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseurl:"https://newsapi.org/v2/top-headlines?country=in&apiKey=3e44f1f33dea434b8942b996e8737717",
  googleapi:"https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3e44f1f33dea434b8942b996e8737717"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
