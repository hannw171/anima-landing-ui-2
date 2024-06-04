import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";


export const CTA = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    reValidateMode: "onSubmit", //onChange itu akan munculin validasinya onChange, bisa diganti ke onSubmit tpi buttonnya jgn di disabled dulu.
  });
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <section className="flex flex-col justify-center items-center w-full max-w-screen-xl gap-10 bg-[#E5F4F2] h-fit overflow-hidden rounded-2xl mb-30 px-[120px] py-16 mb-[120px]">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-4xl text-slate-900 font-bold leading-tight">
          Subscribe now
        </h2>
        <p className="text-base text-slate-900 font-mulish">
          Never miss a beat on new landing page designs and features.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <div className="flex items-center justify-center border-none">
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="w-full h-15 focus-visible:ring-offset-0 py-4 pl-5 pr-8 focus-visible:ring-0 border-0 text-base font-mulish rounded-l-[20px] rounded-r-none"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <Button type="submit" className="ml-[-16px] w-fit gap-2 px-12 py-4 rounded-[20px] h-15 bg-[#009379] hover:bg-[#006956] font-semibold text-base">
                  <IoMdMail />
                  Subscribe
                </Button>
              </div>
            )}
          />
        </form>
      </Form>
    </section>
  );
};
