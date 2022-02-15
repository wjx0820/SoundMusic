### Database

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fstarters%2Ftree%2Fmaster%2Fexamples%2Ffullstack-music-app&plugins=postgresql)

### Try it out
Demo: sound-music.vercel.app
Email: user@test.com
Password: password

### Prisma

1. synchronize your Prisma schema with your database schema(每当修改 schema 时，可以运行此命令，同步 schema):
   `npx prisma db push`

2. create and apply migrations in development environment(如果 package.json 里有设置 prisma seed 字段，会自动跑 seed script):
   `npx prisma migrate dev`

3. seeding your database:
   `npx prisma db seed`

4. GUI for database:
   `npx prisma studio`

5. prisma create and upsert 区别：
   upsert 配合 where 找到然后更新，create 凭空创建

6. reset the database:
   `npx prisma migrate reset`
