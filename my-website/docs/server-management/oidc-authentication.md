---
id: oidc-authentication
sidebar_label: OIDC Authentication
title: OpenID Connect Authentication
sidebar_position: 9
---

OpenID Connect (OIDC) authentication allows Audiobookshelf to integrate with external identity providers for Single Sign-On (SSO). This enables users to log in using their existing accounts from providers like Authelia, Keycloak, Google, Microsoft, or any OIDC-compatible service.

:::note

OIDC authentication requires server configuration by an admin user. Once a user is logged in the refresh token is authenticated against ABS and not the OIDC provider.

:::

## Setting Up Your OIDC Provider

Before configuring Audiobookshelf, you'll need to register it as a client application in your OIDC provider.

### Required Redirect URIs

Add these redirect URIs to your OIDC provider configuration:

```text
https://<your.server.com>/auth/openid/callback
https://<your.server.com>/auth/openid/mobile-redirect
https://<your.server.com>/audiobookshelf/auth/openid/callback
https://<your.server.com>/audiobookshelf/auth/openid/mobile-redirect
```

The first URI handles web authentication, and the second handles mobile app authentication. Because both `/audiobookshelf` and root paths are supported, you may need to add all four URIs depending on your setup.

## Configuring Audiobookshelf

Navigate to **Settings → Authentication** and enable **OpenID Connect Authentication**.

### Auto-Discovery Setup

Audiobookshelf can automatically populate most fields using OIDC discovery:

Example issuer URLs:

- `https://auth.example.com/application/o/audiobookshelf/`
- `https://auth.example.com/.well-known/openid-configuration`

### Manual Configuration

If auto-discovery doesn't work, configure these fields manually:

| Field | Description |
|-------|-------------|
| **Issuer URL** |  The base URL that identifies your OIDC provider |
| **Authorize URL** | Endpoint where users are redirected for authentication |
| **Token URL** | Endpoint for exchanging authorization codes for tokens |
| **Userinfo URL** | Endpoint for retrieving user profile information |
| **JWKS URL** | Endpoint for JSON Web Key Set used to verify tokens |
| **Logout URL** | Endpoint for ending SSO sessions |
| **Client ID** | The unique identifier for Audiobookshelf in your provider |
| **Client Secret** | The secret key for secure communication |
| **Signing Algorithm** | Algorithm used by your provider (e.g., RS256, ES256) |

:::warning

Make sure you set up OIDC correctly and test it before turning off local authentication. If you are logged out, the only way to enable local authentication is by editing the database directly.

:::

## User Management

### Existing Users

Existing Audiobookshelf users can be linked to OIDC accounts using the **Match existing users by** setting.

:::note

If you are using an OIDC provider like Authentik, you do not need to change the subject mode. This is not related to the actual matching and instead locks a user out if they change the selected subject (e.g. mail or username) in your OIDC provider. It is best to leave it at the default, which for most providers is a unique identifier that never changes.

:::

### Bypassing OIDC Login

If OIDC is misconfigured or unavailable, you can bypass SSO by navigating directly to. This will bring you to the local login page (if still enabled):

```text
https://your-audiobookshelf-domain.com/login/?autoLaunch=0
```
