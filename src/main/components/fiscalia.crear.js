import React, { useState } from "react";
import { Box, MenuItem, Select } from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as Actions from "./store/actions";
import InputLabel from "../../global/inputs/iputslabes";
import SaveIcon from "@material-ui/icons/Save";
import { useHistory } from "react-router-dom";

export default function FiscaliaCrear() {
  const dispatch = useDispatch();
  const [nombre, setnombre] = useState("");
  const [coordinador, setCordinador] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [departamento, setDepartamento] = useState(1);
  const history = useHistory();

  const onSubmit = () => {
    const obj = {
      nombre: nombre,
      coordinador: coordinador,
      correo: correo,
      telefono: parseInt(telefono),
      departamento: departamento,
    };
    dispatch(Actions.crearFiscalia(obj));
    history.push("/fiscalias");
  };

  return (
    <>
      <Box display="flex" style={{ backgroundColor: "white" }}>
        <InputLabel
          id={"idnombre"}
          placeholder={"Nombre"}
          onchange={(e) => setnombre(e.target.value)}
        />
        <InputLabel
          id={"idcordinador"}
          placeholder={"Coordinador"}
          onchange={(e) => setCordinador(e.target.value)}
        />
      </Box>
      <Box display="flex" style={{ backgroundColor: "white" }}>
        <InputLabel
          id={"idcorreo"}
          placeholder={"Correo"}
          onchange={(e) => setCorreo(e.target.value)}
        />
        <InputLabel
          id={"idtelefono"}
          placeholder={"Telefono"}
          onchange={(e) => setTelefono(e.target.value)}
        />
      </Box>
      <Box display="flex" style={{ backgroundColor: "white" }}>
        <Select
          className="m-2"
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

        <div className="w-full"></div>
      </Box>
      <div className="flex justify-end m-4">
        <button
          onClick={() => onSubmit()}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
        >
          <SaveIcon />
          CREAR
        </button>
      </div>
    </>
  );
}
