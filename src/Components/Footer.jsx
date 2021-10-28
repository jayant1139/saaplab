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
              <img src="./images/iitrlogopng.png" alt={""} />
              <img src="./images/inspire.png" alt={""} />
              <img src="./images/nserb.png" alt={""} />
              <img src="./images/stars.png" alt={""} />
              <img src="./images/Dst.png" alt={""} />
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
