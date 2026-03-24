import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/event/1.jpg";
import sImg2 from "../../images/event/2.jpg";
import sImg3 from "../../images/event/3.jpg";
import LocationMap from "../Modal";

const Events = [
  {
    Simg: sImg1,
    title: "The Reception",
    li1: "Monday, 25 Sep, 2022 1:00 PM – 4:30 PM",
    li2: "Estern Star Plaza, Road 123, USA",
  },
  {
    Simg: sImg2,
    title: "THE CEREMONY",
    li1: "Monday, 25 Sep, 2022 1:00 PM – 4:30 PM",
    li2: "Estern Star Plaza, Road 123, USA",
  },
  {
    Simg: sImg3,
    title: "Wedding Party",
    li1: "Monday, 25 Sep, 2022 1:00 PM – 4:30 PM",
    li2: "Estern Star Plaza, Road 123, USA",
  },
];

const EventSection = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section
      className={`wpo-event-section section-padding ${props.eClass}`}
      id="events"
    >
      <div className="container">
        <SectionTitle MainTitle={"TIME AND PLACE"} />

        <div className="wpo-event-wrap">
          <div className="row">
            {Events.map((event, eitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                <div className="wpo-event-item">
                  <div className="wpo-event-img">
                    <img src={event.Simg} alt="" />
                  </div>

                  <div className="wpo-event-text">
                    <h2>{event.title}</h2>

                    <ul>
                      <li>{event.li1}</li>
                      <li>{event.li2}</li>

                      {/* ✅ Only button inside li */}
                      <li>
                        <button
                          type="button"
                          className="btn"
                          onClick={handleClickOpen}
                        >
                          See Location
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Modal is outside map (bottom of section) */}
      <LocationMap open={open} handleClose={handleClose} />
    </section>
  );
};

export default EventSection;
