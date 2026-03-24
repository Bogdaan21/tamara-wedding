import React, { Fragment, useEffect } from "react";

const LocationMap = ({ open, handleClose, maxWidth = "lg" }) => {
  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

  // body scroll lock
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <Fragment>
      {/* backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={handleClose}
        style={{ zIndex: 1040 }}
      ></div>

      <div
        className="modal fade show modalWrapper quickview-dialog"
        style={{ display: "block", zIndex: 1050 }}
        tabIndex="-1"
        role="dialog"
      >
        <div className={`modal-dialog modal-${maxWidth}`} role="document">
          <div className="modal-content">
            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title">Location Map</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>

            {/* BODY */}
            <div className="modalBody modal-body">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"
                style={{ width: "100%", height: "450px", border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LocationMap;
