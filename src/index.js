import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Cardboot from "../src/Cards/Cardboot";
import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Card from "./Cards/Cards";
ReactDOM.render(<Cardboot />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
