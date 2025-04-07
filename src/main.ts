import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

const authProviders = AuthModule.forRoot({
  config: {
    authority: 'http://localhost:8082/realms/recordlog',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'recordlog-frontend',
    scope: 'openid profile email',
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    logLevel: LogLevel.Debug,
    secureRoutes:["/artists/add"]
  }
}).providers ?? []; // ← si undefined, ça devient []

bootstrapApplication(AppComponent, {
  providers: [
    ...appConfig.providers,
    provideHttpClient(withInterceptorsFromDi()),
    ...authProviders
  ]
}).catch(err => console.error(err));
