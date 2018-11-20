import React from "react";
import ReactDOM from "react-dom";
import ShoppingList from "./shopping_list";
import "./css/shopping_list.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FornAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

library.add(faCircleNotch);

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
