import React from "react";
import director from "../assets/images/director.jpeg";
import { NavLink } from "react-router-dom";

const Ex = () => (
  <div className="example">
    <div className="blog-card">
      <div className="meta">
        <div
          className="photo"
          style={{ backgroundImage: `url(${director})` }}
        />
        <ul className="details">
          <li className="author">Prof. B. M. Vadher</li>
          <li className="date">Director</li>
          <li className="tags">
            <ul>
              <li> CGPIT, UTU</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>A vision to follow</h1>
        <h2>Evolving a brand-name takes years of nurturing</h2>
        <p>
          Equipping the students with relevant and conceptualized professional
          skills and guiding them towards a bright future and career all around
          the world with the values of - 'Sincerity', 'Smart Work' and 'Ethics'.
        </p>
        <p className="read-more">
          <NavLink to="/message/director" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
    <div className="blog-card alt">
      <div className="meta">
        <ul className="details">
          <li className="author">Prof. (Dr.) Pranav Shah</li>
          <li className="date">Training and Placement Officer</li>
          <li className="tags">
            <ul>
              <li>CGPIT, </li>
              <li>UTU</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Exploring the skies</h1>
        <h2>The Training and Placement cell </h2>
        <p>
          Uka Tarsadia University is an exciting place to study and grow. It is
          a place where thinkers become leaders, a place where the thirst for
          knowledge fuels our desire for distinction.
        </p>
        <p className="read-more">
          <NavLink to="/message/tpo" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);

export default Ex;
