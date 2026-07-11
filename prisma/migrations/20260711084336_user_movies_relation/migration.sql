-- DropForeignKey
ALTER TABLE "actor_movies" DROP CONSTRAINT "actor_movies_actorId_fkey";

-- DropForeignKey
ALTER TABLE "actor_movies" DROP CONSTRAINT "actor_movies_movieId_fkey";

-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actor_movies" ADD CONSTRAINT "actor_movies_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "actors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "actor_movies" ADD CONSTRAINT "actor_movies_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
