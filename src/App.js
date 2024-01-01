import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Sign from "./Sign";


import "./App.css"
function App() {
  const [user, setUser] = useState(null);



  return (
    <div>
      <Routes>

        <Route path="/" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
