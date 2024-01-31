import React from "react";

type WrapperProps = {
  title: string;
  children: React.ReactNode;
};

const GalleryWrapper: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <div className="px-8 py-6 md:px-32 md:py-8">
      <h2 className="text-2xl font-bold text-white my-4">{title}</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-2">
        {children}
      </div>
    </div>
  );
};

export default GalleryWrapper;
