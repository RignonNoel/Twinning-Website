// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  default_language: 'fr',
  url_base_api: 'http://localhost:8000',
  paths_api: {
    activation: '/users/activate',
    authentication: '/authentication',
    users: '/users',
    profile: '/profile',
    reset_password: '/reset_password',
    change_password: '/change_password',
    activate_user: '/users/activate',
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
