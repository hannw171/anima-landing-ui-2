import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";

import featureIcon1 from "../../assets/ic-feature-1.svg";
import featureIcon2 from "../../assets/ic-feature-2.svg";
import featureIcon3 from "../../assets/ic-feature-3.svg";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";

export const Features = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px]">
      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-slate-900 font-bold leading-tight">
            Features
          </h2>
          <p className="text-base text-slate-900 font-mulish">
            These are just a few features you’ll get using Anima Landing Page Ui
            Kit.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-8">
          <Card className="col-span-4 flex flex-col items-center rounded-2xl shadow-2xl shadow-slate-300">
            <CardHeader>
              <img src={featureIcon1} alt="" srcSet="" height={82} width={82} />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center gap-6">
              <p className="font-semibold text-3xl">Fast building</p>
              <p className="text-base font-mulish">
                Tailor Anima&apos;s Landing Page UI Kit to your unique style and
                brand with customisable components, in no time!
              </p>
            </CardContent>
            <CardFooter>
              <Button className="flex justify-center gap-2 text-[#009379]" variant="link">
                <p className="font-semibold text-base">Learn More</p>
                <FaArrowRight />
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-center rounded-2xl shadow-2xl shadow-slate-300">
            <CardHeader>
              <img src={featureIcon2} alt="" srcSet="" height={82} width={82} />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center gap-6">
              <p className="font-semibold text-3xl">Responsive Design</p>
              <p className="text-base font-mulish">
                No need to worry about screen size. Anima&apos;s Landing Page UI Kit adapts to any screen size, from desktop to mobile.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="flex justify-center gap-2 text-[#009379]" variant="link">
                <p className="font-semibold text-base">Learn More</p>
                <FaArrowRight />
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-center rounded-2xl shadow-2xl shadow-slate-300">
            <CardHeader>
              <img src={featureIcon3} alt="" srcSet="" height={82} width={82} />
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center text-center gap-6">
              <p className="font-semibold text-3xl">No Code Needed</p>
              <p className="text-base font-mulish">
                Zero coding skills required, Anima&apos;s Landing Page UI Kit empowers you to create stunning landing pages with ease.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="flex justify-center gap-2 text-[#009379]" variant="link">
                <p className="font-semibold text-base">Learn More</p>
                <FaArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
