import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: 'YOUR_CLIENT_ID', 
    authority: 'https://login.microsoftonline.com/common', 
    redirectUri: 'http://localhost:4200/', 
  }
};

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}