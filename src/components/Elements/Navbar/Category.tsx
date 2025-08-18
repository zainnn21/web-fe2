import React from "react";

interface CategoryProps {
  children: React.ReactNode;
}
const Category = ({ children }: CategoryProps) => {
  return (
    <h1 className="font-medium text-base leading-[140%] tracking-[0.2px] text-[#333333AD] hidden md:block">
      {children}
    </h1>
  );
};

export default Category;
