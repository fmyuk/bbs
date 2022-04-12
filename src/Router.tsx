import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { BoardContainer } from "./containers/BoardContainer";
import { ChatContentsContainer } from "./containers/ChatContentsContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<BoardContainer />} />
        <Route path="/chat/:id/:title" element={<ChatContentsContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;