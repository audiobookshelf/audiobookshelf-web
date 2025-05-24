---
title: Custom Metadata Providers
slug: custom-metadata-providers
fullpath: /guides/custom-metadata-providers
---

This guide is for making and adding custom metadata providers.
ABS provides a few common providers (such as Audible, Google, iTunes, audiobookcovers), but does not include all providers or providers that do not have a public API.
Beginning in server version 2.8.0, users can add custom metadata providers.
This allows users to build custom tools or programs to allow ABS to interface with other metadata providers.

## Adding custom provider in ABS

A custom provider can be added to ABS through "Metadata Tools" in the server settings.
To add a custom provider you will need the address of the provider (a URL if a public community provider or the IP and port if you're running the custom provider yourself).
If an authorization token is needed you will also add that here.
![Adding Custom Metadata Provider](/guides/custom_metadata/adding_provider.png)

## Creating custom provider

The request and response format that ABS expects for the API is defined in [this OpenAPI spec](https://github.com/advplyr/audiobookshelf/blob/master/custom-metadata-provider-specification.yaml).

## Community providers

These custom metadata providers have been made by the community and are not maintained as part of the core project.
Please refer to the provider documentation for information about how to set up the provider and the authorization value.

Issues with these providers should be brought up to the provider author and not in the main ABS repositories.

If you have made a custom provider and want to share, you can [open a PR for this file](https://github.com/audiobookshelf/audiobookshelf-web/blob/master/content/guides/13.custom-metadata-providers.md) to add your information to the table.

| Provider         | Repository                                         | Notes                                                            |
|------------------|----------------------------------------------------|------------------------------------------------------------------|
| abs-tract        | https://github.com/ahobsonsayers/abs-tract         | Provides Goodreads and Kindle metadata                           |
| lubimyczytac-abs | https://github.com/lakafior/lubimyczytac-abs       | Provides Lubimyczytac (biggest polish site about books) metadata |
| audioteka-abs    | https://github.com/lakafior/audioteka-abs          | Provides Audioteka (supports Polish and Czech language) metadata |
| abs-bigfinish    | https://github.com/vito0912/abs-bigfinish          | Provides Big Finish metadata                                     |
| abs-storytel     | https://github.com/Revisor01/abs-storytel-provider | Provides Storytel metadata                                       |
| abs-hardcover    | https://github.com/Vito0912/hardcover-provider     | Provides Hardcover metadata                                      |

## Community hosted providers

These providers are hosted by community members so you can easily add them to your ABS server without running additional software.
These are not hosted by the ABS team or authors of the providers, so issues should not be opened with the provider or ABS repositories.

If you host a custom provider and want to share, you can [open a PR for this file](https://github.com/audiobookshelf/audiobookshelf-web/blob/master/content/guides/13.custom-metadata-providers.md) to add your information to the table.

| Provider              | Address                                                                              | Auth | Contact                                                                       | Notes                                                                                                                                                                                    |
|-----------------------|--------------------------------------------------------------------------------------|------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| abs-tract             | https://provider.vito0912.de/goodreads<br>https://provider.vito0912.de/kindle/[lang] | abs  | fito0912@duck.com                                                             | See [Supported languages](https://github.com/ahobsonsayers/abs-tract?tab=readme-ov-file#kindle-2). Used [Repository](https://github.com/ahobsonsayers/abs-tract)                         |
| abs-bigfinish         | https://provider.vito0912.de/bigfinish                                               | abs  | [Repository Issues](https://github.com/vito0912/abs-bigfinish/issues)         | Used [Repository](https://github.com/Vito0912/abs-bigfinish)                                                                                                                             |
| abs-storytel-provider | https://provider.vito0912.de/storytel/[lang]                                         | abs  | [Repository Issues](https://github.com/Vito0912/abs-storytel-provider/issues) | See [Supported languages](https://github.com/Vito0912/abs-storytel-provider/?tab=readme-ov-file#supported-regions). Used [Repository](https://github.com/Vito0912/abs-storytel-provider) |
| audioteka-abs         | https://provider.vito0912.de/audioteka/pl                                            | abs  | fito0912@duck.com                                                             | Used [Repository](https://github.com/lakafior/audioteka-abs)                                                                                                                             |
| hardcover-provider    | https://provider.vito0912.de/hardcover                                               | abs  | [Repository Issues](https://github.com/Vito0912/hardcover-provider/issues)    | Used [Repository](https://github.com/Vito0912/hardcover-provider). See [URL Options](https://github.com/Vito0912/hardcover-provider?tab=readme-ov-file#url-options)                      |
