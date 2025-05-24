---
title: User Management and Access Control
slug: users
fullpath: /guides/users
---

---

# Introduction
A distinct user should be created for every individual who will be using the server. "Guest" and "User" accounts cannot modify server settings, while "Admin" users can. The only functional difference between a "Guest" and "User" account is that a "Guest" account cannot change their password.

# Creating a new user
Users are added by using the server settings (either an admin or the root user can do this).
![Create a new user](/guides/users/getting_to_user_creation.png)

By default, users are given access to all non-explicit content in all libraries. The admin user defaults to also being able to update, delete, and upload items. The admin user can also access and modify server settings. Users cannot modify library items unless given permission, and this permission is applied to all items the user has access to.
![Default user settings](/guides/users/user_default_settings.png)

## Access Control
User access can be limited to only certain libraries. Access can also be limited by tag, either only giving access to certain tags or everything except for certain tags. Use the "Invert" toggle to switch behavior and change the "Tags Accessible to User" to "Tags *not* Accessible to User". Tag access control applies to all libraries.
![Limiting access](/guides/users/user_limiting_access.png)
