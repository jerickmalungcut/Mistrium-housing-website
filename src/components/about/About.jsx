import { trustedClients } from "../../utils/data";
import ResidentialFurniture from "../../assets/residential-furniture.jpg";
import HospitalityFurniture from "../../assets/hospitality-furniture.png";

const About = () => {
  return (
    <section id="about" className="md:mb-8">
      <div className="container">
        {/* Text */}
        <h4 className="text-center uppercase font-bold text-2xl md:text-3xl text-textPrimary mb-12">
          Some of our trusted clients
        </h4>

        {/* Images of Clients */}
        <div className="flex flex-wrap gap-20 items-center justify-center mb-12">
          {trustedClients.map((item) => (
            <img key={item.name} src={item.img} alt={item.name} />
          ))}
        </div>
      </div>

      {/* Furniture Images */}
      <div className="block md:flex">
        {/* Image 1 */}
        <div className="flex-1 bg-tertiary flex items-center justify-end p-10">
          {/* Text */}
          <div className="flex flex-col gap-10">
            <h3 className="text-4xl font-bold text-textPrimary">
              Residential <br /> Furniture
            </h3>
            <span className="font-bold text-textSecondary cursor-pointer">
              Browse Collection
            </span>
          </div>

          {/* Image */}
          <div>
            <img src={ResidentialFurniture} alt="" />
          </div>
        </div>

        {/* Image 2 */}
        <div className="flex-1 bg-secondary flex items-center justify-start p-10 gap-10">
          {/* Text */}
          <div className="flex flex-col gap-10 pl-12">
            <h3 className="text-4xl font-bold text-textPrimary">
              Hospitality <br /> Furniture
            </h3>
            <span className="font-bold text-textSecondary cursor-pointer">
              Browse Collection
            </span>
          </div>

          {/* Image */}
          <div>
            <img src={HospitalityFurniture} alt="Image 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
