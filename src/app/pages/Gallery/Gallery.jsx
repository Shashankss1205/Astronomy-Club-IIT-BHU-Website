import Image from 'next/image';

function Gallery({ images }) {
  return (
    <div className="container px-5 py-10 mx-auto mb-10 ">
      <div className="flex flex-col text-center text-white w-full mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black mt-4">
          Our camera roll
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
          This gallery contains pictures from our victories at
          Inter-IIT and different colleges, Alumni's meet, partying,
          orientations, workshops, and Astrophotography.
        </p>
      </div>
      <div className="columns-1 gap-0 1g:gap- sm:columns-2 lg:columns-3 xl:columns-4 [&>img: not
  (:first-child)]:mt-5
  lg: [&>img:not (:first-child)]=mt-8">
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <Image className='filter none hover:grayscale' 
              src={src}
              alt={`Image ${index + 1}`}
              width={800}
              height={600}
            />
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default Gallery;
