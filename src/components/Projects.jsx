import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  const getImagePosition = (title) => {
    switch (title) {
      case "Book Store Website":
        return "object-contain";
      case "Dream Nest":
        return "object-contain";
      default:
        return "object-contain";
    }
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <div className="lg:w-[45%] w-full max-w-[400px] mx-auto">
            <img
              src={Projects.image}
              alt="Profile"
              data-aos="fade-right"
              className="w-full h-[600px] object-cover object-top hover:scale-105 transition-transform duration-300"
              style={{ imageRendering: 'crisp-edges' }}
            />
          </div>
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 lg:w-[55%] w-full drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <div className="relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-gray-50">
                  <div className="h-[400px] flex items-center justify-center">
                    <img
                      src={content.image}
                      alt={content.title}
                      className={`w-full max-h-[400px] ${getImagePosition(content.title)}`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <h5 className="font-bold font-Poppins text-xl">{content.title}</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">{content.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
