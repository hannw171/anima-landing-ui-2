import clientLogo1 from "../../assets/client-logo-mark-1.png";
import clientLogo2 from "../../assets/client-logo-mark-2.png";
import clientLogo3 from "../../assets/client-logo-mark-3.png";
import clientLogo4 from "../../assets/client-logo-mark-4.png";
import clientLogo5 from "../../assets/client-logo-mark-5.png";
import clientLogo6 from "../../assets/client-logo-mark-6.png";

export const Partners = () => {
  return (
    <section className="w-full max-w-screen-xl py-16">
      <div className="flex items-center justify-between py-10 border-t-[1px] border-b-[1px] border-[#D8D8D8]">
        <img className="w-16" src={clientLogo1} />
        <img className="w-16" src={clientLogo2} />
        <img className="w-16" src={clientLogo3} />
        <img className="w-16" src={clientLogo4} />
        <img className="w-16" src={clientLogo5} />
        <img className="w-16" src={clientLogo6} />
      </div>
    </section>
  );
};
