import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";

export const Testimonials = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px] bg-[#F8D57E] px-14">
      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-slate-900 font-bold leading-tight">
            Real Stories from Satisfied Customers
          </h2>
          <p className="text-base text-slate-900 font-mulish">
            See how our landing page ui kit is making an impact.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-8">
          <Card className="col-span-6 p-10 grid items-center rounded-2xl drop-shadow-2xl drop-shadow-blue-300 grid-cols-12">
            <CardHeader className="items-center gap-y-4 col-span-5 p-0">
              <Avatar className="w-32 h-auto">
                <AvatarImage src="https://ui-avatars.com/api/?name=Sarah+K." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold text-xl">Sarah K.</p>
                <p className="font-mulish text-[#374151] text-sm">
                  UX Designer @Brello
                </p>
              </div>
            </CardHeader>
            <div className="flex flex-col col-span-7">
              <CardFooter>
                <div className="flex justify-between gap-1 text-[#F8D57E] text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </CardFooter>
              <CardContent className="flex flex-col justify-center items-center gap-6 pb-0">
                <p className="text-base font-mulish text-[#2D2D2D]">
                  &quot;Anima&apos;s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.&quot;
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="col-span-6 p-10 grid items-center rounded-2xl drop-shadow-2xl drop-shadow-blue-300 grid-cols-12">
            <CardHeader className="items-center gap-y-4 col-span-5 p-0">
              <Avatar className="w-32 h-auto">
                <AvatarImage src="https://ui-avatars.com/api/?name=Sarah+K." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-1 items-center">
                <p className="font-semibold text-xl">Sarah K.</p>
                <p className="font-mulish text-[#374151] text-sm">
                  UX Designer @Brello
                </p>
              </div>
            </CardHeader>
            <div className="flex flex-col col-span-7">
              <CardFooter>
                <div className="flex justify-between gap-1 text-[#F8D57E] text-2xl">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </CardFooter>
              <CardContent className="flex flex-col justify-center items-center gap-6 pb-0">
                <p className="text-base font-mulish text-[#2D2D2D]">
                  &quot;Anima&apos;s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.&quot;
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
