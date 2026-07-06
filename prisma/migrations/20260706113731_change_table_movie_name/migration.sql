/*
  Warnings:

  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Movies";

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);
