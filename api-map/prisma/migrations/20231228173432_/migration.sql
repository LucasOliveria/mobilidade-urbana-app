/*
  Warnings:

  - Added the required column `path_to_destination` to the `routes_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes_info" ADD COLUMN     "path_to_destination" JSONB NOT NULL;
