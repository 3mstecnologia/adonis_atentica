# adonis_atentica

# incio

instalar o adonis
npm init adonis-ts-app nome_do_app

# banco de dados lucid

npm i @adonisjs/lucid
node ace configure @adonisjs/lucid

# configure env.ts

Open the env.ts file and paste the following code inside the Env.rules object.

DB_CONNECTION: Env.schema.string(),
Variables for the MYSQL driver
MYSQL_HOST: Env.schema.string({ format: 'host' }),
MYSQL_PORT: Env.schema.number(),
MYSQL_USER: Env.schema.string(),
MYSQL_PASSWORD: Env.schema.string.optional(),
MYSQL_DB_NAME: Env.schema.string(),
The MYSQL_HOST should always be present and formatted as a valid host.
The MYSQL_PORT should always be present and a valid number.
The MYSQL_USER and MYSQL_PASSWORD are required to authenticate with the database server. The password is marked as optional since many local database servers are configured to work without passwords.
The MYSQL_DB_NAME is the database name you want to connect with.
