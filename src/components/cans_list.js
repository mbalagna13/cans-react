import React from 'react';
import CansListItem from './cans_list_item';

const CansList = (props) => {
  console.log(props.cans.length);


  return (
    <ul className="col-md-4 list-group">
    {props.cans.length}
    </ul>
  )
}

export default CansList;
