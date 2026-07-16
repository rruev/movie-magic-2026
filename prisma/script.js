import "dotenv/config";
import { prisma } from "../src/lib/prisma.js";

async function main() {
  // Seed wiht some data
  const movies = await prisma.movie.createMany({
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

  const actors = await prisma.actor.createMany({
    data: [
      {
        age: 54,
        born: "Hayward, California, United States",
        imgUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRxBMYzVhLl8JWS4L8EmfN_WeNGjvmBMBYlxreiHTiBU3ATBXJVamqmFaAkJX-_BuB0Mj7ZrjKjAxXn_acCIBRyMYPuEHvJ4-SYF8XRrLyjfPpXt0Xzjboy0hp7zzvgMPs_IBUu3FrSm7Ye&s=19",
        name: "Dwayne Johnson",
        createdAt: new Date("2026-07-09T09:47:34.976Z"),
      },
      {
        age: 43,
        born: "London, United Kingdom",
        imgUrl: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQeJ6MXDjdu1j7EpOvCcPCekeTrdPG_hHFkP7eu7GJndQB314bb_XnBbl2CAWDOltnn5BrEB7kVd3EAvow1eGwgjcOThYFKG2PvXXnobUGVkfqRX0L6-gEQYG-R3DUf9cfXzAfGMTXiqW-m&s=19",
        name: "Emily Blunt",
        createdAt: new Date("2026-07-09T09:52:46.681Z"),
      },
      {
        age: 26,
        born: "Atlanta, Georgia, USA",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Rw3zRfydneoIRpJlqgeuw59uGCc8Xrix6UNZpMKEIB1_itXnFB7IQ4ol1U9AJ7NZmhZe-GTJ6ep0XSrAMdAGB0NJeHZvgK_RfhGzOmyw&s=10",
        name: "Halle Bailey",
        createdAt: new Date("2026-07-09T10:32:41.800Z"),
      }
    ]
  })
}

main()