import React from "react";
import Dasboard from "./Dasboard";

import { Provider as BumbagProvider } from "bumbag";
function App() {
  return (
    <BumbagProvider>
      <Dasboard />
    </BumbagProvider>
  );
}

export default App;
