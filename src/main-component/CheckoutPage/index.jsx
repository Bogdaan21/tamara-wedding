import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Navbar2 from '../../components/Navbar2'
import CheckoutSection from "../../components/CheckoutSection";
import PageTitle from "../../components/pagetitle";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";

const CheckoutPage = () => {
  const cartList = useSelector((state) => state.cart.cart);

  return (
    <Fragment>
      <Navbar2/>
      <PageTitle pageTitle={"Checkout"} pagesub={"Checkout"} />
      <CheckoutSection cartList={cartList} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CheckoutPage;