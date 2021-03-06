import React from "react";
import { Card, Button } from "react-bootstrap";
import CarouselComponent from "./CarouselComponent";
import ChartsComponent from "./ChartsComponent";
import TableComponent from "./TableComponent";

const DashboardComponent = () => {
  return (
    <div className="container mt-3">
        <div className="row mt-3">
            <ChartsComponent />
        </div>
      <div className="row mt-3">
        <CarouselComponent />
      </div>

      <div className="row mt-3">
        <div className="col-sm">
          <Card>
            <Card.Img
              variant="top"
              height="250"
              src="https://images.unsplash.com/photo-1650343808662-c05ae4a1c8b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card>
            <Card.Img            
              variant="top"
              height="250"
              src="https://images.unsplash.com/photo-1650239351171-19699fecb25b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm">
          <Card>
            <Card.Img
              variant="top"
              height="250"
              src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-2">
          <TableComponent />
      </div>      
    </div>
  );
};

export default DashboardComponent;
