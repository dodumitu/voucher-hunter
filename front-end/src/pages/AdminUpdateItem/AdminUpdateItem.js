import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Camera } from 'react-bootstrap-icons';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './adminUpdateItem.css';

export default function AdminUpdateItem() {
    const [ disabled, setDisabled ] = useState(true);
    const [src, setSrc] = useState();

    return (
        <div>
            <Header/>

            <Container fluid className="mb-4">
                <Row style={{width: "100%"}}>
                    <Col md={2} className="mt-4">
                        <Sidebar/>
                    </Col>
                    <Col md={10}>
                        <form 
                            className="add-item__container"
                        >
                            <Row style={{width: "100%"}}>
                                <h3 className="mt-4">Thêm sản phẩm</h3>
                            </Row>
                            <Row style={{alignItems: "center", width: "100%", minHeight: "160px", marginTop: "32px"}}>
                                <Col md={3} sm={4} xs={12} style={{minHeight: "160px"}}>
                                    <label htmlFor="item-photo-upload" className="item-img-label">
                                        <div className="item-img-wrap item-img-upload" >
                                            <img htmlFor="item-photo-upload" className="item-img" src={src} alt={src}/>
                                        </div>
                                        <Camera className="item-photo-upload-icon"/>
                                        <input id="item-photo-upload" type="file" accept="image" className="item-img-input"/> 
                                    </label>
                                </Col>
                                <Col md={9} sm={8} xs={12} className="add-item-name-col">
                                    <div className="add-item-name">
                                        <label style={{marginRight: "8px"}} className="add-item-name-label">Tên sản phẩm:</label>
                                        <input type="text" placeholder="Tên sản phẩm" style={{width: "60%"}}></input>
                                    </div>
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Nhãn hiệu:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <input 
                                        type="text" 
                                        className="add-item__input"
                                    />
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Hiệu lực sản phẩm:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <input 
                                        type="text" 
                                        className="add-item__input"
                                    />
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Mã code:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <input 
                                        type="text" 
                                        className="add-item__input"
                                    />
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Giá tiền:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <input 
                                        type="text" 
                                        className="add-item__input"
                                    />
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Số lượng:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <input 
                                        type="text" 
                                        className="add-item__input"
                                    />
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Mô tả sản phẩm:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <textarea 
                                        type="text" 
                                        className="add-item__input add-item__description" 
                                        rows="2"
                                    ></textarea>
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Mục đích sử dụng:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <textarea 
                                        type="text" 
                                        className="add-item__input add-item__description" 
                                        rows="2"
                                    ></textarea>
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Hướng dẫn sử dụng:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <textarea 
                                        type="text" 
                                        className="add-item__input add-item__description" 
                                        rows="2"
                                    ></textarea>
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={3} sm={4} xs={12}>
                                    <label>Điều kiện & điều khoản:</label>
                                </Col>
                                <Col md={9} sm={7} xs={12} style={{padding: "0 0 0 32px"}}>
                                    <textarea 
                                        type="text" 
                                        className="add-item__input add-item__description" 
                                        rows="2"
                                    ></textarea>
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "16px"}}>
                                <Col md={4} sm={6} xs={10}>
                                    <Button style={{width: "100%"}}
                                        variant="danger"
                                        disabled={disabled}
                                    >Lưu thay đổi</Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}