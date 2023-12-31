import Link from "next/link";
import Image from "next/image";

import LogoImage from "../public/assets/logo_ao.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={LogoImage} width={54} height={54} priority alt="" />
    </Link>
  );
};

export default Logo;
