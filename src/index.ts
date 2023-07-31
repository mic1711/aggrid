import "./styles.css";
import { Grid } from "ag-grid-community";

import "ag-grid-community/styles//ag-grid.css";
import "ag-grid-community/styles//ag-theme-alpine.css";
document.getElementById("app")!.innerHTML = `
<h1> !</h1>`;

var gridOptions = {
  columnDefs: [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" }
  ],
  rowData: [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]
};
var eGridDiv = document.querySelector("#myGrid");
new Grid(eGridDiv, gridOptions);
