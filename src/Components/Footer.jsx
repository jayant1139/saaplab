import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer-part">
        <div className="flex-container-footer">
          <div className="flex-footer-items">
            <h5>Research Funding</h5>
          </div>
          <div className="flex-footer-items">
            <div className="funders-container">
              <img src={require("../images/iitrlogopng.png").default} alt={""} />
              <img src={require("../images/inspire.png").default} alt={""} />
              <img src={require("../images/nserb.png").default} alt={""} />
              <img src={require("../images/stars.png").default} alt={""} />
              <img src={require("../images/Dst.png").default} alt={""} />
            </div>
          </div>
          <div className="flex-footer-items">
            <h6>We thank you for supporting our research !!</h6>
          </div>
        </div>
      </footer>
    </>
  );
}
