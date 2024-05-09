-- CreateEnum
CREATE TYPE "Olahraga" AS ENUM ('gym', 'lari', 'main');

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "olahraga" "Olahraga" NOT NULL,
    "waktu" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);
