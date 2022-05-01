import "./datatable.scss";
import React from "react";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../data/temp-datatablesource";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { NavLink } from "react-router-dom";
interface IUserRowFields {
  id: number;
  username: string;
  img: string;
  status: string;
  email: string;
  age: number;
}

const Datatable = () => {
  const [usersdata, setUsersData] = React.useState(userRows);

  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm('Confirm delete!');
    if(confirmDelete){
      const newRecords = usersdata.filter((m) => m.id !== id);
      setUsersData(newRecords); 
    }
  };

  const ActionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (
        params: GridRenderCellParams<
          IUserRowFields,
          IUserRowFields,
          IUserRowFields
        >
      ) => (
        <div className="cellAction">
          <NavLink to={`/users/${"testuser"}`}>
            <div className="viewButton">
              <VisibilityIcon className="actionIcon" />
            </div>
          </NavLink>
          <div className="deleteButton">
            <DeleteForeverIcon
              className="actionIcon"
              onClick={() => {console.log(params.row.username + " : " + params.row.id); handleDelete
            (params.row.id)}}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span>Add New User</span>
        <NavLink to={"/users/new"} className="link">
          Add user
          <PersonAddIcon />
        </NavLink>
      </div>
      <DataGrid
        rows={usersdata}
        columns={userColumns.concat(ActionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="datagrid"
      />
    </div>
  );
};

export default Datatable;
