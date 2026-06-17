import logo from "@/assets/packson-ventures-logo.png";

export const HeaderLogo = () => {
  return (
    <div className="caret-transparent outline-[3px] text-center md:text-left">
      <img
        src={logo}
        alt="Packson Ventures Logo"
        className="caret-transparent inline outline-[3px] text-center align-baseline w-6/12 mt-0 mb-8 md:mt-[-30px] md:text-left md:w-[38%] md:mb-[84.8px]"
      />
    </div>
  );
};
