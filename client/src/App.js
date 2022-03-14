import React from "react";
import SiteRouter from "./Router";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

function App() {
  return (
    <React.Fragment>
      <SiteRouter />
    </React.Fragment>
  );
}

export default App;
