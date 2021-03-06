import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PopupDelete from "./PopupDelete";
import PopupEdit from "./PopupEdit";
import TablePagination from "@material-ui/core/TablePagination";
import TableContainer from "@material-ui/core/TableContainer";
import AddInfoPage from "./AddInfoPage";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#22bb33",
    color: "white",
  },
  table: {
    minWidth: 400,
    borderCollapse: "collapse",
    borderRadius: "5px 5px 0 0",
    margin: "25px 0",
    fontSize: "0.9em",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
    overflow: "hidden",
  },
  tableTheadTr: {
    backgroundColor: "#009879",
    color: "#ffffff",
    fontWeight: "bold",
  },
  tableTd: {
    padding: "12px 15px",
    flexDirection: "rowReverse",
  },
  tableTbodyTr: {
    borderBottom: "1px solid #dddddd",
    backgroundColor: "#f3f3f3",
  },
  container: {
    background: "#c3d6e2",
    border: "solid 1px",
    borderRadius: "10px",
    marginTop: theme.spacing(1),
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
    backgroundColor: "#ffffff",
    color: "#009879",
    fontWeight: "bold",
    maxHeight: 400,
  },
}));

const List = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Container>
        <CssBaseline>
          <p />
          <AddInfoPage
            data={props.data}
            addItem={props.addItem}
            title="Link Apartment and Block to Resident"
          />
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableTheadTr}>Id</TableCell>
                  <TableCell className={classes.tableTheadTr} align="right">
                    Resident
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="right">
                    Apartment
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="right">
                    Block
                  </TableCell>
                  <TableCell className={classes.tableTheadTr} align="right">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow className={classes.tableTbodyTr} key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell className={classes.tableTd} align="right">
                        {row.resident}
                      </TableCell>
                      <TableCell className={classes.tableTd} align="right">
                        {row.apartment}
                      </TableCell>
                      <TableCell className={classes.tableTd} align="right">
                        {row.block}
                      </TableCell>
                      <TableCell className={classes.tableTd} align="right">
                        <PopupDelete
                          title="Delete"
                          id={row.id}
                          deleteItem={props.deleteItem}
                        ></PopupDelete>{" "}
                        {"  "}
                        <PopupEdit
                          title="Edit"
                          row={row}
                          editItem={props.editItem}
                          editResident={props.editResident}
                          fullTable="false"
                        ></PopupEdit>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={props.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </CssBaseline>
      </Container>
    </>
  );
};

export default List;
