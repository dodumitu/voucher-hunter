import { Container, Row, Col, Form, InputGroup, Button, Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Search, PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import  './header.css'

export default function Header() {
    return (
        <div>
            <Container fluid style={{padding: "10px 0", height: "90px"}}>
                <Row className="nav__header nav-dropdown__header">
                    <Col md={2} style={{maxHeight: "100%"}}>
                        <a href="/">
                            <img  style={{maxHeight: "72px"}} src="https://c3.mediawz.com/wp-content/uploads/2021/06/logo-c3-1.png" alt="1"/>
                        </a>
                    </Col>
                    <Col md={3} style={{maxHeight: "100%"}} className="header__mobile-search">
                        <InputGroup>
                            <Form.Control
                                placeholder="Tìm kiếm..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <Search/>
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{minHeight: "40px", backgroundColor: "#34a853"}}>
                <Row className="nav__container nav-dropdown__row">
                    <Col md={9} sm={6} xs={6} className="nav-dropdown__col">
                        <Navbar style={{padding: "0"}}>
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle className="nav-dropdown">DANH MỤC</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/" className="nav-dropdown-btn">TRANG CHỦ</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/" className="nav-dropdown-btn">SẢN PHẨM</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/" className="nav-dropdown-btn">TIN TỨC</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/" className="nav-dropdown-btn">GIỚI THIỆU</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/" className="nav-dropdown-btn">LIÊN HỆ</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Nav.Link style={{paddingLeft: "0"}} href="/" className="nav-link-btn">TRANG CHỦ</Nav.Link>
                                <Nav.Link as={Link} to="/" className="nav-link-btn">SẢN PHẨM</Nav.Link>
                                <Nav.Link as={Link} to="/" className="nav-link-btn">TIN TỨC</Nav.Link>
                                <Nav.Link as={Link} to="/" className="nav-link-btn">GIỚI THIỆU</Nav.Link>
                                <Nav.Link as={Link} to="/" className="nav-link-btn">LIÊN HỆ</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                    <Col md={2} sm={3} xs={6}>
                        <div  style={{display: "flex", width: "100%", height: "100%", alignItems: "center", color: "#ffffff", justifyContent: "start"}}>
                            <PersonCircle style={{fontSize: "1.5rem"}}/><p style={{margin: "0 0 0 8px", fontSize: "1rem"}}>Username</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}