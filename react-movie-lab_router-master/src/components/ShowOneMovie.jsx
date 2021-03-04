import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {useParams} from 'react-router-dom';
export default function ShowOneMovie(props) {
    const {id} = useParams()
    const [selectMovie , setSelectMovie]= useState(props.selectMovie)
    const {name , link ,history , typee , YourName  } = selectMovie
    useEffect(() => {
            if (!name) {
                axios.get('https://sei12.herokuapp.com/movei/json')
                .then(res =>{     
                    let movie = res.data.find(ele => ele._id == id)
                    setSelectMovie(movie)
                })

            }
    
    }, [])


    return (
        <>
            <Container className="mt-5" >
                <Row >
                    <Col md="6" >
                        <img width="100%" src={link} alt="" srcset="" />
                    </Col>
                    <Col md="6">
                        <h2>{name}</h2>
                        <h2> {history}</h2>
                        <h2>{YourName}</h2>
                        <h2>{typee}</h2>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
