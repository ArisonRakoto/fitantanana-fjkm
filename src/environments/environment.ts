// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  server: 'http://127.0.0.3:5000',
  serverFile: 'http://127.0.0.3:4000/uploads/',

  // PROFILE
  profiles: 'api/profiles',
  getById: 'api/profiles/getById',
  createProfile: 'api/profiles/create',
  updateProfile: 'api/profiles/update',
  deleteProfile: 'api/profiles/delete',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
