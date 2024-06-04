
export const Banner = () => {
  return (
    <section className="w-full max-w-screen-xl py-[120px] bg-[#F8D57E] px-14 text-center flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 mb-14">
        <p className="text-5xl font-bold">Add your Typeform headline here</p>
        <p className="text-xl font-mulish">Follow the instructions to embed your Typeform in the screen below.</p>
      </div>
      <iframe src="https://www.typeform.com/" className="w-[70%] h-[546px]"></iframe>
    </section>
  );
};
