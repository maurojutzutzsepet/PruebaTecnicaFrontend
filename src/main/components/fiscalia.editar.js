import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Actions from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, MenuItem, Select, TextField } from "@material-ui/core";
export default function FiscaliaEditar() {
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector(
    (state) => state.FiscaliaReducers.fiscaliaReducer.unicaFiscalia
  );

  const [nombre, setnombre] = useState("");
  const [coordinador, setCordinador] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [departamento, setDepartamento] = useState("");

  useEffect(() => {
    const obj = {
      id: params.id,
    };
    dispatch(Actions.getFiscalia(obj));
    return () => {
      dispatch(Actions.clearAll());
    };
  }, []);

  useEffect(() => {
    if (state) {
      setDepartamento(state[0]?.nombre);
      setnombre(state[0]?.nombre);
      setCordinador(state[0]?.coordinador);
      setCorreo(state[0]?.correo);
      setTelefono(state[0]?.telefono);
      setDepartamento(state[0]?.departamento);
    }
  }, [state]);

  const onSubmit = () => {
    const obj = {
      id: state[0]?.id,
      nombre: nombre,
      coordinador: coordinador,
      correo: correo,
      telefono: parseInt(telefono),
      departamento: departamento,
    };
    dispatch(Actions.editarFiscalia(obj));
  };

  return (
    <div>
      Editar Fisclia
      {state?.length ? (
        <>
          <Box display="flex" style={{ backgroundColor: "white" }}>
            <TextField
              id="ee"
              style={{ margin: 8 }}
              placeholder="Nombre"
              fullWidth
              margin="normal"
              variant="filled"
              defaultValue={state[0]?.nombre}
              onChange={(e) => setnombre(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="cordinador"
              style={{ margin: 8 }}
              placeholder="Coordinador"
              fullWidth
              defaultValue={state[0]?.coordinador}
              onChange={(e) => setCordinador(e.target.value)}
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Box display="flex" style={{ backgroundColor: "white" }}>
            <TextField
              id="filled-full-width"
              style={{ margin: 8 }}
              placeholder="Correo"
              fullWidth
              defaultValue={state[0]?.correo}
              onChange={(e) => setCorreo(e.target.value)}
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Select
              id="filled-full-width"
              className="text-withe"
              type="submit"
              fullWidth
              defaultValue={state[0]?.departamento}
              id="ID_ESTADO"
              name="ID_ESTADO"
              onChange={(e) => setDepartamento(e.target.value)}
            >
              <MenuItem value={1}>Guatemala</MenuItem>
              <MenuItem value={2}>Chimaltanango</MenuItem>
              <MenuItem value={3}>Peten</MenuItem>
              <MenuItem value={4}>Solola</MenuItem>
            </Select>
          </Box>
          <Box display="flex" style={{ backgroundColor: "white" }}>
            <TextField
              id="filled-full-width"
              style={{ margin: 8 }}
              placeholder="Telefono"
              fullWidth
              defaultValue={state[0]?.telefono}
              onChange={(e) => setTelefono(e.target.value)}
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSubmit()}
            style={{
              backgroundColor: "#EFDD42",
              margin: "10px",
              color: "black",
            }}
          >
            Editar
          </Button>
        </>
      ) : null}
    </div>
  );
}
