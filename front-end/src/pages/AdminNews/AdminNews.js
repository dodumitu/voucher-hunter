import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Gear, Trash, ChevronExpand, ChevronUp, ChevronDown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import './adminNews.css';

const arr = [1, 2, 3, 4]

export default function AdminNews() {
    const sortTypes = {
        up: {
            type: "sort-up",
            icon: <ChevronUp/>,
        },
        down: {
            type: "sort-down",
            icon: <ChevronDown/>,
        },
        default: {
            type: "sort-default",
            icon: <ChevronExpand/>,
        }
    }

    const [sortName, setSortName] = useState(sortTypes.default);

    const onChangeSortName = () => {
            if (sortName.type === "sort-default" || "sort-up") {
                setSortName(sortTypes.down);
            } 
            if (sortName.type === "sort-down") {
                setSortName(sortTypes.up);
            }
    };

    return (
        <div>
            <Header/>
            
            <Container fluid>
                <Row style={{width: "100%"}}>
                    <Col md={2} className="mt-4">
                        <Sidebar/>
                    </Col>
                    <Col md={10} sm={12} xs={12}>
                        <h3 className="mt-4">Danh sách sản phẩm</h3>
                        <div style={{display: "flex", width: "100%", justifyContent: "end", marginBottom: "12px"}}>
                            <Button 
                                variant="primary"
                                as={Link} to="/admin/add-news"
                            >Thêm tin tức</Button>
                        </div>
                        <div>
                            <form className="admin-news-list-query">
                                <div>
                                    <label className="admin-news-list-label">Tìm kiếm:</label>
                                    <input type="text" placeholder="Tìm kiếm"/>
                                </div>
                            </form>
                        </div>
                        <Table striped hover className="mt-4">
                            <thead>
                                <tr>
                                    <th style={{textAlign: "center", width: "5%"}}>#</th>
                                    <th style={{textAlign: "center", width: "20%"}}>Icon</th>
                                    <th style={{textAlign: "center", cursor: "pointer"}}
                                        onClick={onChangeSortName}
                                        >Tiêu đề {sortName.icon}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((i, index) => (
                                    <tr key={i}>
                                        <td style={{textAlign: "center"}}>{index + 1}</td>
                                        <td style={{textAlign: "center"}}>
                                            <img
                                                className="admin-list-news-img"
                                                src="https://hostingviet.vn/data/tinymce/tin%20tuc%202019/voucher-la-gi.jpg"
                                                alt={index + 1}
                                            />
                                        </td>
                                        <td>Mark</td>
                                        <td style={{textAlign: "center", width: "10%"}}>
                                            <Link style={{color: "black"}} to="/admin/update-item">
                                                <Gear className="mx-2" style={{cursor: "pointer"}}/>
                                            </Link>
                                            <Trash 
                                                className="mx-2" style={{cursor: "pointer"}}

                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}