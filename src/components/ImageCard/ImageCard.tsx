type ImageCardProps = {
  name: string;
  surname: string;
  imgUrl?: string;
};

const ImageCard = ({ name, surname, imgUrl }: ImageCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-fit">
      <img
        className="w-full max-h-48 object-cover"
        src={imgUrl}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className=" text-xl mb-2">
          Name: <span className="font-bold">{name}</span>
        </div>
        <div className="text-xl mb-2">
          Surname: <span className="font-bold">{surname}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
