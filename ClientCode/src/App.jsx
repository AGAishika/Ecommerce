import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Home from "./components/Home";
import Footer from "./components/Layout/Footer";
import "animate.css";
import Shop from "./components/Shop";
import ProductDetail from "./components/Product/ProductDetail";
import ShopDetail from "./components/ShopDetail";
import Checkout from "./components/Checkout";
import Scart from "./components/Cart/Scart";
import Login from "./components/Users/Login";
import Registration from "./components/Users/Registration";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "./Redux/Action/UserAction";
import Profile from "./components/Users/Profile";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import Payment from "./components/Payment/Payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


function App() {
  const dispatch = useDispatch();

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    console.log("data");
    const { data } = await axios.get("/api/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  console.log(stripeApiKey);
  useEffect(() => {
    dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopDetail" element={<ShopDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/check" element={<Checkout />} />
        <Route path="/cart" element={<Scart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        {/* <Route path="/payment" element={<Payment />} /> */}
        {/* {stripeApiKey && ( */}
          <Route
            path="/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        {/* )} */}
      </Routes>
      <Footer />
    </>
  );
}
//Registration page requirements 1.name , 2. email 3. password , 4. confirm pass and 5. image

export default App;
