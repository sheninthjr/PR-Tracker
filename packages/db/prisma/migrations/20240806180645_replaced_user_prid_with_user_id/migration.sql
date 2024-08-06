/*
  Warnings:

  - You are about to drop the column `userPrId` on the `UserContribution` table. All the data in the column will be lost.
  - Added the required column `userId` to the `UserContribution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserContribution" DROP CONSTRAINT "UserContribution_userPrId_fkey";

-- AlterTable
ALTER TABLE "UserContribution" DROP COLUMN "userPrId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserContribution" ADD CONSTRAINT "UserContribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserPR"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
