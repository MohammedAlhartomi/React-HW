import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function OneCardMovie(props) {

    
    return (
        <Col md="4" sm="4" className="mt-3">
            <Card  className ="card-movie">
                <Card.Img variant="top" src={props.movie.link}  height ="300px" style={{    margin :"auto" , objectFit :"cover"}}  />
                <Card.Body>
                    <Card.Title>{props.movie.name}</Card.Title>
                    <Card.Text>
                        year : {props.movie.history}
                        <br/>
                        type : {props.movie.typee}
                        <br/>
                        <h5 className ="mt-2 text-center" > {props.movie.YourName}</h5>
                     </Card.Text>
                    <Link to={`/movies/${props.movie._id}`}> <Button onClick={()=>props.setSelectMovie(props.movie)}> more info</Button> </Link> 
                </Card.Body>
            </Card>
        </Col>
    )
}
