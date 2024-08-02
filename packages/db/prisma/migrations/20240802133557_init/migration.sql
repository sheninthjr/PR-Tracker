-- CreateEnum
CREATE TYPE "PrType" AS ENUM ('OPENED', 'CLOSED', 'MERGED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Repos" (
    "id" TEXT NOT NULL,
    "githubUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "Repos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPR" (
    "id" TEXT NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "repoId" TEXT NOT NULL,

    CONSTRAINT "UserPR_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserContribution" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "prType" "PrType",
    "prUrl" TEXT NOT NULL,
    "userPrId" TEXT NOT NULL,

    CONSTRAINT "UserContribution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_githubUsername_key" ON "User"("githubUsername");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Repos" ADD CONSTRAINT "Repos_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPR" ADD CONSTRAINT "UserPR_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPR" ADD CONSTRAINT "UserPR_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "Repos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserContribution" ADD CONSTRAINT "UserContribution_userPrId_fkey" FOREIGN KEY ("userPrId") REFERENCES "UserPR"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
