import React from "react";
import { NavLink, Link } from "react-router-dom";
class SideDrawer extends React.Component {
  state = {
    showDropDownAcademics: false,
    showDropdownStatistics: false,
  };
  handleDropDownAcademics = () => {
    this.setState((cs) => ({
      showDropDownAcademics: !cs.showDropDownAcademics,
      showDropdownStatistics: false,
    }));
  };
  handleDropdownStatistics = () => {
    this.setState((cs) => ({
      showDropdownStatistics: !cs.showDropdownStatistics,
      showDropDownAcademics: false,
    }));
  };
  render() {
    let drawerClass = "side-drawer";
    if (this.props.show) drawerClass = "side-drawer open";
    return (
      <div className={drawerClass}>
        <div className="side">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <span onClick={this.props.click} className="sidebar-logo-text">
              CGPIT Placement Cell
            </span>
          </Link>
          <span className="cross-btn" onClick={this.props.click}>
            <i className="fas fa-times fa-2x" />
          </span>
        </div>
        <ul>
          <li onClick={this.props.click}>
            <NavLink to="/about-us" exact className="activeclass">
              About Us
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/schedule" exact className="activeclass">
              Schedule
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/industry/login" exact className="activeclass">
              Industry Registration
            </NavLink>
          </li>
          <li onClick={this.props.click}>
            <NavLink to="/login" exact className="activeclass">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDrawer;
