import React, {Fragment} from 'react';
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import Navbar2 from '../../components/Navbar2'
import Hero4 from '../../components/hero4'
import ServiceSection from '../../components/ServiceSection2';
import Scrollbar from '../../components/scrollbar'
import api from "../../api";
import Footer from '../../components/footer';
import Product from '../../components/Product';



const HomePage5 = ({ addToCart}) => {
    const dispatch = useDispatch();

  const products = api();

  const addToCartProduct = (product, qty = 1) => {
    dispatch(addToCart({ ...product, qty }));
  };

    return(
        <Fragment>
            <Navbar2/>
            <Hero4/>
            <ServiceSection/>
            <Product
                addToCartProduct={addToCartProduct}
                products={products}
            />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default HomePage5;