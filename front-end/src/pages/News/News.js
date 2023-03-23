import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './news.css';

export default function News() {
    return(
        <div>
            <Header/>

            <Container fluid style={{marginTop: "30px", padding: "10px 0", backgroundColor: "#ffffff"}}>
                <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "center", padding: "0 15px", height: "100%"}}>
                    <Col md={4}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                    <Col md={4} style={{maxHeight: "100%", margin: "auto"}}>
                        <h3 style={{color: "#34a853", textAlign: "center", fontWeight: "700", fontSize: "2rem", margin: "0"}}>TIN TỨC MỚI</h3>
                    </Col>
                    <Col md={4}><hr style={{color: "#34a853", height: "2px"}}/></Col>
                </Row>
            </Container>

            <Container fluid style={{marginTop: "24px", padding: "", backgroundColor: "#ffffff"}}>
                <div className="news-detail-link">
                    <Link to="/" className="news-detail-link">
                        <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "start", padding: "0 15px", height: "100%", marginBottom: "16px"}}>
                            <Col sm={3} xs={6}>
                                <img width="100%" style={{maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="1"></img>
                            </Col>
                            <Col sm={9} xs={6}>
                                <h2>Title 1</h2>
                                <p>Đây là tin tức 1</p>
                            </Col>
                        </Row>
                    </Link>
                </div>
                <div className="news-detail-link">
                    <Link to="/" className="news-detail-link">
                        <Row style={{width: "100%", maxWidth: "1080px", margin: "auto", justifyContent: "space-between", alignItems: "start", padding: "0 15px", height: "100%", marginBottom: "16px"}}>
                            <Col sm={3} xs={6}>
                                <img width="100%" style={{maxHeight: "240px", objectFit: "contain"}} src="https://livingon.vn/wp-content/uploads/2020/09/voucher_images-1.jpg" alt="2"></img>
                            </Col>
                            <Col sm={9} xs={6}>
                                <h2>Title 2</h2>
                                <p>Đây là tin tức 2</p>
                            </Col>
                        </Row>
                    </Link>
                </div>
            </Container>

            <Footer/>
        </div>
    )
}