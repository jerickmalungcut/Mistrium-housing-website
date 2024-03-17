import { useState } from "react";
import Person1 from "../../assets/person1.webp";
import { personImg } from "../../utils/data";
import PersonCard from "./PersonCard";
import Testimonial from "./Testimonial";

const Faqs = () => {
  const [bigPerson, setBigPerson] = useState(Person1);

  return (
    <section id="faqs">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-12 w-full min-h-screen">
        {/* Image */}
        <div className="images-container flex-1 relative">
          {/* Big Image */}
          <div className="max-h-[500px] h-[600px] w-full overflow-hidden">
            <img
              src={bigPerson}
              className="object-cover relative w-full h-full"
            />
          </div>

          <div className="flex gap-4 absolute -bottom-[5%]">
            {personImg.map((item) => (
              <div key={item.name}>
                <PersonCard
                  imageURL={item}
                  changePerson={(item) => setBigPerson(item)}
                  bigPerson={bigPerson}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-textPrimary">
            Let&apos;s See Our Customer&apos;s Says
          </h2>
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Faqs;
