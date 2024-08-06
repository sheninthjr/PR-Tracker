/*
  Warnings:

  - Added the required column `ethAddress` to the `UserContribution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserContribution" ADD COLUMN     "ethAddress" TEXT NOT NULL;
