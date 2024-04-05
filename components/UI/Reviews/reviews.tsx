import { Rating } from "@/lib/types/global";
import Image from "next/image";
import { FC } from "react";

type Props = { reviews: Rating[] };

const Reviews: FC<Props> = ({ reviews }) => {
  return (
    <div className="divide-y divide-zinc-300">
      {reviews.map((review, id) => (
        <div key={id} className="py-5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.image}
                  alt={`${review.username} - profile pic`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center gap-[2px]">
                <p>{review.username}</p>
                {review.userRole === "admin" && <p className="font-medium">(Admin)</p>}
              </div>
              <p className="text-zinc-400 text-sm">{review.date}</p>
            </div>

            <div className="flex items-center gap-1">
              <svg width="12" key={id} height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 0L7.875 3.975L12 4.575L9 7.65L9.675 12L6 9.975L2.325 12L3 7.65L0 4.575L4.125 3.975L6 0Z"
                  fill="#FABB07"
                />
              </svg>
              <p>{review.rate.toFixed(1)}</p>
            </div>
          </div>

          <p>{review.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8 text-[#0d2159]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-[2px]">
                  <Image src={"/svgs/like_outline.svg"} alt="like icon" width={16} height={10} />
                  <p>{review.likes}</p>
                </div>

                <div className="flex items-center gap-[2px]">
                  <Image src={"/svgs/dislike_outline.svg"} alt="like icon" width={16} height={10} />
                  <p>{review.dislikes}</p>
                </div>
              </div>

              <div className="flex items-center gap-[2px]">
                <Image src={"/svgs/comment_outline.svg"} alt="like icon" width={16} height={16} />
                <p>{review.comments}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
