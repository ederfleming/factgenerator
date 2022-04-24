import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { CategoriesProvider } from "./hooks/useCategories";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CategoriesProvider>
        <GlobalStyles />
        <Routes />
      </CategoriesProvider>
    </BrowserRouter>
  );
};

export default App;
