import React, { Component } from "react";
import { Table } from "reactstrap";

class Tuorden extends Component {
  render() {
    return (
      <div className="container-fluid justify-content-center">
        <div>
          <h5 className="text-center">Tu Orden</h5>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>
                Agregar
                <br /> Magia
              </th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Tuorden;
