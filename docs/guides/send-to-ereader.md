---
title: Send to E-Reader
slug: send_to_ereader
fullpath: /guides/send_to_ereader
---

---

# Introduction

This guide is how to send files to a device.
Email settings are located in the server settings under "Email" in the left pane.

# Set up the email to send from

The first step is to configure the e-mail that ABS will use to send the e-mail.
The following steps are for a Gmail.
If you use a different provider or self-hosted option, follow the steps for that specific email setup.

- Enter the Host (for example, `smtp.gmail.com`)
- Set the port (common ports include: 587, 465, 25)
  - If using 587 or 25, you will need to disable the "Secure" toggle
- Set the "Username" to login
- Set the password
  - If using Gmail, you will need to [create an app password](https://support.google.com/accounts/answer/185833?hl=en) and use the app password in this field
- Enter the From Address. Email address can be plain `test@example.com` or with formatted name `Name <test@example.com>`.
  - If using Gmail, the email address cannot be changed from the one connected to your account but a custom display name is supported.
- Enter a Test Email, which is the destination address to make sure the test email is sent correctly
- Press Save, then press Test

![Email Settings](/guides/send_to_ereader/email_settings.png)

# Add E-Reader

Each e-reader device has a Name and an Email, where the Name is how the device will be displayed in ABS and the Email is the destination email address of the device.
E-reader devices can be configured to be accessible by:

- Only admins
- All users excluding guests
- All users including guests
- Specific user accounts

![Add e-reader](/guides/send_to_ereader/add_ereader.png)

# Common issues

If sending to Kindle, you will need to make sure the e-mail ABS is using is [authorized](https://www.amazon.com/sendtokindle/email) to send ebooks to your Kindle email.
