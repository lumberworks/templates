# NextJS + Drizzle + NextAuth + TailwindCSS

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)

## Local Database Setup

A docker compose file is included to start a local postgres database.
You can start the database by running the following command in the following folder:

```bash
cd dev/db-single

docker compose up -d
```

You can then run the migrations by running the following command:

```bash
npx drizzle-kit generate
```

PS: Make sure the .env file is set up correctly with the correct database credentials and the correct database name.
You may need to create the database manually before running the migrations.
