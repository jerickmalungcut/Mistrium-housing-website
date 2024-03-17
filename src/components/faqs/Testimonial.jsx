import { FaStar } from "react-icons/fa";
import { testimonialsData } from "../../utils/data";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-6 pt-6">
      {testimonialsData.map((item) => (
        <div key={item.name} className="border-b pb-4">
          <div className="flex items-center gap-4 mb-2">
            <h4 className="text-base text-textSecondary font-bold">
              {item.name}
            </h4>
            {/* Stars */}
            <div className="star flex gap-1">
              <FaStar color="#C4A586" />
              <FaStar color="#C4A586" />
              <FaStar color="#C4A586" />
              <FaStar color="#C4A586" />
              <FaStar color="#C4A586" />
            </div>
          </div>

          <p className="text-xs text-textSecondary leading-4">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
