import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1, 
    title: "Home",
    link: "/home",
  },

  {
    id: 2,
    title: "About",
    link: "/about",
  },

  {
    id: 3,
    title: "Service",
    link: "/service",
  },

  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio-grid",
  },

  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },

  { id: 88, title: "Contact", link: "/contact" },
];

export default class MobileMenu2 extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          <div className="menu-close">
            <div className="clox" onClick={this.menuHandler}>
              <i className="ti-close"></i>
            </div>
          </div>

          <ul className="responsivemenu">
            {menus.map((item) => {
              const isActive = item.id === isOpen;

              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={this.setIsOpen(item.id)}>
                      {item.title}
                      {item.submenu ? (
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  ) : (
                    <Link onClick={ClickHandler} to={item.link}>
                      {item.title}
                    </Link>
                  )}

                  {/* ✅ Reactstrap Collapse/Card removed */}
                  {item.submenu ? (
                    <div
                      className={`submenu-wrapper ${isActive ? "show" : ""}`}
                      style={{ display: isActive ? "block" : "none" }}
                    >
                      <div className="submenu-card">
                        <div className="submenu-card-body">
                          <ul>
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="showmenu" onClick={this.menuHandler}>
          <button type="button" className="navbar-toggler open-btn">
            <span className="icon-bar first-angle"></span>
            <span className="icon-bar middle-angle"></span>
            <span className="icon-bar last-angle"></span>
          </button>
        </div>
      </div>
    );
  }
}
