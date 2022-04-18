import { Route, Routes } from "react-router-dom";
import ErroPage from "./components/ErrorPage/ErroPage";
import Footer from "./components/Footer/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";

function App() {



  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<><Home />
          <Products />
          <Reviews />
        </>} />
        <Route path="/home" element={<><Home />
          <Products />
          <Reviews />
        </>} />
        <Route path="/products" element={<Products />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<ErroPage />} />

      </Routes>
      <Footer />






    </div>
  );
}

export default App;
