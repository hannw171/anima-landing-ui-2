import Logo from "../assets/logo.svg";
import { Button } from "./ui/button";
import { LuRocket } from "react-icons/lu";

export const Header = () => {
  return (
    <>
      <header className="w-full max-w-screen-xl py-5 flex justify-between items-center">
        {/* LOGO */}
        <img src={Logo} height={32} />

        {/* Button Group */}
        <div className="flex justify-center items-center gap-5">
          <Button className="font-semibold text-base text-[#009379]" variant="link">
            Contact
          </Button>
          <Button
            className="py-4 px-12 rounded-[20px] h-15 bg-[#E5F4F2] font-semibold text-base text-[#009379] "
            variant="secondary"
          >
            How it works
          </Button>
          <Button className="gap-2 py-4 px-12 rounded-[20px] h-15 bg-[#009379] hover:bg-[#006956] font-semibold text-base">
            <LuRocket />
            Get started
          </Button>
        </div>
      </header>
    </>
  );
};
