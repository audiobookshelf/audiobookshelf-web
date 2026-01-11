---
id: api-keys
sidebar_label: API Keys
title: API Keys
sidebar_position: 1.2
---

API Keys in Audiobookshelf provide a secure way to authenticate scripts and automation tools. They are part of the new JWT authentication system introduced in version [2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0) and offer a more secure alternative to the previous token-based authentication.

:::note
API Keys are designed for server-to-server communication and automation scripts. For third-party apps, use the standard JWT authentication flow instead.
:::

For more information about the new authentication system, see the [GitHub discussion](https://github.com/advplyr/audiobookshelf/discussions/4460).

## What are API Keys?

API Keys are standalone authentication tokens that:

- **Act on behalf of a specific user** - Each API key is associated with a user account and inherits that user's permissions
- **Have configurable expiration** - You can set optional expiration dates for enhanced security
- **Can be easily revoked** - API keys can be deactivated or deleted without affecting other sessions

## Creating API Keys

You must be an **admin user** to create API keys

1. **Access the API Keys section**

   - Log into your Audiobookshelf web interface
   - Navigate to Settings → Users → API Keys (or use the `/api/api-keys` endpoint)

2. **Create a new API key**

   - Click "Create API Key" or "Add New"
   - Fill in the required information:
     - **Name**: A descriptive name for your API key (e.g., "Backup Script", "Home Assistant Integration")
     - **User**: Select which user account this API key will act on behalf of
     - **Expiration** (optional): Set a date when the API key should expire
     - **Active**: Enable or disable the API key

3. **Save and copy the key**
   - After creation, the API key will be displayed once
   - **Important**: Copy and store the key securely - it won't be shown again

## Using API Keys

### Authentication Header

Include your API key in the `Authorization` header of your HTTP requests:

```bash
Authorization: Bearer <your_api_key_here>
```

### cURL Example

```bash
curl -H "Authorization: Bearer <your_api_key>" \
     https://your-server:port/api/libraries
```

### JavaScript Example

```javascript
const response = await fetch("https://your-server:port/api/libraries", {
  headers: {
    Authorization: "Bearer <your_api_key>",
  },
});
const data = await response.json();
```

### Python Example

```python
import requests

response = requests.get("https://your-server:port/api/libraries",
                        headers={"Authorization": "Bearer <your_api_key>"}
                       )
data = response.json()
```
