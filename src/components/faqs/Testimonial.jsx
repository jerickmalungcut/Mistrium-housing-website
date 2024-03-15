import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-textPrimary">
        Let&apos;s see what our customer&apos;s say
      </h2>
      <div>
        <div className="flex items-center gap-4">
          <h4 className="text-base text-textSecondary">Emily Johnson</h4>
          {/* Stars */}
          <div className="star flex gap-1">
            <FaStar color="#C4A586" />
            <FaStar color="#C4A586" />
            <FaStar color="#C4A586" />
            <FaStar color="#C4A586" />
            <FaStar color="#C4A586" />
          </div>
        </div>

        <p className="text-xs text-textSecondary"></p>
      </div>
    </div>
  );
};

export default Testimonial;
