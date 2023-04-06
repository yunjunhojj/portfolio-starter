import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <a href="#home">
            <h1 className="text-5xl font-bold ">Junho</h1>
          </a>
          <a href="#contact">
            <h2 className="text-2xl font-bold ">연락하기</h2>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
