import Header from "../components/Fragments/Header";
import AllProductLayout from "../components/Layouts/AllProductLayout";
import Footer from "../components/Fragments/Footer";

const AllProduct = () => {
  return (
    <div  className="flex flex-col justify-between h-screen">
      <Header />
      <AllProductLayout />
      <Footer />
    </div>
  );
};

export default AllProduct;
