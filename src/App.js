import React from "react";
import { BrowserRouter } from "react-router-dom";

// import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import AppRoutes from "./routes";
import {NavigationProvider} from "./config/NavigationContext"



 function App() {
  return (
    <BrowserRouter>
    <NavigationProvider>
        <Header />
        <AppRoutes />
        <GlobalStyles />
    </NavigationProvider>
    </BrowserRouter>
  );
}


export default App

