import { prisma } from "../src/lib/prisma.js";

async function main() {
    // Create a new user with a post
    const movies = await prisma.movie.createManyAndReturn({
      data: [
        {
          title: "Jungle Cruise",
          category: "Adventure",
          description: "Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.",
          imgUrl: "/img/jungle-cruise.jpeg",
          rating: 6.6,
          year: 2021,
          director: "Jaume Collet-Serra",
          genre: "Adventure"
        },
        {
          title: "The Little Mermaid",
          category: "Fantasy",
          description: "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.",
          imgUrl: "/img/the-little-mermaid.jpg",
          rating: 7.2,
          year: 2023,
          director: "Rob Marshall",
          genre: "Fantasy"
        },
        {
          title: "Home Alone",
          category: "Comedy",
          description: "It is Christmas time and the McCallister family is preparing for a vacation in Paris, France. But the youngest in the family, Kevin, got into a scuffle with his older brother Buzz and was sent to his room. The next morning, while the rest of the family rushed to the airport, they accidentally left Kevin behind. At first he enjoys having the house to himself, but soon he discovers that two burglars are planning to rob his home on Christmas Eve. Kevin uses clever and hilarious booby traps to defend his house and stop the thieves.",
          imgUrl: "/img/home-alone.jpeg",
          rating: 7.7,
          year: 1990,
          director: "Chris Columbus",
          genre: "Comedy"
        }
      ]
    })

    console.log("Created movies:", movies);
}

main()