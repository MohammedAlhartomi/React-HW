
import React from 'react'
import {Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NaveBar() {
    return (
        <Navbar >
        <Navbar.Brand href="">
        I appear on all pages
        </Navbar.Brand>
        <Link  to = "/families"> Home</Link>
        <Link  to = "/families/new"> create family</Link>
       
      </Navbar>
    )
}