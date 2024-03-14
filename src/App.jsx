import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Faqs from "./components/faqs/Faqs";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <div>
        <Navigation />
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
