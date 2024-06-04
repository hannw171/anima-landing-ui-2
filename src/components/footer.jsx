import { FaTwitter, FaDribbble, FaInstagram, FaBehance } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full max-w-screen-xl py-6 px-10 bg-[#2D2D2D]">
      <p className="text-white font-mulish text-sm">
        © 2023 Anima’s Landing Page Ui Kit.{" "}
      </p>
      <div className="flex gap-4 items-center text-white">
        <Button
          className="bg-[#4E4D4D] rounded-full"
          variant="ghost"
          size="icon"
        >
          <FaTwitter className="w-5 h-5 " />
        </Button>
        <Button
          className="bg-[#4E4D4D] rounded-full"
          variant="ghost"
          size="icon"
        >
          <FaDribbble className="w-5 h-5 " />
        </Button>
        <Button
          className="bg-[#4E4D4D] rounded-full"
          variant="ghost"
          size="icon"
        >
          <FaBehance className="w-5 h-5 " />
        </Button>
        <Button
          className="bg-[#4E4D4D] rounded-full"
          variant="ghost"
          size="icon"
        >
          <FaInstagram className="w-5 h-5 " />
        </Button>
      </div>
    </footer>
  );
};
