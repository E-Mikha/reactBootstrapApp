import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

import Home from "../../Pages/Home";
import Exscursions from "../../Pages/Exscursions/Exscursions";
import Free from "../../Pages/Free/Free";
import Contact from "../../Pages/Contact";
import Blog from "../../Pages/Blog";
import logo from "../Header/logo.png";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="65"
                width="90"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/"> Главная </Nav.Link>
                <Nav.Link href="/exscursions"> Экскурсии </Nav.Link>
                <Nav.Link href="/free"> Бесплатно </Nav.Link>
                <Nav.Link href="/blog"> Блог </Nav.Link>
                <Nav.Link href="/contact"> Связаться </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Найти"
                  className="me-sm-2"
                />
                <Button variant="outline-info">Поиск</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exscursions" element={<Exscursions />} />
            <Route path="/free" element={<Free />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
    );
  }
}
