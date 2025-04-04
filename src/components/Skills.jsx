// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};
Modal.setAppElement("#root");

const skillDetails = {
  "Languages": [
    "Proficient in C++ with strong problem-solving skills demonstrated through competitive programming",
    "Advanced Java programming with experience in building robust applications",
    "Expert in SQL for database management and complex queries",
    "Strong command of JavaScript for both frontend and backend development",
    "Solid foundation in HTML/CSS for creating responsive web interfaces"
  ],
  "Frameworks": [
    "React.js for building dynamic and interactive user interfaces",
    "Node.js for scalable backend development and API creation",
    "Express.js for creating RESTful APIs and web applications",
    "Bootstrap and Tailwind CSS for responsive and modern designs",
    "Experience with Next.js for server-side rendering and static generation"
  ],
  "Databases": [
    "MongoDB for designing and managing NoSQL databases",
    "Proficient in SQL database design and optimization",
    "Experience with MongoDB Atlas for cloud database management",
    "Database indexing and query optimization",
    "Data modeling and schema design"
  ],
  "Developer Tools": [
    "Git for version control and collaborative development",
    "VS Code with advanced debugging and extension usage",
    "Figma for UI/UX design and prototyping",
    "Postman for API testing and documentation",
    "Docker for containerization and deployment"
  ],
  "Problem Solving": [
    "Ranked in top 6.9% globally on LeetCode",
    "Strong analytical and algorithmic thinking",
    "Experience in optimizing code for better performance",
    "Regular participation in coding competitions",
    "Expertise in data structures and algorithms"
  ]
};

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2 border-b-2 pb-2 mb-4">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6 className="text-xl font-bold">{selectSkill?.name}</h6>
        </div>
        <ul className="list-disc px-4 font-Poppins text-sm !leading-7 text-gray-600">
          {selectSkill && skillDetails[selectSkill.name]?.map((detail, index) => (
            <li key={index} className="mb-2">{detail}</li>
          ))}
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn bg-dark_primary text-white hover:bg-dark_primary/90">
            Close
          </button>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer 
               relative group w-full flex items-center
                gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 hover:border-dark_primary/50 transition-colors"
            >
              <div>
                <img
                  src={skill.logo}
                  alt="..."
                  className="w-10 group-hover:scale-125 duration-200"
                />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div
                  onClick={() => {
                    setSelectSkill(skill);
                    openModal();
                  }}
                  className="text-xl absolute top-3 right-3"
                >
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
