import ImagePreview from "@/components/UI/Reviews/image-preview";
import Reviews from "@/components/UI/Reviews/reviews";
import { dummyReviews } from "@/lib/data/reviews";

const Page = () => {
  return (
    <main>
      <div className="grid grid-cols-5 container gap-5">
        <div className="col-span-3">
          <Reviews reviews={dummyReviews} />
        </div>
        <div className="col-span-2">
          <ImagePreview />
        </div>
      </div>
    </main>
  );
};

export default Page;
