import React, { Component } from "react";
import Card from "./CardUI";

import imagen from "../assets/imagen.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div ClassName="col-md-4">
            <Card imgsrc={imagen} title="Escoge tus Productos" />
          </div>
          <div ClassName="col-md-4">
            <Card imgsrc={img2} title="Agrégale Magia!" />
          </div>
          <div ClassName="col-md-4">
            <Card imgsrc={img3} title="Pasa por tu Pedido" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
