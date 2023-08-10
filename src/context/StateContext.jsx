import { createContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// VER COMO HACER FUNCIONAR ESTE CONTEXT
// PARA EVITAR PROP DRILLING DE SEARCHSTATE --> DE ItemListContainer > ItemList > ItemCard
// ItemListContainer setea el searchparam, ItemList no hace nada, ItemCard lo usa.
// Hacer un customHook para desp pasarlo por context??
// Una opción es crear un customHook para meter la lógica del searchParams y handleParams, y dentro del mismo ItemListContainer, envolver la ItemList para pasarle el context sólo a los elementos hijos

export const StateContext = createContext(null);

export function StateProvider({ children }) {
  return <StateContext.Provider>{children}</StateContext.Provider>;
}
