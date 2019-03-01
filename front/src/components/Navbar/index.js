/* eslint-disable no-return-assign */
/* eslint-disable import/no-duplicates */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './index.scss';
import '../../assets/styles/typo.scss';
import logoNav from '../../assets/images/logo-nav.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolling: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.handleScroll();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.props.location.pathname === '/') {
      if (window.scrollY === 0 && this.state.scrolling === true) {
        this.setState({ scrolling: false });
      } else if (this.nav.getBoundingClientRect().top <= 0 && this.state.scrolling !== true) {
        this.setState({ scrolling: true });
      }
    } else {
      this.setState({
        scrolling: true,
      });
    }
  }

  render() {
    return (
      <div id="myTopnav" className="navbar-container topnav">
        <nav className={`navbar ${this.state.scrolling ? 'navbar--fixed logo-nav-visi' : ''}`} ref={el => this.nav = el}>
          <ul className="navbar__list">
            <li className="navbar__list__item"><NavLink exact to="/">Home</NavLink></li>
            <li className="navbar__list__item"><NavLink exact to="/presentation">Presentation</NavLink></li>
            <li className="navbar__list__item"><NavLink exact to="/members">Members</NavLink></li>
            <li className="navbar__list__item"><NavLink exact to="/partners">Partners</NavLink></li>
            <div className="logo-nav">
              <img src={logoNav} alt="PFP CLUB" />
            </div>
            <li className="navbar__list__item"><NavLink exact to="/events">Events</NavLink></li>
            <li className="navbar__list__item"><NavLink exact to="/basecamp">Base camp</NavLink></li>
            <li className="navbar__list__item"><NavLink exact to="/media">Media</NavLink></li>
            <li className="navbar__list__item"><NavLink exact to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
