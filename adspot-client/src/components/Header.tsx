import { Container, Nav, Navbar } from "react-bootstrap";

function AuthButton({isLoggedIn}) {
    if (isLoggedIn) {
        return <Nav.Link>Logout</Nav.Link>
    } else {
        return (
            <>
                <Nav.Link>Sign Up</Nav.Link>
                <Nav.Link>Login</Nav.Link>
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
                    <AuthButton isLoggedIn={false}/>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header