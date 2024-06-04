import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaTwitter, FaDribbble, FaInstagram, FaBehance } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const CTAForm = () => {
  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
    },
    resolver: zodResolver(formSchema),
    reValidateMode: "onSubmit", //onChange itu akan munculin validasinya onChange, bisa diganti ke onSubmit tpi buttonnya jgn di disabled dulu.
  });
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="w-full max-w-screen-xl bg-white p-16 grid grid-cols-12 rounded-2xl flex-col gap-16 border border-[#E5F4F2]">
      <div className="w-full col-span-12 flex flex-col justify-center gap-2">
        <p className="font-bold text-5xl">Let’s get in touch!</p>
        <p className="text-base font-mulish">
          Got questions about the Landing Page UI Kit? Our team is here to help.
          Contact us for quick and friendly support.
        </p>
      </div>
      <div className="flex w-full col-span-12 gap-10">
        <div className="w-full flex flex-col col-span-6 justify-between gap-16 ">
          <div className="flex flex-col gap-5 justify-between">
            <div className="flex gap-5 items-center">
              <BiSolidPhoneCall className="text-[#009379]  w-5 h-5" />
              <p className="text-base font-mulish">+012 345 6789</p>
            </div>
            <div className="flex gap-5 items-center">
              <IoMdMail className="text-[#009379] w-5 h-5" />
              <p className="text-base font-mulish">Hello@animaapp.com</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-5 justify-between">
              <p className="text-xl font-semibold">Connect with us</p>

              <div className="flex gap-4 items-center">
                <Button
                  className="bg-[#E5F4F2] rounded-full"
                  variant="ghost"
                  size="icon"
                >
                  <FaTwitter className="w-5 h-5 " />
                </Button>
                <Button
                  className="bg-[#E5F4F2] rounded-full"
                  variant="ghost"
                  size="icon"
                >
                  <FaDribbble className="w-5 h-5 " />
                </Button>
                <Button
                  className="bg-[#E5F4F2] rounded-full"
                  variant="ghost"
                  size="icon"
                >
                  <FaBehance className="w-5 h-5 " />
                </Button>
                <Button
                  className="bg-[#E5F4F2] rounded-full"
                  variant="ghost"
                  size="icon"
                >
                  <FaInstagram className="w-5 h-5 " />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full col-span-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <div className="flex items-center py-3 px-5 border border-[#D8D8D8] rounded-3xl">
                    <GoPerson className="text-[#009379] w-5 h-5" />
                    <Separator
                      orientation="vertical"
                      className="w-[1px] h-5 ml-2  bg-[#DBE3FF] "
                    />
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          className="w-full focus-visible:ring-offset-0 focus-visible:ring-0 border-0 text-base font-mulish"
                          placeholder="Full Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className="flex items-center py-3 px-5 border border-[#D8D8D8] rounded-3xl">
                    <IoMdMail className="text-[#009379] w-5 h-5" />
                    <Separator
                      orientation="vertical"
                      className="w-[1px] h-5 ml-2  bg-[#DBE3FF] "
                    />
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          className="w-full focus-visible:ring-offset-0 focus-visible:ring-0 border-0 text-base font-mulish"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <Button type="submit" className="w-fit gap-2 py-4 px-12 mt-5 rounded-[20px] h-15 bg-[#009379] hover:bg-[#006956] font-semibold text-base">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};
