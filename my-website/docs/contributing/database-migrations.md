---
id: database-migrations
sidebar_label: Database Migrations
title: Database Migrations
sidebar_position: 11
---

The Audiobookshelf server performs database migrations automatically when upgrading or downgrading your server vesion. Database migrations are an internal mechanism used to keep an existing installation’s database in sync with the server version it is running.

:::warning
Switching between installation methods (e.g., Linux, Windows, Docker) or restoring a database from a different installation method is not a supported process. The database migrations described on this page are not the same thing.
:::

---

## What is a Migration?

A migration is a script that changes the structure of the database. This can include:

- Creating or removing tables
- Adding, modifying, or removing columns
- Modifying indexes for faster searches.

A migration script consists of two parts: an "up" script that applies the changes to the database, and a "down" script that undoes the changes.

## Migration Guidelines

When writing a migration for the database, keep the following in mind:

- You _must_ name your migration script according to the following convention: `[server_version]-[migration_name].js`. For example, `v2.14.0-create-users-table.js`.
  - `server_version` is the version of the server to run the migration on (usually the next server release).
  - `migration_name` is a short description of the changes that the migration makes.
- The script exports two async functions: `up` and `down`. The `up` function contains the script that applies the changes to the database, and the `down` function contains the script to undo the changes. The `up` and `down` functions accept a single object parameter with a `context` property that contains a reference to a Sequelize [QueryInterface](https://sequelize.org/docs/v6/other-topics/query-interface/) object, and a [Logger](https://github.com/advplyr/audiobookshelf/blob/423a2129d10c6d8aaac9e8c75941fa6283889602/server/Logger.js#L4) object for logging. A typical migration script might look like this:

```js
async function up({ context: { queryInterface, logger } }) {
  // Upwards migration script
  logger.info('migrating ...');
  ...
}

async function down({ context: { queryInterface, logger } }) {
  // Downward migration script
  logger.info('reverting ...');
  ...
}

module.exports = {up, down}
```

- Always export both `up` and `down` functions.
- Both the `up` and `down` function must be idempotent (i.e. they are safe to run multiple times on the same database).
- Prefer using only `queryInterface` and `logger` parameters, the `sequelize` module, and node.js built-in modules in your migration scripts. You can require other modules, but be aware that they might not be available or change from they ones you tested with.
- It is your responsibility to make sure that the down migration reverts the changes made by the up migration.
- Log detailed information on every step of the migration. Use `Logger.info()` and `Logger.error()`.
- Test your migrations thoroughly before committing them.
  - Write unit tests for your migrations (see `test/server/migrations` for examples)
  - You can force a server version change by modifying the version field in `package.json` on your dev environment (but make sure to revert this change before committing, your PR should not change the version number of the server).

## How are migrations run?

On server startup, the server compares the database version to the server version. If these version numbers to not match, migrations are performed to upgrade or downgrade the database to match the server version. Migrations are ran in order (i.e. oldest to newest `up` migrations if the server version has increased, or newest to oldest `down` migrations if the server version has decreased).

This means that you can switch between server releases without having to worry about running migrations manually. The server will automatically apply the necessary migrations when it starts.

Migrations scripts are also copied to `config/migrations/` when starting the server to ensure the down migrations are avaiable even when running an older version of the server.
