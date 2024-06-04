import { LuRocket } from "react-icons/lu";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center w-full h-fit max-w-screen-xl py-[120px] gap-8">
      <div className="flex flex-col items-center justify-center gap-10 mb-16">
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <h1 className="text-8xl text-slate-950 font-bold leading-tight ">
            Build Landing Pages with Video embedded
          </h1>
          <p className="font-mulish text-3xl">
            With Anima, you can embed Typeform in just a few steps.
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Button className="gap-2 py-4 px-12 rounded-[20px] h-15 bg-[#009379] hover:bg-[#006956] font-semibold text-base">
            <LuRocket />
            Get started
          </Button>
          <Button
            className="py-4 px-12 rounded-[20px] h-15 outline-[#009379] outline outline-2 font-semibold text-base text-[#009379] hover:text-[#009379] "
            variant="outline"
          >
            How it works
          </Button>
        </div>
      </div>
      <video className="rounded-3xl" src="https://videos.pexels.com/video-files/6332570/6332570-hd_1366_720_25fps.mp4" width="895" height="546" autoPlay muted>
      </video>
    </section>
  );
};
