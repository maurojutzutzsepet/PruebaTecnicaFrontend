import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  createMuiTheme,
  ListItemIcon,
  TablePagination,
  ThemeProvider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "./store/actions";
import { esES } from "@material-ui/core/locale";
import _ from "../../global/@lodash";
import InputSearch from "../../global/inputs/search";

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

const theme = createMuiTheme(esES);

function FiscaliaLista(props) {
  const { classes } = props;
  const history = useHistory();
  const state = useSelector((state) => state.FiscaliaReducers.fiscaliaReducer);
  const [search, setsearch] = useState("");
  const [dataFiltrada, setDataFiltrada] = useState(null);
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(Actions.GetFiscalias());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    function getSearchFilter() {
      if (search.length === 0) {
        return state.fiscalias;
      } else {
        return _.filter(state.fiscalias, (item) => {
          let nombreElemento = item.nombre.trim();
          return nombreElemento.toLowerCase().includes(search.toLowerCase());
        });
      }
    }
    if (state?.fiscalias) {
      setDataFiltrada(getSearchFilter());
    }
  }, [state?.fiscalias, search]);

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

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const hanldeChangeSearch = (e) => {
    setsearch(e.target.value);
  };

  return (
    <>
      <InputSearch onchange={(e) => hanldeChangeSearch(e)} />
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            {dataFiltrada &&
              dataFiltrada
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <strong>{row.nombre}</strong>
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
            count={dataFiltrada ? dataFiltrada.length : 0}
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
      <div className="flex justify-end m-4">
        <button
          onClick={() => history.push("/fiscalias/crear")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
        >
          +
        </button>
      </div>
    </>
  );
}

// FiscaliaLista.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(FiscaliaLista);
