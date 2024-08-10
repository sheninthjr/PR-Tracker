/*
  Warnings:

  - You are about to drop the column `prType` on the `UserContribution` table. All the data in the column will be lost.
  - Added the required column `commitCount` to the `Repos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `forkCount` to the `Repos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starCount` to the `Repos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `commitsCount` to the `UserContribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filesChangedCount` to the `UserContribution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prStatus` to the `UserContribution` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PrStatus" AS ENUM ('OPENED', 'CLOSED', 'MERGED');

-- AlterTable
ALTER TABLE "Repos" ADD COLUMN     "commitCount" TEXT NOT NULL,
ADD COLUMN     "forkCount" TEXT NOT NULL,
ADD COLUMN     "starCount" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserContribution" DROP COLUMN "prType",
ADD COLUMN     "commitsCount" TEXT NOT NULL,
ADD COLUMN     "filesChangedCount" TEXT NOT NULL,
ADD COLUMN     "prStatus" "PrStatus" NOT NULL;

-- DropEnum
DROP TYPE "PrType";
