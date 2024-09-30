/*
  Warnings:

  - The primary key for the `type_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `type_users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."type_users" DROP CONSTRAINT "type_users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "type_users_pkey" PRIMARY KEY ("id");
