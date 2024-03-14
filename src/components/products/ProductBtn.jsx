import { RiShoppingBasket2Line } from "react-icons/ri";

const ProductBtn = () => {
  return (
    <button className="bg-primary text-white rounded-full py-2 px-4 absolute -top-2 flex justify-center items-center gap-4">
      Add To Cart
      <div className="bg-secondary rounded-full p-1">
        <RiShoppingBasket2Line color="gray" />
      </div>
    </button>
  );
};

export default ProductBtn;
