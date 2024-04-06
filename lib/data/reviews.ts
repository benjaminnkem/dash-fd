import { Rating, RatingTag } from "@/lib/types/global";

export const dummyTags: RatingTag[] = ["network", "power", "water", "traffic", "security"];

export const dummyReviews: Rating[] = [
  {
    comments: 125,
    date: "5 Months ago",
    location: "Ikate, Lekki",
    description:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    tag: dummyTags[Math.floor(Math.random() * dummyTags.length)],
    dislikes: 4,
    likes: 1224,
    rate: Math.floor(Math.random() * (1 + 5)) + 1, // random number btw 1 - 5
    username: "James T",
    image: "/images/home/review_image.png",
  },
  {
    comments: 125,
    date: "5 Months ago",
    location: "Ikate, Lekki",
    description:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    tag: dummyTags[Math.floor(Math.random() * dummyTags.length)],
    dislikes: 4,
    likes: 1224,
    rate: Math.floor(Math.random() * (1 + 5)) + 1, // random number btw 1 - 5
    username: "Taiwo O.",
    image: "/images/home/review_image.png",
    userRole: "admin",
  },
  ...Array.from({ length: 3 }).map(() => ({
    comments: 125,
    date: "5 Months ago",
    location: "Ikate, Lekki",
    description:
      "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
    tag: dummyTags[Math.floor(Math.random() * dummyTags.length)],
    dislikes: 4,
    likes: 1224,
    rate: Math.floor(Math.random() * (1 + 5)) + 1, // random number btw 1 - 5
    username: "James T",
    image: "/images/home/review_image.png",
  })),
];
