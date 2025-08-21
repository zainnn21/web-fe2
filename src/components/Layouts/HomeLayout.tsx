import Header from "../Fragments/Header";
import BodyHome from "../Fragments/BodyHome";
import FooterHome from "../Fragments/Footer";

const HomePageLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center px-5 md:px-30 py-7 md:py-16 md:gap-16 gap-6 w-full items-center ">
        <BodyHome />
      </div>
      <FooterHome />
    </>
  );
};

export default HomePageLayout;
