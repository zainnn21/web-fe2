import Logo from "../../../assets/Logo.png";

interface LogoImgProps {
  titleimg?: string;
}

const LogoImg = ({ titleimg }: LogoImgProps) => {
  return (
    <img
      src={Logo}
      alt="videobelajar"
      title={titleimg}
      className="w-38 h-10.5 md:w-51 md:h-14"
    />
  );
};

export default LogoImg;
