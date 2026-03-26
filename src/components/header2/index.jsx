import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import MobileMenu2 from "../MobileMenu2";
import { removeFromCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import HeaderTopbar from "../HeaderTopbar";
import logo from '../../images/logo-tamara.png'

/* ---------------------------------
   Wrapper component (Redux Toolkit)
----------------------------------- */
const Header2Wrapper = (props) => {
  const dispatch = useDispatch();

  // ✅ NEW cartSlice path
  const carts = useSelector((state) => state.cart.cart);

  return (
    <Header2
      {...props}
      carts={carts}
      removeFromCart={(id) => dispatch(removeFromCart(id))}
    />
  );
};

class Header2 extends Component {
  state = {
    isSearchShow: false,
    isCartShow: false,
  };

  searchHandler = () => {
    this.setState({
      isSearchShow: !this.state.isSearchShow,
    });
  };

  cartHandler = () => {
    this.setState({
      isCartShow: !this.state.isCartShow,
    });
  };

  render() {
    const SubmitHandler = (e) => {
      e.preventDefault();
    };

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <header id="header" className={this.props.topbarBlock}>
        <div className={`wpo-site-header ${this.props.hclass}`} id="home">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <MobileMenu2 />
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <Link
                      onClick={ClickHandler}
                      className="navbar-brand logo"
                      to="/home"
                    >
                      <img src={logo} alt="Logo" />

                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/">
                          Home
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/home">
                              Main Home
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/home2">
                              Announcement S1
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/home3">
                              Announcement S2
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/home4">
                              Wedding Planner
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/home5">
                              Shop Home
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/home6">
                              Invitation
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <Link to="/">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/about">
                              About
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/story">
                              Our story
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/accomodation">
                              Accomodation
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/rsvp">
                              RSVP
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/gallery">
                              Gallery
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/planner">
                              Planners
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/team-single/1">
                              Planner Single
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/groom-bride">
                              Bridesmaid & Groomsman
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/service">
                              Serevice
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/service-single/1">
                              Serevice Single
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/pricing">
                              Pricing
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/coming">
                              Coming Soon
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/404">
                              404 Error
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/register">
                              Register
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <Link to="/portfolio-grid">Portfolio</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/portfolio-grid">Portfolio Grid</Link>
                          </li>
                          <li>
                            <Link to="/portfolio-masonary">
                              Portfolio Masonary
                            </Link>
                          </li>
                          <li>
                            <Link to="/project-single/1">Portfolio Single</Link>
                          </li>
                        </ul>
                      </li>

                      

                      <li className="menu-item-has-children">
                        <Link to="/shop">Shop</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/shop">
                              Shop
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/product-single/1">
                              Shop Single
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/cart">
                              Cart
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/checkout">
                              Checkout
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/blog">
                          Blog
                        </Link>
                        <ul className="sub-menu">
                          <li>
                            <Link onClick={ClickHandler} to="/blog">
                              Blog right sidebar
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/blog-left-sidebar">
                              Blog left sidebar
                            </Link>
                          </li>
                          <li>
                            <Link onClick={ClickHandler} to="/blog-fullwidth">
                              Blog fullwidth
                            </Link>
                          </li>
                          <li className="menu-item-has-children">
                            <Link onClick={ClickHandler} to="/">
                              Blog details
                            </Link>
                            <ul className="sub-menu">
                              <li>
                                <Link onClick={ClickHandler} to="/blog-single/1">
                                  Blog details right sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={ClickHandler}
                                  to="/blog-single-left-sidebar/1"
                                >
                                  Blog details left sidebar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  onClick={ClickHandler}
                                  to="/blog-single-fullwidth/1"
                                >
                                  Blog details fullwidth
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link onClick={ClickHandler} to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header2Wrapper;
