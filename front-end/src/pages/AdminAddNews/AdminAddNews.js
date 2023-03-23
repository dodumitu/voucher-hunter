import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Camera } from 'react-bootstrap-icons';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './adminAddNews.css';

export default function AdminAddNews() {
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
                            className="add-news__container"
                        >
                            <Row style={{width: "100%"}}>
                                <h3 className="mt-4">Thêm tin tức</h3>
                            </Row>
                            <Row style={{alignItems: "start", width: "100%", minHeight: "160px", marginTop: "32px"}}>
                                <Col md={3} sm={4} xs={12} style={{minHeight: "160px"}}>
                                    <label htmlFor="news-photo-upload" className="news-img-label">
                                        <div className="news-img-wrap news-img-upload" >
                                            <img htmlFor="news-photo-upload" className="news-img" src={src} alt={src}/>
                                        </div>
                                        <Camera className="news-photo-upload-icon"/>
                                        <input id="news-photo-upload" type="file" accept="image" className="news-img-input"/> 
                                    </label>
                                </Col>
                                <Col md={4} sm={4} xs={12} className="add-news-name-col">
                                    <div className="add-news-class">
                                        <input type="checkbox" style={{}}></input>
                                        <label style={{marginLeft: "8px"}} className="add-news-class-label">Tin tức trang chủ:</label>
                                    </div>
                                    <div className="add-news-class">
                                        <input type="checkbox" style={{}}></input>
                                        <label style={{marginLeft: "8px"}} className="add-news-class-label">Tin tức chi tiết:</label>
                                    </div>
                                </Col>
                            </Row>

                            <Row style={{display: "flex", alignnewss: "center", width: "100%", marginTop: "16px", padding: "0 12px"}}>
                                <label>Tiêu đề:</label>
                                <input
                                    type="text" 
                                    className="add-news__input"
                                />
                            </Row>

                            <Row style={{display: "flex", alignnewss: "center", width: "100%", marginTop: "16px", padding: "0 12px"}}>
                                <label>Mô tả:</label>
                                <input
                                    type="text" 
                                    className="add-news__input"
                                />
                            </Row>

                            <Row style={{display: "flex", alignnewss: "center", width: "100%", marginTop: "16px", padding: "0 12px"}}>
                                <label>Nội dung:</label>
                                <CKEditor
                                    style={{width: "100%"}}
                                    editor={ ClassicEditor }
                                    data="<p></p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                    } }
                                    onBlur={ ( event, editor ) => {
                                    } }
                                    onFocus={ ( event, editor ) => {
                                    } }
                                />
                            </Row>

                            <Row style={{display: "flex", alignnewss: "center", justifyContent: "center", width: "100%", marginTop: "32px"}}>
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