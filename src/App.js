import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Trailer from "./components/Trailer";
import SignLogIn from "./components/pages/SignLogIn";
import Tourists from "./components/pages/tourists/Tourists";
import {AuthProvider} from './context/AuthProvider'
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <BrowserRouter>
      <AuthProvider >
          <Routes>
            <Route path={"/"} exact element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/trailer" element={<Trailer />} />
              <Route path="/sign-up" element={<SignLogIn />} />
              <Route element={<RequireAuth />}>
                <Route path="/tourists" element={<Tourists />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
