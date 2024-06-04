import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { FaCheck } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export const Pricelist = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px]">
      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-slate-900 font-bold leading-tight">
            Pick Your Perfect Plan
          </h2>
          <p className="text-base text-slate-900 font-mulish">
            Find the perfect plan for your business with our flexible pricing
            options.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-8">
          <Card className="col-span-4 flex flex-col items-start rounded-2xl shadow-lg py-10 px-7 gap-6 shadow-2xl shadow-slate-300">
            <CardHeader className="gap-y-1 p-0 w-full">
              <p className="font-mulish text-xl text-base">Free</p>
              <CardTitle>
                <div className="flex gap-x-3 items-baseline">
                  <p className="font-bold text-5xl text-[#2D2D2D]">$0</p>
                  <p className="font-bold font-mulish text-base text-[#3B3B3B] leading-loose">
                    / month
                  </p>
                </div>
              </CardTitle>
              <CardDescription>
                <p className="font-mulish text-base text-[#3B3B3B] leading-loose">
                  Best for Small Teams or Individuals.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3 p-0 w-full">
              <div className="flex items-center gap-x-3">
                <FaCheck className="text-[#009379]" />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <FaCheck className="text-[#009379]" />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <FaCheck className="text-[#009379]" />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-0 w-full">
              <Button
                className="w-full py-4 px-12 rounded-[20px] h-15 bg-[#E5F4F2] font-semibold text-base text-[#009379] "
                variant="secondary"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-start rounded-2xl shadow-lg py-10 px-7 gap-6 shadow-2xl shadow-slate-300">
            <CardHeader className="gap-y-1 p-0 w-full">
              <p className="font-mulish text-xl text-base">Professional</p>
              <CardTitle>
                <div className="flex gap-x-3 items-baseline">
                  <p className="font-bold text-5xl text-[#2D2D2D]">$19</p>
                  <p className="font-bold font-mulish text-base text-[#3B3B3B] leading-loose">
                    / month
                  </p>
                </div>
              </CardTitle>
              <CardDescription>
                <p className="font-mulish text-base text-[#3B3B3B] leading-loose">
                  Ideal for Growing Companies.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3 p-0 w-full">
              <div className="flex items-center gap-x-3">
                <FaCheck className="text-[#009379]" />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <FaCheck className="text-[#009379]" />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <FaCheck className="text-[#009379]" />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-0 w-full">
              <Button
                className="w-full py-4 px-12 rounded-[20px] h-15 bg-[#E5F4F2] font-semibold text-base text-[#009379] "
                variant="secondary"
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 flex flex-col items-start rounded-2xl shadow-lg py-10 px-7 gap-6 bg-[#009379] text-white shadow-2xl shadow-slate-300">
            <CardHeader className="gap-y-1 p-0 w-full">
              <p className="font-mulish text-xl text-base">Professional</p>
              <CardTitle>
                <div className="flex gap-x-3 items-baseline">
                  <p className="font-bold text-5xl">$19</p>
                  <p className="font-bold font-mulish text-base leading-loose">
                    / month
                  </p>
                </div>
              </CardTitle>
              <CardDescription className="text-white">
                <p className="font-mulish text-base leading-loose">
                  Ideal for Growing Companies.
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3 p-0 w-full">
              <div className="flex items-center gap-x-3">
                <FaCheck />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <FaCheck />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                <FaCheck />
                <p className="font-mulish font-bold">
                  Write feature details here
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-0 w-full">
              <Button
                className="w-full py-4 px-12 rounded-[20px] h-15 bg-white font-semibold text-base text-[#009379] hover:bg-[#E5F4F2] justify-center items-center gap-5"
                variant="primary"
              >
                Get Started
                <FaArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
