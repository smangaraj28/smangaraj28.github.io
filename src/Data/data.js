import React from "react";

// Creating the context object and passing the default values.
import Data from "./data.json";
const dataContext = React.createContext(Data);

export default dataContext;
