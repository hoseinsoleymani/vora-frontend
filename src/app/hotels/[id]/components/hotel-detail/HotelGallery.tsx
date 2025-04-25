interface HotelGalleryProps {
  images: string[];
  name: string;
  onGalleryOpen: () => void;
}

export const HotelGallery: React.FC<HotelGalleryProps> = ({ images, name, onGalleryOpen }) => (
  <div className="flex gap-2 mb-8">
    <div className="flex-[2.5] h-[400px]">
      <img
        src={images[0]}
        alt={`${name} - Main Image`}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="flex-[0.8] flex flex-col gap-2">
      {images.slice(1, 3).map((image, index) => (
        <div key={index} className="h-[130px]">
          <img
            src={image}
            alt={`${name} - Image ${index + 2}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
      <div className="h-[130px] relative group cursor-pointer" onClick={onGalleryOpen}>
        <img
          src={images[3]}
          alt={`${name} - Image 4`}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white">Show all photos</span>
          </div>
        </div>
      </div>
    </div>
  </div>
); 