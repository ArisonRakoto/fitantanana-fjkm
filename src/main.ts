import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withComponentInputBinding,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { importProvidersFrom, LOCALE_ID } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(IonicModule.forRoot({})),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'fr-CA' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }, // Pour eviter une erreur en rafraississant la page
    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrorHandler,
    // },
    provideHttpClient(withInterceptors([])),
    provideIonicAngular(),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
  ],
});
