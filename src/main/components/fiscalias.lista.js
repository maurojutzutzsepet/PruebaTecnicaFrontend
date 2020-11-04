import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Box,
  Button,
  createMuiTheme,
  ListItemIcon,
  TablePagination,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Addicon from "@material-ui/icons/Add";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "./store/actions";
import { esES } from "@material-ui/core/locale";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

const theme = createMuiTheme(
  // {
  //   typography: {
  //     fontSize: 17,
  //   },
  // },
  esES
);

function FiscaliaLista(props) {
  const { classes } = props;
  const history = useHistory();
  const state = useSelector((state) => state.FiscaliaReducers.fiscaliaReducer);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    dispatch(Actions.GetFiscalias());
    return () => {};
  }, []);

  const validationMuni = (info) => {
    switch (info) {
      case 1:
        return "Guatemala";
      case 2:
        return `Chimaltenango`;
      case 3:
        return `Peten`;
      case 4:
        return `Solola`;

      default:
        return info;
    }
  };

  // <MenuItem value={1}>Guatemala</MenuItem>
  //         <MenuItem value={2}>Chimaltanango</MenuItem>
  //         <MenuItem value={3}>Peten</MenuItem>
  //         <MenuItem value={4}>Solola</MenuItem>

  function handleChangePage(event, page) {
    setPage(page);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  return (
    <>
      {/* <Box display="flex">
        <TextField
          fullWidth
          id="search"
          label="Buscar fiscalia"
          onChange={(e) => setsearch(e.target.value)}
          variant="outlined"
        />
        <TextField id="sea-basic" variant="outlined" />
        <TextField id="ss-basic" variant="outlined" />
      </Box> */}

      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            {state.fiscalias &&
              state.fiscalias
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.nombre}
                      <br />
                      Numero: {row.telefono} | Ubicacion{" "}
                      {validationMuni(row.departamento)}
                    </TableCell>
                    <TableCell align="right">
                      <ListItemIcon
                        onClick={() =>
                          history.push(`${"/fiscalias/editar/"}${row.id}`)
                        }
                      >
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemIcon
                        onClick={() =>
                          //history.push(`${"/fiscalias/editar/"}${row.id}`)
                          dispatch(Actions.eliminarFiscalia({ id: row.id }))
                        }
                      >
                        <DeleteIcon />
                      </ListItemIcon>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
        <ThemeProvider theme={theme}>
          <TablePagination
            component="div"
            count={state.fiscalias ? state.fiscalias.length : 0}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page",
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page",
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </ThemeProvider>
      </Paper>
      <div>
        <ListItemIcon onClick={() => history.push("/fiscalias/crear")}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#EFDD42", margin: "10px" }}
          >
            +
          </Button>
        </ListItemIcon>
      </div>
    </>
  );
}

// FiscaliaLista.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(FiscaliaLista);
