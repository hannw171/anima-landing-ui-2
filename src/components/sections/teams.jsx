import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Teams = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px]">
      <div className="flex flex-col items-center justify-center space-y-14">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-4xl text-slate-900 font-bold leading-tight">
            Meet our team
          </h2>
          <p className="text-base text-slate-900 font-mulish">
            Get to know the faces behind the scenes and learn about the values
            that drive us.
          </p>
        </div>
        <div className="w-full grid grid-cols-12 gap-8">
          <Card className="col-span-4 px-8 py-10 flex flex-col items-start rounded-2xl gap-5 shadow-2xl shadow-slate-300 overflow-hidden">
            <CardHeader className="p-0 w-full items-center gap-y-4">
              <Avatar className="w-28 h-auto">
                <AvatarImage src="https://ui-avatars.com/api/?name=Sarah+K." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <p className="font-semibold text-lg text-[#111827]">Sarah K.</p>
                <p className="text-base font-mulish text-[#2D2D2D]">
                  UX Designer
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base font-mulish text-center">With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.</p>
            </CardContent>
            <CardFooter className="w-full flex justify-center gap-4 py-0">
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">Twitter</Button>
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">Dribbble</Button>
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">LinkedIn</Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 px-8 py-10 flex flex-col items-start rounded-2xl gap-5 shadow-2xl shadow-slate-300 overflow-hidden">
            <CardHeader className="p-0 w-full items-center gap-y-4">
              <Avatar className="w-28 h-auto">
                <AvatarImage src="https://ui-avatars.com/api/?name=Sarah+K." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <p className="font-semibold text-lg text-[#111827]">Sarah K.</p>
                <p className="text-base font-mulish text-[#2D2D2D]">
                  UX Designer
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base font-mulish text-center">With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.</p>
            </CardContent>
            <CardFooter className="w-full flex justify-center gap-4 py-0">
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">Twitter</Button>
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">Dribbble</Button>
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">LinkedIn</Button>
            </CardFooter>
          </Card>
          <Card className="col-span-4 px-8 py-10 flex flex-col items-start rounded-2xl gap-5 shadow-2xl shadow-slate-300 overflow-hidden">
            <CardHeader className="p-0 w-full items-center gap-y-4">
              <Avatar className="w-28 h-auto">
                <AvatarImage src="https://ui-avatars.com/api/?name=Sarah+K." />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-y-1 items-center justify-center">
                <p className="font-semibold text-lg text-[#111827]">Sarah K.</p>
                <p className="text-base font-mulish text-[#2D2D2D]">
                  UX Designer
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base font-mulish text-center">With a passion for color and a love for clean lines, Sarah brings all our wildest design dreams to life.</p>
            </CardContent>
            <CardFooter className="w-full flex justify-center gap-4 py-0">
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">Twitter</Button>
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">Dribbble</Button>
              <Button className="text-[#009379] bg-transparent font-bold text-sm" variant="link">LinkedIn</Button>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  );
};
