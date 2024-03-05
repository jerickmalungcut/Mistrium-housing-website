import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Faqs from "./components/faqs/Faqs";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <div>
        <Header />
        <About />
        <Products />
        <Faqs />
        <Contact />
      </div>
    </>
  );
}

export default App;
