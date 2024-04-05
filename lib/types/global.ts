export type RatingTag = "network" | "power" | "water" | "traffic" | "security";

export type Rating = {
  username: string;
  date: string;
  location: string;
  rate: number;
  image: string;
  description: string;
  likes: number;
  dislikes: number;
  comments: number;
  tag: RatingTag; // more can be added or set to a string instead
};
