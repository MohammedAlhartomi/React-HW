import React from 'react'
import {Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NaveBar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://avatars.git.generalassemb.ly/u/32770?s=200"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Movies App SEI-13
        </Navbar.Brand>
        <Link  to = "/"> Home</Link>
        <Link  to = "/Movies"> Movies</Link>
        <Link  to = "/About"> About</Link>
      </Navbar>
    )
}
