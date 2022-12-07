import React, { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//import components 
import CardPage from "./card.jsx";


const GirdCardPage = (prop) =>{



    return(
        <Row xs={1} md={2} lg={4} className="g-4 w-100">
        {
            prop.item.map(data=>(
                <Col>
                    <CardPage data={data}/>
                </Col>
            ))
        }
    </Row>
    );
}

export default GirdCardPage;