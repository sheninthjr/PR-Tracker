/*
  Warnings:

  - You are about to drop the column `userId` on the `UserContribution` table. All the data in the column will be lost.
  - Added the required column `userPrId` to the `UserContribution` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserContribution" DROP CONSTRAINT "UserContribution_userId_fkey";

-- AlterTable
ALTER TABLE "UserContribution" DROP COLUMN "userId",
ADD COLUMN     "userPrId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserContribution" ADD CONSTRAINT "UserContribution_userPrId_fkey" FOREIGN KEY ("userPrId") REFERENCES "UserPR"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
