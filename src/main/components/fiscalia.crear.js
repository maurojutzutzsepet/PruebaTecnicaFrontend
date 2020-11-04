import React, { useState } from "react";
import { Box, Button, MenuItem, Select, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as Actions from "./store/actions";

export default function FiscaliaCrear() {
  const dispatch = useDispatch();
  const [nombre, setnombre] = useState("");
  const [coordinador, setCordinador] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [departamento, setDepartamento] = useState("");

  const onSubmit = () => {
    const obj = {
      nombre: nombre,
      coordinador: coordinador,
      correo: correo,
      telefono: parseInt(telefono),
      departamento: departamento,
    };
    dispatch(Actions.crearFiscalia(obj));
  };

  return (
    <>
      <Box display="flex" style={{ backgroundColor: "white" }}>
        <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Nombre"
          fullWidth
          margin="normal"
          variant="filled"
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
          defaultValue={1}
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
        style={{ backgroundColor: "#EFDD42", margin: "10px", color: "black" }}
        onClick={() => onSubmit()}
      >
        Agregar Fiscalia
      </Button>
    </>
  );
}
