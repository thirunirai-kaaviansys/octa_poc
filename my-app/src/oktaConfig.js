import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  clientId: '0oauhf6bmwrsIKPO5697',
  issuer: 'https://trial-3371302.okta.com/oauth2/default',  // include /oauth2/default
  redirectUri: 'https://ee5d270cc053.ngrok-free.app/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
});

export default oktaAuth;
