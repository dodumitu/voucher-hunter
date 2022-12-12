import React, { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Gear, Trash, ChevronExpand, ChevronUp, ChevronDown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import DatePicker from 'react-date-picker';
import './adminListItems.css';

const arr = [1, 2, 3, 4]

export default function AdminListItems() {
    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());

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
    const [sortQuantity, setSortQuantity] = useState(sortTypes.default);
    const [sortPrice, setSortPrice] = useState(sortTypes.default);
    const [sortExp, setSortExp] = useState(sortTypes.default);

    const onChangeSortName = () => {
            if (sortName.type === "sort-default" || "sort-up") {
                setSortName(sortTypes.down);
            } 
            if (sortName.type === "sort-down") {
                setSortName(sortTypes.up);
            }
    };
    
    const onChangeSortQuantity = () => {
            if (sortQuantity.type === "sort-default" || "sort-up") {
                setSortQuantity(sortTypes.down);
            } 
            if (sortQuantity.type === "sort-down") {
                setSortQuantity(sortTypes.up);
            }
    };
    
    const onChangeSortPrice = () => {
            if (sortPrice.type === "sort-default" || "sort-up") {
                setSortPrice(sortTypes.down);
            } 
            if (sortPrice.type === "sort-down") {
                setSortPrice(sortTypes.up);
            }
    };
    
    const onChangeSortExp = () => {
            if (sortExp.type === "sort-default" || "sort-up") {
                setSortExp(sortTypes.down);
            } 
            if (sortExp.type === "sort-down") {
                setSortExp(sortTypes.up);
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
                                as={Link} to="/admin/add-item"
                            >Thêm sản phẩm</Button>
                        </div>
                        <div>
                            <form className="admin-item-list-query">
                                <div>
                                    <label className="admin-item-list-label">Tìm kiếm:</label>
                                    <input type="text" placeholder="Tìm kiếm"/>
                                </div>
                                <div>
                                    <label className="admin-item-list-label">Thuộc tính:</label>
                                    <select>
                                        <option value="1">Hết hạn</option>
                                        <option value="2">Voucher Noel</option>
                                        <option value="3">Voucher Tết</option>
                                        <option value="4">Voucher thường</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="admin-item-list-label">Hạn sử dụng:</label>
                                    <DatePicker onChange={setDateStart} value={dateStart} clearIcon={null}format="dd/MM/yyyy"/>
                                    <DatePicker onChange={setDateEnd} value={dateEnd} clearIcon={null}format="dd/MM/yyyy"/>
                                </div>
                            </form>
                        </div>
                        <Table striped hover className="mt-4">
                            <thead>
                                <tr>
                                    <th style={{textAlign: "center"}}>#</th>
                                    <th style={{textAlign: "center"}}>Ảnh</th>
                                    <th style={{textAlign: "center", cursor: "pointer"}} colSpan={2}
                                        onClick={onChangeSortName}
                                        >Tên voucher {sortName.icon}
                                    </th>
                                    <th style={{textAlign: "center", cursor: "pointer"}}
                                        onClick={onChangeSortQuantity}
                                        >Số lượng {sortQuantity.icon}
                                    </th>
                                    <th style={{textAlign: "center", cursor: "pointer"}}
                                        onClick={onChangeSortPrice}
                                        >Giá {sortPrice.icon}
                                    </th>
                                    <th style={{textAlign: "center", cursor: "pointer"}}
                                        onClick={onChangeSortExp}
                                        >Hạn sử dụng {sortExp.icon}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {arr.map((i, index) => (
                                    <tr key={i}>
                                        <td style={{textAlign: "center"}}>{index + 1}</td>
                                        <td style={{textAlign: "center"}}>
                                            <img
                                                className="admin-list-item-img"
                                                src="https://hostingviet.vn/data/tinymce/tin%20tuc%202019/voucher-la-gi.jpg"
                                                alt={index + 1}
                                            />
                                        </td>
                                        <td colSpan={2}>Mark</td>
                                        <td style={{textAlign: "center"}}>1</td>
                                        <td style={{textAlign: "center"}}>100.000d</td>
                                        <td style={{textAlign: "center"}}>30-12-2022</td>
                                        <td style={{textAlign: "end"}}>
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