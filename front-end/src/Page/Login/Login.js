import { Container, Navbar, Row, Col, Form, Button } from 'react-bootstrap';
import Logo from '../../Asset/Image/logo';

export default function Login() {
    return (
        <div>
            <Navbar style={{ height: "84px", alignItems: "center" }}>
                <Container fluid>
                    <Row style={{ width: "75vw", height: "60px", margin: "auto", alignItems: "center"}}>
                        <Col md={2}><Navbar.Brand href="#home"><Logo/></Navbar.Brand></Col>
                        <Col md={2} style={{ color: "#222", fontSize: "1.5rem", fontWeight: "500", marginBottom: "-6px"}}>Đăng nhập</Col>
                    </Row>
                </Container>
            </Navbar>

            <div style={{display: "flex", background: "#ee4d2d", height: "calc(100vh - 84px - 32px)"}}>
                <Form style={{ width: "30vw", maxWidth: "400px", minWidth: "300px", height: "60vh", maxHeight: "500px", minHeight: "400px", padding: "30px 30px", background: "#ffffff", borderRadius: "4px", boxShadow: "0 3px 10px 0 rgb(0 0 0 / 14%)", margin: "auto"}}>
                    <div style={{ color: "#222", fontSize: "1.25rem", fontWeight: "500", textAlign: "center"}}>Đăng nhập</div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ marginTop: "24px"}}>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ marginTop: "20px"}}>
                        <Form.Control type="password" placeholder="Mật khẩu" />
                    </Form.Group>
                    <Button variant="danger" style={{ width: "100%", marginTop: "8px" }}>Đăng nhập</Button>
                    <div style={{ margin: "8px 0px", display: "flex", justifyContent: "space-between", height: "20px"}}>
                        <p><a href="/">Quên mật khẩu</a></p>
                        <p><a href="/">Đăng ký tài khoản</a></p>
                    </div>
                    
                    <p style={{ textAlign: "center", fontSize: "1.1rem", margin: "8px 0px"}}>Hoặc đăng nhập với</p>
                    <div style={{ width: "100%", textAlign: "center"}}>
                            <button style={{border: "1px solid rgba(0,0,0,.26)", color: "rgba(0,0,0,.87)", borderRadius: "2px", height: "40px", width: "80%", minWidth: "200px"}}><img style={{ marginRight: "8px", width: "24px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"/>Facebook</button>
                            <button style={{border: "1px solid rgba(0,0,0,.26)", color: "rgba(0,0,0,.87)", borderRadius: "2px", height: "40px", width: "80%", minWidth: "200px", marginTop: "4px"}}><img style={{ marginRight: "8px" }} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>Google</button>
                    </div>
                </Form>
            </div>

            <footer style={{background: "#ffffff", height: "32px", color: "#222", textAlign: "center", fontWeight: "500", alignSelf: "end"}}>2022</footer>
        </div>
    )
}