import React from 'react';

const PartnersItem = (props) => {
  const Item = props.partners.map(elemPlatinium => (
    <li>
      <div className="item">
        <h4>{elemPlatinium.name}</h4>
        <img alt="pic" src={elemPlatinium.logo} />
      </div>
    </li>
  ));
  return <Item />;
};

export default PartnersItem;
