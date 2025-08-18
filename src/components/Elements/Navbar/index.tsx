import Logo from "./logo";
import Category from "./Category";
import Profile from "./profile";
import PP from "../../../assets/profile.png";
import Line3 from "../../../assets/3line.png";

const Navbar = () => {
  const urlParam = window.location.pathname;
  console.log(urlParam);
  return (
    <>
      <div className="flex items-center justify-between md:max-w-280 w-full">
        <Logo></Logo>
        {urlParam === "/" && <Category>Kategori</Category>}
      </div>
      {urlParam === "/" && (
        <>
          <div className="hidden md:block">
            <Profile srcprofile={PP}></Profile>
          </div>
          <div className="md:hidden">
            <Profile srcprofile={Line3} variant="!w-6 !h-6"></Profile>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
