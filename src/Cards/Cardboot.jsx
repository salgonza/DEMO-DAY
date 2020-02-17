import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

import React, { Component } from "react";

import Imagen from "../assets/imagen.JPG";
import Img2 from "../assets/img2.JPG";
import Img3 from "../assets/img3.JPG";

class Cardboot extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <CardDeck>
          <Card>
            <CardImg src={Imagen}></CardImg>
            <CardBody>
              <CardTitle className="text-center">
                <h4 className="card-title">Escoge tus Productos</h4>
              </CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText className=" text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={Img2} alt="Card image cap" />
            <CardBody>
              <CardTitle className=" text-center">
                <h4 className="card-title">Agrégale Magia!</h4>
              </CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText className=" text-center">
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={Img3} alt="Card image cap" />
            <CardBody>
              <CardTitle className=" text-center">
                <h4 className="card-title">Pasa Por tu pedido</h4>
              </CardTitle>
              <CardSubtitle></CardSubtitle>
              <CardText className=" text-center">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
export default Cardboot;
