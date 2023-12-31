import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./App/store";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { CrudContext } from "./Context/CrudContext";
import { AuthContext } from "./Context/AuthContext";
import { FunctionContext } from "./Context/FunctionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <SnackbarProvider autoHideDuration={4000} maxSnack={3}>
        <AuthContext>
          <CrudContext>
            <FunctionContext>
              <App />
            </FunctionContext>
          </CrudContext>
        </AuthContext>
      </SnackbarProvider>
    </Provider>
  </BrowserRouter>
);
