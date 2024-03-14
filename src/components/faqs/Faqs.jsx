import { useState } from "react";
import Person1 from "../../assets/person1.webp";
import { personImg } from "../../utils/data";
import PersonCard from "./PersonCard";

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

          <div className="flex gap-6 absolute -bottom-[5%] sm:left-[5%] max-sm:px-6">
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facere impedit dolores atque, a sapiente temporibus provident alias
            rerum voluptatum debitis vero voluptatem accusamus repellat,
            exercitationem nihil, quis voluptate enim quaerat ipsum magni modi
            dolorum incidunt id. Culpa tenetur velit voluptate exercitationem id
            maxime nemo est quis iste rem ducimus, cumque maiores repellat
            facere consequuntur ut amet fugiat quaerat vel reprehenderit nobis
            libero! Hic dolorem molestias ab illum deleniti, rem eveniet. Quasi
            iure facere sapiente ad eius architecto alias excepturi iusto ipsum
            quae eos praesentium cum, nam at quibusdam beatae optio ex a ullam?
            Quos inventore a quo quia odit!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
