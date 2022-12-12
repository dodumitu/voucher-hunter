import { Nav } from 'react-bootstrap';
import './sidebar.css';

export default function() {
    return (
        <Nav className="flex-column">
            <Nav.Link href="/" className="sidebar-link">Dashboard</Nav.Link>
            <Nav.Link eventKey="link-1" className="sidebar-link">Sản phẩm</Nav.Link>
        </Nav>
    )
}