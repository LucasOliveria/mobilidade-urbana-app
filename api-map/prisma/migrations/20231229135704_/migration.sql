/*
  Warnings:

  - The `path_to_destination` column on the `routes_info` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "routes_info" DROP COLUMN "path_to_destination",
ADD COLUMN     "path_to_destination" TEXT[];
