import { Col, Container, Modal, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from "react";


function LogIn({isLoggedIn}) {
    const [show, setShow] = useState(false);

    const launchLogInModal = () => setShow(true);
    const closeLogInModal = () => setShow(false);

    if (isLoggedIn) {
        return <Nav.Link>Logout</Nav.Link>
    } else {
        return (
            <>
                <Nav.Link onClick={launchLogInModal}>Login</Nav.Link>
            
                <Modal show={show} onHide={closeLogInModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Row>
                        <Col>
                            <h1>Col 1</h1>
                        </Col>
                        <Col>
                            <h1>Col 2</h1>
                        </Col>
                    </Row>
                </Modal>
            </>
        )
    }
}

function Header() {
    return (
        <Navbar expand="xxl" bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="AdSpot Icon"
                        src="./images/adspot-favicon-color.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    AdSpot Marketplace
                </Navbar.Brand>
                <Nav className="me-2" >
                    <LogIn isLoggedIn={false}/>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header