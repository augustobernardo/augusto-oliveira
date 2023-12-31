import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fil priority alt="" width={540} height={540} />
    </div>
  );
};

export default DevImg;
