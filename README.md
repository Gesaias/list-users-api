## Project setup

Criar .env file
```bash
$ touch .env

# Conteudo
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname?schema=public
```

```bash
$ pnpm install
$ pnpm db:migrate
$ pnpm db:generate
$ pnpm db:seed
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
