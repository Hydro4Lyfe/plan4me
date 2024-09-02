/*
  Warnings:

  - You are about to drop the column `groupId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GroupInvite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserInGroup` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `startDate` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `endDate` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `projectId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GroupInvite" DROP CONSTRAINT "GroupInvite_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupInvite" DROP CONSTRAINT "GroupInvite_userId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_groupId_fkey";

-- DropForeignKey
ALTER TABLE "UserInGroup" DROP CONSTRAINT "UserInGroup_groupId_fkey";

-- DropForeignKey
ALTER TABLE "UserInGroup" DROP CONSTRAINT "UserInGroup_userId_fkey";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "groupId",
ALTER COLUMN "startDate" SET NOT NULL,
ALTER COLUMN "endDate" SET NOT NULL,
ALTER COLUMN "priority" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'in progress...';

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "projectId" TEXT NOT NULL,
ALTER COLUMN "startDate" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "GroupInvite";

-- DropTable
DROP TABLE "UserInGroup";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
