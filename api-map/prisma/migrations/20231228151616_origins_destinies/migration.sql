/*
  Warnings:

  - Added the required column `origin_destiny_id` to the `locals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "locals" ADD COLUMN     "origin_destiny_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "origins_destinies" (
    "id" SERIAL NOT NULL,
    "origin_id" INTEGER NOT NULL,
    "destiny_id" INTEGER NOT NULL,

    CONSTRAINT "origins_destinies_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "locals" ADD CONSTRAINT "locals_origin_destiny_id_fkey" FOREIGN KEY ("origin_destiny_id") REFERENCES "origins_destinies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
