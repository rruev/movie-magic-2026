/*
  Warnings:

  - You are about to drop the `_ActorToMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ActorToMovie" DROP CONSTRAINT "_ActorToMovie_A_fkey";

-- DropForeignKey
ALTER TABLE "_ActorToMovie" DROP CONSTRAINT "_ActorToMovie_B_fkey";

-- DropTable
DROP TABLE "_ActorToMovie";

-- CreateTable
CREATE TABLE "actor_movies" (
    "actorId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,
    "nameInMovie" TEXT NOT NULL,

    CONSTRAINT "actor_movies_pkey" PRIMARY KEY ("actorId","movieId")
);

-- AddForeignKey
ALTER TABLE "actor_movies" ADD CONSTRAINT "actor_movies_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "actors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actor_movies" ADD CONSTRAINT "actor_movies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
