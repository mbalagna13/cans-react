import React from 'react';
import CansListItem from './cans_list_item';

const CansList = (props) => {
  

  const canItems = props.cans.map((can) => {
    return <CansListItem key={can.id} can={can} />
  })

  return (
    <ul className="col-md-4 list-group">
      {canItems}
    </ul>
  )
}

export default CansList;
