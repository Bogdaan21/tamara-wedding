import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import MobileMenu2 from "../MobileMenu2";
import { removeFromCart } from "../../store/slices/cartSlice";
import { Link } from "react-router-dom";
import HeaderTopbar from "../HeaderTopbar";
import logo from "../../images/logo-tamara.png";

/* ---------------------------------
   Wrapper component (Redux Toolkit)
----------------------------------- */
const Header2Wrapper = (props) => {
  const dispatch = useDispatch();

  // ✅ NEW cartSlice path
  const carts = useSelector((state) => state.cart.cart);

  return <Header2 {...props} carts={carts} removeFromCart={(id) => dispatch(removeFromCart(id))} />;
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

                <div className="col-lg-12 col-md-1 col-1">
                  <div id="navbar" className="collapse navbar-collapse navigation-holder">
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul
                      className="nav navbar-nav mb-2 mb-lg-0"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        gap: "60px"
                      }}
                    >
                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/home4">
                          Home
                        </Link>
                      </li>

                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/about">
                          About
                        </Link>
                      </li>

                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/service">
                          Service
                        </Link>
                      </li>

                      <div className="col-lg-3 col-md-6 col-6">
                        <div
                          className="navbar-header"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Link onClick={ClickHandler} className="navbar-brand logo" to="/home">
                            <img src={logo} alt="Logo" />
                          </Link>
                        </div>
                      </div>

                      <li className="menu-item-has-children">
                        <Link to="/portfolio-grid">Portfolio</Link>
                      </li>

                      <li className="menu-item-has-children">
                        <Link onClick={ClickHandler} to="/blog">
                          Blog
                        </Link>
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
