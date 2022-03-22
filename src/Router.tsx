import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { BoardContainer } from "./containers/BoardContainer";
import { ChatContainer } from "./containers/ChatContainer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<BoardContainer />} />
        <Route path="/chat/:id" element={<ChatContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;