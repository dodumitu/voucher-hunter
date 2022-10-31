import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';

export default function DetailPost() {
    return (
        <div style={{ background: "#F5F7FA" }}>
            <header style={{ background: "#ee4d2d", height: "84px"}}>Header</header>

            <div style={{ marginTop: "32px", marginBottom: "32px" }}>
                <Container fluid="md" style={{ padding: "16px 32px" }}>
                    <Row style={{ width: "100%", minHeight: "400px", background: "rgb(255, 255, 255)", borderRadius: "3px", boxShadow: "rgb(0 0 0 / 5%) 0px 1px 1px 0px"}}>
                        <Col md={5} style={{ padding: "16px 16px" }}>
                            <Carousel style={{ border: "1px solid #ccc"}}>
                                <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-den-1-1.jpg"
                                    alt="First slide"
                                />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-vang-1-2.jpg"
                                    alt="Second slide"
                                />
                                </Carousel.Item>
                                <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-bac-1-2.jpg"
                                    alt="Third slide"
                                />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={7} style={{ padding: "16px 16px" }}>
                            <h1>Title</h1>
                            <Row>
                                <Col md={3}>
                                    <p>Giá: </p>
                                </Col>
                                <Col md={8}>
                                    <p>60.000.000đ</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <p>Hiệu lực voucher: </p>
                                </Col>
                                <Col md={8}>
                                    <p>29/10/2022</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <p>Thương hiệu: </p>
                                </Col>
                                <Col md={8}>
                                    <p>Apple</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={3}>
                                    <p>Mã giảm giá: </p>
                                </Col>
                                <Col md={8}>
                                    <p>***********</p>
                                </Col>
                            </Row>
                            <Form>
                                <Row>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{display: "flex", width: "200px", justifyContent: "space-between"}}>
                                        <Form.Label>Số lượng:</Form.Label>
                                        <Form.Control style={{width: "100px"}} type="text" placeholder="0" />
                                    </Form.Group>
                                </Row>
                                <Button variant="danger" style={{ width: "100px", marginTop: "8px" }}>Mua ngay</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <Container fluid="md" style={{ padding: "16px 32px" }}>
                    <Row style={{ width: "100%", minHeight: "100px", background: "rgb(255, 255, 255)", borderRadius: "3px", boxShadow: "rgb(0 0 0 / 5%) 0px 1px 1px 0px", padding: "16px 16px"}}>
                        <Col md={5} style={{display: "flex", alignItems: "center",}}>
                            <img style={{ maxHeight: "80px"}} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"/>
                            <p style={{ margin: "0 16px", fontSize: "1.75rem", fontWeight: "500"}}>Apple</p>
                        </Col>
                        <Col md={2}>
                            <p>Đánh Giá 48k</p>
                            <p>Sản Phẩm 224</p>
                        </Col>
                        <Col md={3}>
                            <p>Tỉ Lệ Phản Hồi 97%</p>
                            <p>Thời Gian Phản Hồi trong vài phút</p>
                        </Col>
                        <Col md={2}>
                            <p>Tham Gia 7 năm trước</p>
                            <p>Người Theo Dõi 53,8k</p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid="md" style={{ padding: "16px 32px" }}>
                    <div style={{ width: "100%", background: "rgb(255, 255, 255)", borderRadius: "3px", boxShadow: "rgb(0 0 0 / 5%) 0px 1px 1px 0px", padding: "16px 16px"}}>
                        <h2>Mô tả chi tiết mã giảm giá</h2>
                        <Row style={{ width: "100%", marginTop: "32px"}}>
                            <Col md={4}>
                                <p>Mục đích sử dụng của mã giảm giá:</p>
                            </Col>
                            <Col md={8}>
                                <p style={{ wordWrap: "break-word" }}>Để mua đồ rẻ hơn</p>
                            </Col>
                        </Row>
                        <Row style={{ width: "100%"}}>
                            <Col md={4}>
                                <p>Hướng dẫn sử dụng:</p>
                            </Col>
                            <Col md={8}>
                                <p style={{ wordWrap: "break-word" }}>Nhập mã khi mua hàng</p>
                            </Col>
                        </Row>
                        <Row style={{ width: "100%"}}>
                            <Col md={4}>
                                <p>Điều khoản & điều kiện:</p>
                            </Col>
                            <Col md={8}>
                                <p style={{ wordWrap: "break-word" }}>Mã sử dụng lần đầu</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <footer style={{ background: "#ee4d2d", height: "84px"}}>Footer</footer>
        </div>
    )
}