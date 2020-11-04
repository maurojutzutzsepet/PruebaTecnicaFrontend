import axios from "axios";
export const GET_FISCALIAS = "GET_FISCALIAS";
export const CREAR_FISCALIA = "CREAR_FISCALIA";
export const GET_FISCALIA = "GET_FISCALIA";
export const CLEAR_ALL = "CLEAR_ALL";

export function GetFiscalias() {
  const url = "http://localhost:3001/api/backend/fiscalias";
  const request = axios.get(url);

  return (dispatch) => {
    request.then((res) => {
      dispatch({
        type: GET_FISCALIAS,
        payload: res.data.data,
      });
    });
  };
}

export function crearFiscalia(body) {
  const url = "http://localhost:3001/api/backend/fiscalias";
  const request = axios.post(url, body);

  return (dispatch) => {
    request.then((res) => {});
  };
}

export function getFiscalia(body) {
  const url = "http://localhost:3001/api/backend/fiscalia";
  const request = axios.post(url, body);

  return (dispatch) => {
    request.then((res) => {
      dispatch({
        type: GET_FISCALIA,
        payload: res.data.data,
      });
    });
  };
}

export function editarFiscalia(body) {
  const url = "http://localhost:3001/api/backend/fiscalias";
  const request = axios.put(url, body);

  return (dispatch) => {
    request.then((res) => {});
  };
}

export function eliminarFiscalia(body) {
  const url = "http://localhost:3001/api/backend/fiscalias/delete";
  const request = axios.post(url, body);

  return (dispatch) => {
    request.then((res) => {
      if (res.data.valid) {
        return dispatch(GetFiscalias());
      }
    });
  };
}
export function clearAll(body) {
  return {
    type: CLEAR_ALL,
  };
}
