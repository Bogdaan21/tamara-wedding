import React, {Fragment} from 'react';
import { useDispatch } from "react-redux";
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Scrollbar from '../../components/scrollbar'
import { addToCart } from "../../store/slices/cartSlice";
import api from "../../api";
import Footer from '../../components/footer';
import ProductSidebar from './sidebar';
import ShopProduct from '../../components/ShopProduct';



const ShopPage =( ) => {

  const dispatch = useDispatch();

  const products = api();

  const addToCartProduct = (product, qty = 1) => {
    dispatch(addToCart({ ...product, qty }));
  };

    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
              <section className="wpo-shop-page section-padding">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-9 order-lg-2">
                              <ShopProduct
                                      addToCartProduct={addToCartProduct}
                                      products={products}
                                  />
                          </div>
                          <ProductSidebar addToCartProduct={addToCartProduct}
                                      products={products}/>
                      </div>
                  </div>
              </section>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ShopPage;