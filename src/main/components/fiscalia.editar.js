import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Actions from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { Box, MenuItem, Select } from "@material-ui/core";
import InputLabel from "../../global/inputs/iputslabes";
import SaveIcon from "@material-ui/icons/Save";
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
  const history = useHistory();

  useEffect(() => {
    const obj = {
      id: params.id,
    };
    dispatch(Actions.getFiscalia(obj));
    return () => {
      dispatch(Actions.clearAll());
    };
  }, [dispatch, params.id]);

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
    history.push("/fiscalias");
  };

  return (
    <div>
      Editar Fiscalia
      {state?.length ? (
        <>
          <Box display="flex" style={{ backgroundColor: "white" }}>
            <InputLabel
              id={"idnombre"}
              placeholder={"Nombre"}
              defaultValue={state[0]?.nombre}
              onchange={(e) => setnombre(e.target.value)}
            />
            <InputLabel
              id={"coordinador"}
              placeholder={"Cordinador"}
              defaultValue={state[0]?.coordinador}
              onchange={(e) => setCordinador(e.target.value)}
            />
          </Box>
          <Box display="flex" style={{ backgroundColor: "white" }}>
            <InputLabel
              id={"correo"}
              placeholder={"Correo"}
              defaultValue={state[0]?.correo}
              onchange={(e) => setCorreo(e.target.value)}
            />
            <InputLabel
              id={"telefono"}
              placeholder={"Telefono"}
              defaultValue={state[0]?.telefono}
              onchange={(e) => setTelefono(e.target.value)}
            />
          </Box>
          <Box display="flex" style={{ backgroundColor: "white" }}>
            <Select
              className="m-2"
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
            <div className="w-full"></div>
          </Box>
          <div className="flex justify-end m-4">
            <button
              onClick={() => onSubmit()}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
            >
              <SaveIcon />
              Editar
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
