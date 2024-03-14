import PropTypes from "prop-types";
import ProductBtn from "./ProductBtn";

const ProductCard = ({ title, price, regPrice, img }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-secondary max-w-[300px] w-[300px] max-h-[400px] h-[350px] relative">
      <ProductBtn />
      <div className="absolute top-14">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <div className="price-container flex gap-12 items-center font-bold">
          <span className="text-textSecondary text-lg">{price}</span>
          <span className="text-textTertiary text-base">{regPrice}</span>
        </div>
      </div>

      <img
        src={img}
        className="object-contain absolute -bottom-10"
        alt={title}
      />
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  regPrice: PropTypes.string,
  img: PropTypes.string,
};

export default ProductCard;
