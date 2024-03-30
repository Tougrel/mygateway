# Tougrel's Gateway

![Static Badge](https://shieldio.tougrel.dev/badge/Powered_by_Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white)

Welcome to my gateway template! You can use this freely to set up your own
and show what projects you created and contributed!

## How to run locally

First you need to make sure you install the dependencies.
I personally use pnpm for this, but you can use both npm and yarn if you want to!

> Because I use cloudflare to host my websites, I usually like to pair it together with the D1 database. In case you
> have another way to get your project data feel free to use it!

```bash
pnpm install
```

```dotenv
# You can skip this! I use it to test if everything works with the cloudflare-pages preset!
NITRO_PRESET=""

# In case you don't want to use cloudflare analytics you can remove
# this and the nuxt-cloudflare-analytics package from the project
CLOUDFLARE_ANALYTICS_TOKEN=""

# To enable this you need to set useExternalAPI to true in the nuxt.config.ts file
# Use this if you get your data from your own API
EXTERNAL_API_ADDRESS=""
```

Once you are done with the `.env` file you can go ahead and start the development server by running

```bash
pnpm run dev
```

To build and preview locally before pushing in production you can do it by using the below commands

```bash
# Build the project
pnpm run build

# Run the production build of the project
pnpm run preview
```

## Cloudflare D1 Tables

Below you can find how the SQL tables look like. Of course, you can change them if you want to add something!

### User

| Column     | Type    | Comment |
| ---------- | ------- | ------- |
| name       | text    |         |
| avatar_url | integer |         |
| social     | text    | JSON    |

### Projects

| Column      | Type    | Comment |
| ----------- | ------- | ------- |
| name        | text    |         |
| author      | integer |         |
| author_name | text    |         |
| description | text    |         |
| links       | text    | JSON    |
