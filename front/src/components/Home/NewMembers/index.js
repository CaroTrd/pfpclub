/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../index.scss';
import '../../../assets/styles/typo.scss';

class NewMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      next: 1,
    };
  }

  componentDidMount() {
    fetch('/api/members/newmembers')
      .then(res => res.json())
      .then((data) => {
        this.setState({ members: data });
      });
  }

  onNextClick(e) {
    const value = parseInt(e.target.getAttribute('data-value'), 10);
    this.setState(({ next: value }));
  }

  render() {
    return (
      <div>
        <div className="container_member">
          <h2 className="title-h2">NOUVEAU MEMBRE</h2>
          <div className="bowtie">
            <span className="node" />
          </div>
          <ul className="list--members" ref={el => this.ul = el}>
            {this.state.members.map((elem) => {
              const members = elem.member_id === (this.state.next) ? 'list--members' : 'shadow';
              return (
                <li className={members} key={elem.member_id}>
                  <p className="text corner-member">
                    {elem.text}
                  </p>
                  <div className="foto">
                    <img alt="foto" src={elem.pictures} className="profil" />
                  </div>
                  <p className="name_member">
                    {elem.first_name}
                    {' '}
                    {elem.last_name}
                  </p>
                </li>
              );
            })}
            <ul className="slider">
              {this.state.members.map(number => (
                <li key={number.member_id}>
                  <button type="button" className={this.state.next === number.member_id ? 'slide' : 'none'} data-value={number.member_id} onClick={e => this.onNextClick(e)} />
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default NewMember;
