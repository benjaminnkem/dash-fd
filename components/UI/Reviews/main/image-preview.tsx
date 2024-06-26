import Image from "next/image";

const ImagePreview = () => {
  const generateRandNum = () => Math.floor(Math.random() * (1 + 2)) + 1;

  return (
    <div className="overflow-x-auto hide_scroll">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, id) => (
          <div
            key={id}
            className={`rounded-lg overflow-hidden relative lg:aspect-square group lg:h-auto sm:min-h-[10rem] min-h-[8rem] group ${
              id + 1 > 4 && "md:hidden"
            } ${id + 1 === 1 && "col-span-2 row-span-2 md:row-span-1 md:col-span-1"}`}
          >
            <Image
              src={`/images/reviews/review_${generateRandNum()}.png`}
              alt="review"
              width={400}
              height={400}
              className="w-full h-full object-cover absolute top-0 left-0 group-hover:scale-105 duration-500"
              draggable={false}
            />

            {id + 1 === 4 && (
              <div className="absolute top-0 left-0 w-full h-full bg-black/80 duration-500 hover:bg-black/90 hidden place-content-center md:grid">
                <p>VIEW MORE</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePreview;
