import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Nav, Button, Modal } from 'react-bootstrap';
import { PersonCircle, Telephone, Envelope, ShieldLock, Camera } from 'react-bootstrap-icons';
import DatePicker from 'react-date-picker';
import './profile.css';

export default function Profile() {
    const [src, setSrc] = useState();

    const [date, setDate] = useState(new Date());

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Header/>

            <Container fluid style={{background: "#efefef", padding: "28px 0"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "start", height: "100%"}}>
                    <Col lg={3} className="profile-sidebar">
                        <Nav className="flex-column">
                            <Nav.Link href="/" className="profile-sidebar-link"><PersonCircle style={{fontSize: "1.6rem", marginRight: "4px"}}/>Username</Nav.Link>
                            <Nav.Link eventKey="link-1" className="profile-sidebar-link">Thông tin tài khoản</Nav.Link>
                            <Nav.Link eventKey="link-2" className="profile-sidebar-link">Thông báo của tôi</Nav.Link>
                            <Nav.Link eventKey="link-3" className="profile-sidebar-link">Quản lý đơn hàng</Nav.Link>
                            <Nav.Link eventKey="link-4" className="profile-sidebar-link">Quản lý đổi trả</Nav.Link>
                            <Nav.Link eventKey="link-5" className="profile-sidebar-link">Sổ địa chỉ</Nav.Link>
                            <Nav.Link eventKey="link-6" className="profile-sidebar-link">Thông tin thanh toán</Nav.Link>
                            <Nav.Link eventKey="link-7" className="profile-sidebar-link">Đánh giá sản phẩm</Nav.Link>
                            <Nav.Link eventKey="link-8" className="profile-sidebar-link">Sản phẩm bạn đã xem</Nav.Link>
                            <Nav.Link eventKey="link-9" className="profile-sidebar-link">Sản phẩm yêu thích</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={9} sm={12} xs={12}>
                        <h5>Thông tin tài khoản</h5>
                        <form>
                            <Row style={{width: "100%", backgroundColor: "#ffffff", padding: "16px 0", marginTop: "16px"}}>
                                <Col md={8} sm={8} xs={12} style={{padding: "12px 16px"}}>
                                    <Row style={{alignItems: "center", width: "100%"}}>
                                        <Col md={3} sm={4} xs={12}>
                                            <label htmlFor="photo-upload" className="custom-file-upload">
                                                <div className="img-wrap img-upload" >
                                                    <img htmlFor="photo-upload" src={src} alt={src}/>
                                                </div>
                                                <Camera className="photo-upload-icon"/>
                                                <input id="photo-upload" type="file" /> 
                                            </label>
                                        </Col>
                                        <Col md={9} sm={8} xs={12} className="profile-name-col">
                                            <div className="profile-name">
                                                <label style={{marginRight: "8px"}} className="profile-name-label">Họ & Tên:</label>
                                                <input type="text" placeholder="Thêm họ tên" style={{width: "60%"}}></input>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "32px"}}>
                                        <Col md={3} sm={4} xs={12}>
                                            <label>Ngày sinh:</label>
                                        </Col>
                                        <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                            <DatePicker onChange={setDate} value={date} clearIcon={null}format="dd/MM/yyyy"/>
                                        </Col>
                                    </Row>

                                    <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "32px"}}>
                                        <Col md={3}>
                                            <label>Giới tính:</label>
                                        </Col>
                                        <Col md={3} style={{padding: "0 0 0 32px"}}>
                                            <input type="radio" name="gender"></input>
                                            <label style={{marginLeft: "8px"}}>Nam</label>
                                        </Col>
                                        <Col md={3} style={{padding: "0 0 0 32px"}}>
                                            <input type="radio" name="gender"></input>
                                            <label style={{marginLeft: "8px"}}>Nữ</label>
                                        </Col>
                                        <Col md={3} style={{padding: "0 0 0 32px"}}>
                                            <input type="radio" name="gender"></input>
                                            <label style={{marginLeft: "8px"}}>Khác</label>
                                        </Col>
                                    </Row>

                                    <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "32px"}}>
                                        <Col md={3}>
                                            <label>Quốc tịch:</label>
                                        </Col>
                                        <Col md={9} style={{padding: "0 0 0 32px"}}>
                                            <select style={{width: "90%"}} >
                                                <option value="0">Chọn quốc tịch</option>
                                                <option value="1">Việt Nam</option>
                                            </select>
                                        </Col>
                                    </Row>

                                    <Row style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "32px"}}>
                                        <Col md={4} sm={6} xs={10}>
                                            <Button variant="danger">Lưu thay đổi</Button>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={4} sm={4} xs={12} style={{padding: "12px 16px", borderLeft: "1px solid #ebe9eb"}}>
                                    <Row style={{width: "100%"}}>
                                        <p style={{fontWeight: "bold"}}>Liên hệ:</p>
                                    </Row>
                                    <Row style={{width: "100%", alignItems: "center"}}>
                                        <Col md={2} sm={2} xs={2}>
                                            <Telephone style={{fontSize: "1.25rem"}}/>
                                        </Col>
                                        <Col md={10} sm={10} xs={10}><p>Số điện thoại: <br></br>0123456789</p></Col>
                                    </Row>
                                    <Row style={{width: "100%", alignItems: "center"}}>
                                        <Col md={2} sm={2} xs={2}>
                                            <Envelope style={{fontSize: "1.25rem"}}/>
                                        </Col>
                                        <Col md={10} sm={10} xs={10}><p>Địa chỉ mail: <br></br>gmail@gmail.com</p></Col>
                                    </Row>
                                    <Row style={{width: "100%", marginTop: "32px"}}>
                                        <p style={{fontWeight: "bold"}}>Bảo mật:</p>
                                    </Row>
                                    <Row style={{width: "100%", alignItems: "center"}} onClick={handleShow} className="profile-sidebar-link">
                                        <Col md={2} sm={2} xs={2}>
                                            <ShieldLock style={{fontSize: "1.25rem"}}/>
                                        </Col>
                                        <Col md={10} sm={10} xs={10}><p>Đổi mật khẩu</p></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <form>
                        <Modal.Header closeButton>
                            <Modal.Title>Đổi mật khẩu</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 16px"}}>
                                <label>Mật khẩu cũ:</label>
                                <input type="password" placeholder="Mật khẩu cũ" style={{width: "60%"}}></input>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 16px"}}>
                                <label>Mật khẩu mới:</label>
                                <input type="password" placeholder="Mật khẩu mới" style={{width: "60%"}}></input>
                            </div>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 16px"}}>
                                <label>Nhập lại mật khẩu mới:</label>
                                <input type="password" placeholder="Nhập lại mật khẩu mới" style={{width: "60%"}}></input>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Lưu thay đổi
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </Container>

            <Footer/>
        </div>
    )
}