import React from "react";
import CrearFiscalia from "../components/fiscalia.crear";
import ListaFiscalia from "../components/fiscalias.lista";
import EditarFiscalia from "../components/fiscalia.editar";

function Menu() {
  return <div>Menu</div>;
}

const ListaComponentes = [
  {
    id: 0,
    title: "Menu",
    path: "/",
    render: Menu,
  },
  {
    id: 1,
    title: "Fiscalias",
    path: "/fiscalias",
    render: ListaFiscalia,
  },
  {
    id: 3,
    path: "/fiscalias/crear",
    render: CrearFiscalia,
  },

  {
    id: 4,
    path: "/fiscalias/editar/:id",
    render: EditarFiscalia,
  },
];

export default ListaComponentes;
