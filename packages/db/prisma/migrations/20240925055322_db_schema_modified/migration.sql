/*
  Warnings:

  - You are about to drop the column `firstname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Repos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserContribution` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPR` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StateType" AS ENUM ('OPEN', 'CLOSED', 'MERGED');

-- DropForeignKey
ALTER TABLE "Repos" DROP CONSTRAINT "Repos_adminId_fkey";

-- DropForeignKey
ALTER TABLE "UserContribution" DROP CONSTRAINT "UserContribution_userPrId_fkey";

-- DropForeignKey
ALTER TABLE "UserPR" DROP CONSTRAINT "UserPR_repoId_fkey";

-- DropForeignKey
ALTER TABLE "UserPR" DROP CONSTRAINT "UserPR_userId_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "firstname",
DROP COLUMN "lastname",
DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Repos";

-- DropTable
DROP TABLE "UserContribution";

-- DropTable
DROP TABLE "UserPR";

-- DropEnum
DROP TYPE "PrStatus";

-- CreateTable
CREATE TABLE "UserRepository" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,
    "fork" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserRepository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PullRequest" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "state" "StateType" NOT NULL,
    "repoId" TEXT NOT NULL,
    "openCommit" INTEGER NOT NULL DEFAULT 0,
    "closedCommit" INTEGER NOT NULL DEFAULT 0,
    "mergedCommit" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "PullRequest_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserRepository" ADD CONSTRAINT "UserRepository_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PullRequest" ADD CONSTRAINT "PullRequest_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "UserRepository"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
