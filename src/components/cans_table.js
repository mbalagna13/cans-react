import React from 'react';
import CansListItem from './cans_list_item';
import ReactTable from 'react-table';
// import "react-table/react-table.css";

const CansTable = (props) => {
  console.log(props.cans);
  return (
    <div>
        <ReactTable
          data={props.cans}
          columns={[
            {
              Header: "Get All The Cans",
              columns: [
                {
                  Header: "Can Name",
                  accessor: "name"
                },
                {
                  Header: "Serial Number",
                  accessor: "serial"
                },
                {
                  Header: "Size",
                  accessor: "size"
                },
                {
                  Header: "Create date",
                  accessor: "createdDate"
                },
                {
                  Header: "Modified Date",
                  accessor: "modifiedDate"
                }
              ]
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
  )
}

export default CansTable;
