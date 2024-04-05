import Image from "next/image";
import { FC } from "react";
import classNames from "classnames";

export type RateTag = "network" | "power" | "water" | "traffic" | "security";

export type RateCardType = {
  username: string;
  date: string;
  location: string;
  rate: number;
  image: string;
  description: string;
  likes: number;
  dislikes: number;
  comments: number;
  tag: RateTag; // more can be added or set to a string instead
};

const RateCard: FC<RateCardType> = ({
  description,
  comments,
  date,
  dislikes,
  image,
  likes,
  location,
  rate,
  tag,
  username,
}) => {
  const generateTagStyle = (): string | null => {
    switch (tag) {
      case "network":
        return "border-[#ad307b] text-[#821958] bg-[#fbdbee]";
      case "security":
        return "border-zinc-700 text-zinc-600 bg-zinc-300/40";
      case "power":
        return "border-[#f56a57] text-black bg-[#f56a57]";
      case "traffic":
        return "border-[#a17d24] text-[#594510] bg-[#f5e9cb]";
      case "water":
        return "border-[#2863b8] text-[#5475a5] bg-[#d1e4fa]";
      default:
        // default design (can change)
        return null;
    }
  };

  return (
    <div className="size-64 shadow-2xl duration-300 rounded-xl border border-gray-50 hover:border-gray-300 bg-white">
      <div className="flex flex-col justify-between h-full p-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[6px]">
            <div className="size-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={image}
                alt={`${username} - profile pic`}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-sm">
              <p className="font-medium">{username}</p>
              <p className="text-xs">{date}</p>
            </div>
          </div>
          <div>
            <p className="font-medium text-sm">{location}</p>
            <div className="flex items-center">
              {Array.from({ length: rate }).map((_, id) => (
                <svg width="12" key={id} height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                    fill="#FABB07"
                  />
                </svg>
              ))}
              {Array.from({ length: 5 - rate }).map((_, id) => (
                <svg width="12" key={id} height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                    fill="#d1d1d1"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="text-sm">
          <p>{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#8f95b2]">
            <div className="flex items-center gap-[2px]">
              <Image src={"/svgs/like.svg"} alt="like icon" width={16} height={10} />
              <p>{likes}</p>
            </div>

            <div className="flex items-center gap-[2px]">
              <Image src={"/svgs/dislike.svg"} alt="like icon" width={16} height={10} />
              <p>{dislikes}</p>
            </div>
            <div className="flex items-center gap-[2px]">
              <Image src={"/svgs/comment.svg"} alt="like icon" width={16} height={16} />
              <p>{comments}</p>
            </div>
          </div>

          <div className={`px-3 py-[2px] text-xs rounded-full border ${generateTagStyle()}`}>{tag}</div>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
