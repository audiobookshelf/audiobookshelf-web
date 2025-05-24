---
title: OIDC Authentication
slug: oidc_authentication
fullpath: /guides/oidc_authentication
---

---

# Introduction

This guide discusses the necessary configurations for SSO with OIDC.

# Bypassing SSO Redirect

In the case of a misconfiguration or an issue with SSO, it may be helpful to bypass SSO in favor of local login. Local login is possible while SSO redirect is enabled by manually navigating to `https://abs.yoursite.com/login/?autoLaunch=0`

# Configuring Audiobookshelf for SSO

Navigate to `Settings > Authentication`, then select the check box for `OpenID Connect Authentication`.

## Auto-populate with OIDC Discovery

Audiobookshelf is able to automatically populate many of the fields required for OIDC using the OIDC discovery endpoint. Simply enter the URL for your OIDC provider or the URL for the discovery endpoint in the `Issuer URL` box and click the `Auto-populate` button. 

Example URLs:
- `https://auth.yoursite.com/application/o/audiobookshelf/`
- `https://auth.yoursite.com/.well-known/openid-configuration`

You will still need to provide the `Client ID` and `Client Secret`, as these are unique to Audiobookshelf and are not provided with OIDC discovery.

## Additional Configuration
### Configuring Client ID and Client Secret
The Client ID and Client Secret function as a username and password for audiobookshelf to use with your OIDC provider. They must be generated or defined with your OIDC provider prior to use in audiobookshelf.

### Remaining Configuration Items

| Field | Required | Example | Description  |
| :--- | :---: |---|---|
|  Issuer URL |  yes | https://auth.yoursite.com/application/o/audiobookshelf/  |  The URL which uniquely identifies an OIDC instance. The OIDC provider must know itself as this URL.  |
|  Authorize URL  | yes  |  https://auth.yoursite.com/application/o/authorize/ |    |
|  Token URL |  yes | https://auth.yoursite.com/application/o/token/  |   |
|  Userinfo URL | yes  | https://auth.yoursite.com/application/o/userinfo/  |   |
|  JWKS URL | yes  | https://auth.yoursite.com/application/o/audiobookshelf/jwks/  |   |
|  Logout URL | no  | https://auth.yoursite.com/application/o/audiobookshelf/end-session/  |   |
|  Client ID | yes  |  `audiobookshelf` |   |
|  Client Secret | yes  | `0123abcdefgHIJKLMNOP.,!@$%^*?<`...  |  The "password" that audiobookshelf uses to authenticate with the 
OIDC provider. Authelia shares an [overview of good practices](https://www.authelia.com/integration/openid-connect/frequently-asked-questions/#how-do-i-generate-client-secrets) |
|  Signing Algorithm | yes  | `RS256`, `ES256`, ...  |  The signing algoritjm used by your OIDC provider  |
|  Button Text |  no | `Login with OIDC`  |  Button text shown on the login page. If nothing is specified defaults to `Login with OpenID` |
|  Match existing users by | no  |   | Used to match existing Audiobookshelf users with your provider.  |
|  Auto Launch | no  |   | Redirect to the auth provider automatically when navigating to the login page (manual override path /login?autoLaunch=0)  |
|  Auto Register | no  |   | Automatically create new users after logging in (new users are created with User account type and download only permissions) |

### Configuring your OIDC provider

Different OIDC providers might use varying terminologies for their configuration options.

- **Client/Access Type**: Confidential
- **Token/Issuer Signing Algorithm**: Required
- **UserInfo Signing Algorithm**: Must be set to none/unsigned
- **PKCE**: Can be set to forced if your provider supports it

**Redirect URIs**  
The first redirect URI is required for the website and the second redirect URI is required for the mobile app.

```
https://abs.yoursite.com/auth/openid/callback 
https://abs.yoursite.com/auth/openid/mobile-redirect
```
