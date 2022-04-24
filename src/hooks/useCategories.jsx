import { createContext, useContext, useState } from "react";

import API_URL from "../services/api";

const CategoriesContext = createContext({});

export function CategoriesProvider({ children }) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [fact, setFact] = useState(null);

  const firstFact = async () => {
    const response = await API_URL.get(
      `https://api.chucknorris.io/jokes/random`
    );
    setFact(response.data);
  };

  const fetchCategories = async () => {
    const response = await API_URL.get("/categories");
    setCategoriesList(response.data);
  };

  const fetchFactByCategory = async (category) => {
    const response = await API_URL.get(`/random?category=${category}`);
    setFact(response.data);
  };

  return (
    <CategoriesContext.Provider
      value={{
        firstFact,
        fetchCategories,
        fetchFactByCategory,
        categoriesList,
        setFact,
        fact,
      }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);

  return context;
}
