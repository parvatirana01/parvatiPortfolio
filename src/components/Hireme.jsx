import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse gap-8">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-[300px] h-[400px] object-cover rounded-xl md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-[300px] h-[400px] object-cover rounded-xl md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-8 shadow-lg rounded-xl rounded-br-[8rem] sm:min-w-[22rem] bg-white"
          >
            <p className="leading-7 text-gray-600">{Hireme.para}</p>
            <br />
            <button
              className="btn bg-dark_primary text-white hover:bg-dark_primary/90 transition-colors"
              onClick={scrollToContact}
            >
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
