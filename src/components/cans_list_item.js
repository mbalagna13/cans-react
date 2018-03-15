import React from 'react';

const CansListItem = (props) => {
  const { name, serial, size, createdDate, modifiedDate } = props.can;
  // const canName = can.name

  return (
    <li className="list-group-item">
      <h1> {name} </h1>
      <h3> {serial} </h3>
      <h3> {size} </h3>
      <h3>  {createdDate} </h3>
      <h3> {modifiedDate} </h3>
    </li>
  )
}

export default CansListItem;
