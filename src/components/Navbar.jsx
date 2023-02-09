import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <BSNavbar
      bg="light"
      variant="light"
      className="py-3"
      style={{
        borderBottom: '1px solid #ccc',
      }}
    >
      <Container fluid="xl">
        <BSNavbar.Brand href="/">
          <img src="/logo192.png" height="50" alt="Space Travelers" />
          <span className="ms-3 fs-3" style={{ fontWeight: '500' }}>
            Space Travelers&apos; Hub
          </span>
        </BSNavbar.Brand>
        <Nav className="ms-auto d-flex" style={{ gap: '1rem' }}>
          <NavLink to="/" className="nav-link">
            Rockets
          </NavLink>
          <NavLink to="/missions" className="nav-link">
            Missions
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </Nav>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
