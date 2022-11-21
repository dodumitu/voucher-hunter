import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';

export default function Home () {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    let active = 1;
    let items = [];
    for (let number = 1; number <= 3; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        )
    }

    return (
        <div>
            <Header/>

            <Container fluid style={{marginTop: "", padding: "", backgroundColor: "#64fa8c"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "start", padding: "0 15px", height: "100%"}}>
                    <Col md={12} style={{maxHeight: "100%", background: "#64fa8c", boxShadow: "", margin: "auto", padding: "16px 16px"}}>
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item style={{width: "100%", alignItems: "center", marginBottom: ""}}>
                                <img
                                    style={{marginBottom: "", maxHeight: "360px", objectFit: "contain", backgroundColor: "#ffffff", border: "1px solid #ccc", borderRadius: "3px", width: "60%"}}
                                    className="d-block"
                                    src="https://www.techone.vn/wp-content/uploads/2022/09/iphone-14-128gb-mau-xanh-2.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{color: "black"}} className="home-carousel-caption">
                                    <p className="home__slide">Voucher giảm giá 300.000đ</p>
                                    <p className="home__slide">6.000.000đ</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item style={{width: "100%", alignItems: "center", marginBottom: ""}}>
                                <img
                                    style={{marginBottom: "", maxHeight: "360px", objectFit: "contain", backgroundColor: "#ffffff", border: "1px solid #ccc", borderRadius: "3px", width: "60%"}}
                                    className="d-block"
                                    src="https://www.techone.vn/wp-content/uploads/2022/09/iphone-14-128gb-mau-xanh-2.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{color: "black"}} className="home-carousel-caption">
                                    <p className="home__slide">Voucher giảm giá 300.000đ</p>
                                    <p className="home__slide">6.000.000đ</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item style={{width: "100%", alignItems: "center", marginBottom: ""}}>
                                <img
                                    style={{marginBottom: "", maxHeight: "360px", objectFit: "contain", backgroundColor: "#ffffff", border: "1px solid #ccc", borderRadius: "3px", width: "60%"}}
                                    className="d-block"
                                    src="https://www.techone.vn/wp-content/uploads/2022/09/iphone-14-128gb-mau-xanh-2.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{color: "black"}} className="home-carousel-caption">
                                    <p className="home__slide">Voucher giảm giá 300.000đ</p>
                                    <p className="home__slide">6.000.000đ</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item style={{width: "100%", alignItems: "center", marginBottom: ""}}>
                                <img
                                    style={{marginBottom: "", maxHeight: "360px", objectFit: "contain", backgroundColor: "#ffffff", border: "1px solid #ccc", borderRadius: "3px", width: "60%"}}
                                    className="d-block"
                                    src="https://www.techone.vn/wp-content/uploads/2022/09/iphone-14-128gb-mau-xanh-2.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{color: "black"}} className="home-carousel-caption">
                                    <p className="home__slide">Voucher giảm giá 300.000đ</p>
                                    <p className="home__slide">6.000.000đ</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item style={{width: "100%", alignItems: "center", marginBottom: ""}}>
                                <img
                                    style={{marginBottom: "", maxHeight: "360px", objectFit: "contain", backgroundColor: "#ffffff", border: "1px solid #ccc", borderRadius: "3px", width: "60%"}}
                                    className="d-block"
                                    src="https://www.techone.vn/wp-content/uploads/2022/09/iphone-14-128gb-mau-xanh-2.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{color: "black"}} className="home-carousel-caption">
                                    <p className="home__slide">Voucher giảm giá 300.000đ</p>
                                    <p className="home__slide">6.000.000đ</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{marginTop: "30px", padding: "10px 0", backgroundColor: "#ffffff"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "center", padding: "0 15px", height: "100%"}}>
                    <Col md={3}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                    <Col md={6} style={{maxHeight: "100%", margin: "auto"}}>
                        <h3 style={{color: "#34a853", textAlign: "center", fontWeight: "700", fontSize: "2rem", margin: "0"}}>ƯU ĐÃI DÀNH CHO BẠN</h3>
                    </Col>
                    <Col md={3}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                </Row>
            </Container>

            <Container fluid style={{padding: "10px 0", backgroundColor: "#ffffff"}}>
                <div>
                    <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "center", padding: "0 15px", height: "100%"}}>
                        <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                            <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                                <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                    <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                    <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                    <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                                </Link>
                                <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                            <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                                <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                    <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                    <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                    <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                                </Link>
                                <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                            <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                                <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                    <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                    <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                    <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                                </Link>
                                <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                            <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                                <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                    <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                    <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                    <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                                </Link>
                                <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                
                <div style={{display: "flex", width: "100%", justifyContent: "center", marginTop: "12px"}}><Pagination><Pagination.Prev/>{items}<Pagination.Next/></Pagination></div>
            </Container>

            <Container fluid style={{marginTop: "30px", padding: "10px 0", backgroundColor: "#ffffff"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "center", padding: "0 15px", height: "100%"}}>
                    <Col md={4}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                    <Col md={4} style={{maxHeight: "100%", margin: "auto"}}>
                        <h3 style={{color: "#34a853", textAlign: "center", fontWeight: "700", fontSize: "2rem", margin: "0"}}>SẢN PHẨM NỔI BẬT</h3>
                    </Col>
                    <Col md={4}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                </Row>
            </Container>

            <Container fluid style={{padding: "10px 0", backgroundColor: "#ffffff"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "center", padding: "0 15px", height: "100%"}}>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                            </Link>
                            <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                            </Link>
                            <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                            </Link>
                            <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", }}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", fontWeight: "300", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Voucher trị giá 300.000đ</h4>
                                <p style={{textAlign: "center", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>270.000đ</p>
                            </Link>
                            <Link style={{display: "block",width: "100%", padding: "10px 0", textAlign: "center", backgroundColor: "#f04a32", color: "#ffffff", fontWeight: "500", fontSize: "1.25rem"}}>Mua hàng</Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{marginTop: "30px", padding: "10px 0", backgroundColor: "#ffffff"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "center", padding: "0 15px", height: "100%"}}>
                    <Col md={4}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                    <Col md={4} style={{maxHeight: "100%", margin: "auto"}}>
                        <h3 style={{color: "#34a853", textAlign: "center", fontWeight: "700", fontSize: "2rem", margin: "0"}}>TIN TỨC MỚI</h3>
                    </Col>
                    <Col md={4}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                </Row>
            </Container>

            <Container fluid style={{padding: "10px 0", backgroundColor: "#ffffff", minHeight: "400px"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "center", padding: "0 15px", minHeight: "100%"}}>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", minHeight: "100%"}}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%", minHeight: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", color: "#34a853", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Xiaomi giảm giá Redmi 9</h4>
                                <p style={{textAlign: "start", padding: "0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>MI 9 được ra mắt ngày...</p>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", minHeight: "100%"}}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%", minHeight: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", color: "#34a853", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Xiaomi giảm giá Redmi 9</h4>
                                <p style={{textAlign: "start", padding: "0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>MI 9 được ra mắt ngày...</p>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", minHeight: "100%"}}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%", minHeight: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", color: "#34a853", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Xiaomi giảm giá Redmi 9</h4>
                                <p style={{textAlign: "start", padding: "0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>MI 9 được ra mắt ngày...</p>
                            </Link>
                        </div>
                    </Col>
                    <Col md={3} sm={6} xs={12} style={{padding: "0 10px", minHeight: "100%"}}>
                        <div style={{border: "1px solid #ebe9eb", width: "100%", minHeight: "100%"}}>
                            <Link to="/" style={{color: "black", backgroundColor: "transparent"}}>
                                <img width="100%" style={{borderBottom: "1px solid #ebe9eb", maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                                <h4 style={{textAlign: "center", color: "#34a853", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>Xiaomi giảm giá Redmi 9</h4>
                                <p style={{textAlign: "start", padding: "0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>MI 9 được ra mắt ngày...</p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Footer/>
        </div>
    )
}