import React, { Component } from "react";
import inquireImg from "../../images/contact/contact.jpg";

class ContactForm extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    services: [],
    guestCount: "",
    budget: "",
    hearAbout: "",
    details: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = { ...this.state.error };
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  checkboxHandler = (e) => {
    const { value, checked } = e.target;
    let updatedServices = [...this.state.services];

    if (checked) {
      updatedServices.push(value);
    } else {
      updatedServices = updatedServices.filter((item) => item !== value);
    }

    const error = { ...this.state.error };
    error.services = "";

    this.setState({
      services: updatedServices,
      error,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { fullName, email, service, details } = this.state;

    let error = {};

    if (!fullName.trim()) error.fullName = "Required";
    if (!email.trim()) error.email = "Required";
    if (!service) error.service = "Required";
    if (!details.trim()) error.details = "Required";

    this.setState({ error });

    if (Object.keys(error).length === 0) {
      alert(
        "Thank you for reaching out. We have received your message and will get back to you within 48 hours to schedule our first consultation.",
      );

      this.setState({
        fullName: "",
        email: "",
        phone: "",
        weddingDate: "",
        location: "",
        guestCount: "",
        budget: "",
        service: "",
        hearAbout: "",
        details: "",
        error: {},
      });
    }
  };

  render() {
    return (
      <section className="inquire-section">
        <div className="container">
          <div className="inquire-wrap">
            <div className="inquire-left">
              <div className="inquire-header">
                <h2>INQUIRE</h2>
                <div className="inquire-line"></div>
              </div>

              <form onSubmit={this.submitHandler} className="inquire-form">
                <p style={{ marginBottom: "20px" }}>
                  Let’s start planning your story. We take on a limited number of weddings each year to ensure every
                  couple receives our full devotion and world-class service.
                </p>

                {/* NAME */}
                <div className="form-group">
                  <label>First & Last Names *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={this.state.fullName}
                    onChange={this.changeHandler}
                  />
                  <p className="error-text">{this.state.error.fullName}</p>
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                  <p className="error-text">{this.state.error.email}</p>
                </div>

                {/* PHONE */}
                <div className="form-group">
                  <label>Phone Number / WhatsApp</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={this.state.phone}
                    onChange={this.changeHandler}
                  />
                </div>

                {/* DATE */}
                <div className="form-group">
                  <label>Wedding Date or Preferred Season</label>
                  <input
                    type="date"
                    name="weddingDate"
                    placeholder="e.g. June 2026 or Summer 2026"
                    style={{ paddingRight: "25px" }}
                    value={this.state.weddingDate}
                    onChange={this.changeHandler}
                    className={`date-input ${!this.state.weddingDate ? "empty" : ""}`}
                  />
                </div>

                {/* LOCATION */}
                <div className="form-group">
                  <label>Wedding Location in Montenegro</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Kotor, Budva or TBD"
                    value={this.state.location}
                    onChange={this.changeHandler}
                  />
                </div>

                {/* GUEST COUNT */}
                <div className="form-group">
                  <label>Estimated Guest Count</label>
                  <select name="guestCount" onChange={this.changeHandler}>
                    <option value="">Select</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100+</option>
                  </select>
                </div>

                {/* BUDGET */}
                <div className="form-group">
                  <label>Budget Range</label>
                  <select name="budget" onChange={this.changeHandler}>
                    <option value="">Select</option>
                    <option>€30k - €50k</option>
                    <option>€50k - €100k</option>
                    <option>€100k+</option>
                  </select>
                </div>

                {/* SERVICE */}
                <div className="form-group">
                  <label>Service of Interest *</label>
                  <select name="service" onChange={this.changeHandler}>
                    <option value="">Select</option>
                    <option>Full Planning</option>
                    <option>Partial Planning</option>
                    <option>Elopement</option>
                    <option>Coordination</option>
                  </select>
                  <p className="error-text">{this.state.error.service}</p>
                </div>

                {/* DETAILS */}
                <div className="form-group">
                  <label>Tell us about your vision *</label>
                  <textarea name="details" rows="5" value={this.state.details} onChange={this.changeHandler} />
                  <p className="error-text">{this.state.error.details}</p>
                </div>

                {/* HEAR ABOUT */}
                <div className="form-group">
                  <label>How did you hear about us?</label>
                  <select name="hearAbout" onChange={this.changeHandler}>
                    <option value="">Select</option>
                    <option>Instagram</option>
                    <option>Google</option>
                    <option>Referral</option>
                  </select>
                </div>

                {/* BUTTON */}
                <div className="inquire-submit">
                  <button type="submit">SEND INQUIRY</button>
                </div>
              </form>
            </div>

            <div className="inquire-right">
              <div className="inquire-image">
                <img src={inquireImg} alt="Wedding planning" />
              </div>

              <div className="inquire-side-text">
                <h4>At Metheny and Company,</h4>
                <p>
                  Let’s start planning your story. We take on a limited number of weddings each year to ensure every
                  couple receives our full devotion and world-class service.
                </p>

                <div className="inquire-contact-row">
                  <span>BRITT@METHENYANDCO.COM</span>
                  <i className="fi flaticon-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
