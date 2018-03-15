import React from 'react';

const CansListItem = (props) => {
  const { name, serial, size, createdDate, modifiedDate } = props.can;
  // const canName = can.name

  return (
    <li className="list-group-item">
      <h1><u> Name of Can </u></h1> <h2>{name}</h2>
      <h4><u> Serial Number </u></h4> <h4>{serial}</h4>
      <h4><u> Size </u></h4> <h4>{size}</h4>
      <h4><u> Created Date  </u></h4> <h4>{createdDate}</h4>
      <h4><u> Modiefied Date </u></h4> <h4>{modifiedDate}</h4>
    </li>
  )
}

export default CansListItem;
