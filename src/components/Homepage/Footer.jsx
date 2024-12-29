import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#191B1B] flex flex-col items-center py-8 gap-y-2 text-white text-sm">
     <h3>
     SHOES STORE
     </h3>
     <p className="text-white/75">Report abuse</p>
     
     <div className="flex gap-3">
     <h3>Made with</h3>
        <img src="src/assets/logo.png" alt="logo"  className="h-[1rem]"/>
     </div>
     
    </footer>
  );
};

export default Footer;
