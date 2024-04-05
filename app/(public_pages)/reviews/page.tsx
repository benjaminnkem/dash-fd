import ImagePreview from "@/components/UI/Reviews/image-preview";
import Reviews from "@/components/UI/Reviews/reviews";
import { dummyReviews } from "@/lib/data/reviews";

const Page = () => {
  return (
    <main>
      <div className="md:grid flex flex-col-reverse lg:grid-cols-5 md:grid-cols-4 container gap-8 py-10">
        <div className="md:col-span-3">
          <Reviews reviews={dummyReviews} />
        </div>
        <div className="lg:col-span-2">
          <ImagePreview />
        </div>
      </div>
    </main>
  );
};

export default Page;
