import React, { Component } from "react";
import inquireImg from "./../../images/portfolio-single/1.jpg";

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

    const {
      fullName,
      email,
      phone,
      budget,
      details,
      services,
    } = this.state;

    let error = {};

    if (!fullName.trim()) error.fullName = "Please enter your full name";
    if (!email.trim()) error.email = "Please enter your email";
    if (!phone.trim()) error.phone = "Please enter your phone number";
    if (!budget.trim()) error.budget = "Please enter your estimated budget";
    if (!details.trim()) error.details = "Please tell us more about your event";
    if (!services.length) error.services = "Please choose at least one service";

    this.setState({ error });

    if (Object.keys(error).length === 0) {
      console.log("FORM DATA:", this.state);

      this.setState({
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
      });
    }
  };

  render() {
    const {
      fullName,
      email,
      phone,
      eventDate,
      services,
      hearAbout,
      details,
      error,
    } = this.state;

    return (
      <section className="inquire-section">
        <div className="container">
          <div className="inquire-wrap">
            <div className="inquire-left">
              <div className="inquire-header">
                <h2>INQUIRE</h2>
                <div className="inquire-line"></div>

                <p>
                  Most of our clients plan weddings in the $150,000 to $350,000+
                  range. Planning fees vary based on complexity and typically
                  range from 10-13% of your overall wedding budget.
                </p>

                <p>
                  Please complete the form below to tell us more about your
                  wedding or event. We will be in touch shortly to schedule a
                  consultation. Thank you for considering Metheny &amp; Company!
                </p>
              </div>

              <form onSubmit={this.submitHandler} className="inquire-form">
                <div className="form-group">
                  <label>Full name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={this.changeHandler}
                    placeholder="Your name here"
                  />
                  <p className="error-text">{error.fullName || ""}</p>
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.changeHandler}
                    placeholder="E.g myemail@email.com"
                  />
                  <p className="error-text">{error.email || ""}</p>
                </div>

                <div className="form-group">
                  <label>Phone number *</label>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.changeHandler}
                    placeholder="E.g. 541 444 0755"
                  />
                  <p className="error-text">{error.phone || ""}</p>
                </div>

                <div className="form-group">
                  <label>Event date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={eventDate}
                    onChange={this.changeHandler}
                  />
                </div>

                <div className="form-group">
                  <label>What service are you interested in? *</label>

                  <div className="checkbox-list">
                    <label className="checkbox-item">
                      <input
                        type="checkbox"
                        value="Full Service Wedding Planning"
                        checked={services.includes("Full Service Wedding Planning")}
                        onChange={this.checkboxHandler}
                      />
                      <span>Full Service Wedding Planning</span>
                    </label>

                    <label className="checkbox-item">
                      <input
                        type="checkbox"
                        value="Partial Wedding Planning"
                        checked={services.includes("Partial Wedding Planning")}
                        onChange={this.checkboxHandler}
                      />
                      <span>Partial Wedding Planning</span>
                    </label>

                    <label className="checkbox-item">
                      <input
                        type="checkbox"
                        value="Event Coordination"
                        checked={services.includes("Event Coordination")}
                        onChange={this.checkboxHandler}
                      />
                      <span>Event Coordination</span>
                    </label>

                    <label className="checkbox-item">
                      <input
                        type="checkbox"
                        value="Other Event Planning"
                        checked={services.includes("Other Event Planning")}
                        onChange={this.checkboxHandler}
                      />
                      <span>Other Event Planning (Shower, Birthday, Corporate, etc.)</span>
                    </label>
                  </div>

                  <p className="error-text">{error.services || ""}</p>
                </div>

                <div className="form-group">
                  <label>How did you hear about us?</label>
                  <select
                    name="hearAbout"
                    value={hearAbout}
                    onChange={this.changeHandler}
                  >
                    <option value="">Select an option</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Google">Google</option>
                    <option value="Friend referral">Friend referral</option>
                    <option value="Venue">Venue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Tell me more about your event</label>
                  <textarea
                    name="details"
                    value={details}
                    onChange={this.changeHandler}
                    placeholder="What do I need to know about the project?"
                    rows="5"
                  />
                  <p className="error-text">{error.details || ""}</p>
                </div>

                <div className="inquire-submit">
                  <button type="submit">SEND</button>
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
                  We deliver a refined and inviting planning experience. With
                  our thoughtful guidance and expert approach, we’ll help you
                  plan the wedding of your dreams.
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