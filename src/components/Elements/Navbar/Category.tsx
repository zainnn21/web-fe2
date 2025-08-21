import React from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
  children: React.ReactNode;
}
const Category = ({ children }: CategoryProps) => {
  return (
    <Link
      to="/all-product"
      className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD] hidden md:block cursor-pointer hover:text-[#3ECF4C]"
    >
      {children}
    </Link>
  );
};

export default Category;
