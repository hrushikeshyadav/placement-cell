import React from "react";
import person from "../assets/images/personRound.jpeg";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                Chhotubhai Gopalbhai Patel Institute of Technology
                <br />
                <br />
                Maliba Campus, Gopal Vidyanagar,
                <br />
                Bardoli Mahuva Road, TARSADI
                <br />
                Dist: Surat - 394350, Gujarat (INDIA)
              </p>
              <p>
                <a href="mailto:placement@utu.ac.in">placement@utu.ac.in</a>
              </p>
            </div>
            <div className="footer-col-parent">
              <img src={person} alt={"nita"} className="footer-img" />
              <div className="footer-col">
                <p className="footer-contact-name">Prof. Nita Patil</p>
                <p className="footer-contact-position">
                  Co-chairman & Placement Co-ordinator
                </p>
                <p>
                  <a href="tel:+91-99135 49678">+91-99135 49678</a>
                </p>
                <p>
                  <a href="mailto:nita.patil@utu.ac.in">nita.patil@utu.ac.in</a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <img src={person} alt={"krupa"} className="footer-img" />
              <div className="footer-col">
                <p className="footer-contact-name">Prof. Krupa Patel </p>
                <p className="footer-contact-position">
                  Co-chairman & corporate relation ambassador
                </p>
                <p>
                  <a href="tel:+91-97257 98030">+91-97257 98030</a>
                </p>
                <p>
                  <a href="mailto:krupa.patel@utu.ac.in">
                    krupa.patel@utu.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2017. <strong>CGPIT.</strong> (Designed by Parth
          Shah, Ex-Member and CGPIT website committee)
        </p>
      </div>
    </footer>
  );
};

export default footer;
