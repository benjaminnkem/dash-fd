export type ReviewTag = "network" | "power" | "water" | "traffic" | "security";

export type ReviewType = {
  username: string;
  date: string;
  location: string;
  rate: number;
  image: string;
  description: string;
  likes: number;
  dislikes: number;
  comments: number;
  tag?: ReviewTag; // more can be added or set to a string instead
  userRole?: "admin" | "user";
};

export type Amenity = { id: number; amenity: string };
