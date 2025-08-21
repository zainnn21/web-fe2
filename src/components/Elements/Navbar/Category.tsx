import React from "react";

interface CategoryProps {
  children: React.ReactNode;
}
const Category = ({ children }: CategoryProps) => {
  return (
    <button className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD] hidden md:block cursor-pointer hover:text-[#FF5C2B]">
      {children}
    </button>
  );
};

export default Category;
