/*
  Warnings:

  - Made the column `prType` on table `UserContribution` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserContribution" ALTER COLUMN "prType" SET NOT NULL;
