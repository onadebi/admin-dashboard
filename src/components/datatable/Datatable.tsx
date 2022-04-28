import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../data/temp-datatablesource";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const ActionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => (
      <div className="cellAction">
        <div className="viewButton" onClick={()=> alert('View')}><VisibilityIcon className="actionIcon"/></div>
        <div className="deleteButton"><DeleteForeverIcon className="actionIcon"/></div>
      </div>
    ),
  },
];

const Datatable = () => {
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(ActionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
