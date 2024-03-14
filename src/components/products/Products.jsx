import { MdOutlineArrowRightAlt } from "react-icons/md";
import { productsDetails } from "../../utils/data";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="products">
      <div className="container flex flex-col gap-12">
        {/* Text Container */}
        <div className="text-container flex justify-between items-center">
          <h2 className="text-4xl text-textSecondary uppercase font-bold">
            Products
          </h2>
          <h4 className="font-bold text-textTertiary text-2xl">Best Selling</h4>
          <h4 className="font-bold text-textTertiary text-2xl">Most Popular</h4>
          <a href="" className="text-textSecondary flex items-center gap-6">
            See All <MdOutlineArrowRightAlt size={35} />
          </a>
        </div>

        {/* Options Tab */}
        <ul className="options flex justify-center items-center gap-8 text-textTertiary font-bold">
          <li className="text-textSecondary">All</li>
          <li>Bed</li>
          <li>Sofa</li>
          <li>Chair</li>
          <li>Light</li>
        </ul>

        <div className="product-card flex flex-wrap justify-center items-center gap-20">
          {productsDetails.map((item) => (
            <div key={item.title} className="">
              <ProductCard
                title={item.title}
                price={item.price}
                regPrice={item.regPrice}
                img={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
