import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Carousel, Form, Button } from 'react-bootstrap';
import React, { useState, useEffect, useCallback } from 'react';
import request from '../../api/request';
import './detailItem.css'

const productId = "636bda92dde4b45d0ce26b3e";

export default function DetailItem() {
    const [ quantity, setQuantity ] = useState(0)

    const incrementQuantity = () => {
        setQuantity(Number(quantity) + 1);
    }

    const decrementQuantity = () => {
        if(quantity > 0)
        setQuantity(Number(quantity) - 1);
    }

    const [ item, setItem ] = useState({
        status: "idle",
        data: null,
    });
    

    const getGetailItem = useCallback(async () => {
        try {
            setItem((...preState) => ({
                ...preState,
                status: "loading",
            }));

            const res = await request.get(`/product/${productId}`);
            if(!!res) {
                setItem({
                    status: "success",
                    data: res,
                })
            } else {
                setItem((preState) => ({
                    ...preState,
                    status: "error",
                }))
            }
        } catch (err) {
            console.log(err);
        }
            
    },[]);

    useEffect(() => {
        getGetailItem();
    }, [getGetailItem]);

    return (
        <div>
            <Header/>

            {!!item.data ? (
                <div>
                    <Container fluid style={{marginTop: "30px", padding: "10px 0", backgroundColor: "#ffffff"}}>
                        <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "start", padding: "0 15px", height: "100%", border: "1px solid #ebe9eb", borderShadow: "2px 2px #ebe9eb"}}>
                            <Col md={6} style={{ padding: "16px 16px" }}>
                                <Carousel style={{ border: "1px solid #ebe9eb"}}>
                                    {item.data.imgUrl.map((el, i) => (
                                        <Carousel.Item key={i}>
                                        <img
                                            className="d-block w-100"
                                            src={el}
                                            alt={i}
                                        />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                            <Col md={6} style={{ padding: "16px 16px" }}>
                                <h1>{item.data.title}</h1>
                                <Row>
                                    <Col md={4} sm={4} xs={6}>
                                        <p>Giá: </p>
                                    </Col>
                                    <Col md={8} sm={8} xs={6}>
                                        <p>{item.data.price}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} sm={4} xs={6}>
                                        <p>Hiệu lực voucher: </p>
                                    </Col>
                                    <Col md={8} sm={8} xs={6}>
                                        <p>{item.data.expireDate}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} sm={4} xs={6}>
                                        <p>Thương hiệu: </p>
                                    </Col>
                                    <Col md={8} sm={8} xs={6}>
                                        <p>{item.data.brand}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} sm={4} xs={6}>
                                        <p>Mã giảm giá: </p>
                                    </Col>
                                    <Col md={8} sm={8} xs={6}>
                                        <p>{item.data.discountCode}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4} sm={4} xs={6}>
                                        <p>Mô tả: </p>
                                    </Col>
                                    <Col md={8} sm={8} xs={6}>
                                        <p>{item.data.discountDetails}</p>
                                    </Col>
                                </Row>
                                <Form>
                                    <Row>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{display: "flex", alignItems: "center"}}>
                                            <Form.Label style={{marginBottom: "0"}}>Số lượng:</Form.Label>
                                            <Button 
                                                style={{backgroundColor: "#fff", border: "1px solid #ced4da", color: "#000", fontSize: "1.25rem", padding: "3px 15px", margin: "0 4px 0 12px"}}
                                                onClick={decrementQuantity}
                                                >-</Button>
                                            <Form.Control 
                                                style={{width: "100px", textAlign: "center"}} 
                                                type="text"
                                                onChange={e => setQuantity(e.target.value)}
                                                value={quantity}
                                            />
                                            <Button 
                                                style={{backgroundColor: "#fff", border: "1px solid #ced4da", color: "#000", fontSize: "1.25rem", padding: "3px 12px", margin: "0 0 0 4px"}}
                                                onClick={incrementQuantity}
                                            >+</Button>
                                        </Form.Group>
                                    </Row>
                                    <Button variant="danger" style={{ width: "200px", marginTop: "8px" }}>Thêm vào giỏ hàng</Button>
                                    <Button variant="danger" className="detail-item__buy-btn">Mua ngay</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
    
                    <Container fluid style={{marginTop: "30px", padding: "10px 0", backgroundColor: "#ffffff"}}>
                        <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "start", padding: "0 15px", height: "100%", border: "1px solid #ebe9eb", borderShadow: "2px 2px #ebe9eb"}}>
                            <Col md={4} style={{display: "flex", alignSelf: "center"}}>
                                <img style={{ maxWidth: "120px", objectFit: "fill"}} src={item.data.logo} alt="1"/>
                                <p style={{margin: "0 16px", fontSize: "1.75rem", fontWeight: "500"}}>{item.data.brand}</p>
                            </Col>
                            <Col md={2}>
                                <p>Đánh Giá 48k</p>
                                <p>Sản Phẩm 224</p>
                            </Col>
                            <Col md={3}>
                                <p>Tỉ Lệ Phản Hồi 97%</p>
                                <p>Thời Gian Phản Hồi trong vài phút</p>
                            </Col>
                            <Col md={3}>
                                <p>Tham Gia 7 năm trước</p>
                                <p>Người Theo Dõi 53,8k</p>
                            </Col>
                        </Row>
                    </Container>
    
                    <Container fluid style={{margin: "30px 0", padding: "10px 0", backgroundColor: "#ffffff"}}>
                        <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "start", padding: "15px 15px", height: "100%", border: "1px solid #ebe9eb", borderShadow: "2px 2px #ebe9eb"}}>
                            <h2>Mô tả chi tiết mã giảm giá</h2>
                            <Row style={{ width: "100%", marginTop: "32px"}}>
                                <Col md={4} sm={5} xs={6}>
                                    <p>Mục đích sử dụng của mã giảm giá:</p>
                                </Col>
                                <Col md={8} sm={7} xs={6}>
                                    <p style={{ wordWrap: "break-word" }}>Để mua đồ rẻ hơn</p>
                                </Col>
                            </Row>
                            <Row style={{ width: "100%"}}>
                                <Col md={4} sm={5} xs={6}>
                                    <p>Hướng dẫn sử dụng:</p>
                                </Col>
                                <Col md={8} sm={7} xs={6}>
                                    <p style={{ wordWrap: "break-word" }}>Nhập mã khi mua hàng</p>
                                </Col>
                            </Row>
                            <Row style={{ width: "100%"}}>
                                <Col md={4} sm={5} xs={6}>
                                    <p>Điều khoản & điều kiện:</p>
                                </Col>
                                <Col md={8} sm={7} xs={6}>
                                    <p style={{ wordWrap: "break-word" }}>Mã sử dụng lần đầu</p>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </div>
            ) : (<div>loading</div>)}


            <Footer/>
        </div>
    )
}