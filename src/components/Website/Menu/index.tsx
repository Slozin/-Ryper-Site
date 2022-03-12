import styles from './styles.module.scss';

import { Navbar, Nav, Container } from 'react-bootstrap';

import { useRouter } from 'next/router';

export default function Menu() {
    const router = useRouter();

    return (
        <>
            <Navbar expand="lg" className={styles.Menu}><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <Container>
                    <Navbar.Brand className={styles.Brand}>
                    </Navbar.Brand>
                    <Navbar.Toggle className={styles.Toggle} aria-controls="menu">
                        <i className="bx bx-menu"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="menu">
                        <Nav className="me-auto">
                            <Nav.Link
                                className={router.pathname === '/' ? styles.Active : ''}
                                onClick={() => router.push('/')}
                            >
                                <i className="bx bx-home"></i> INÍCIO
                            </Nav.Link>
                            <Nav.Link
                                className={router.pathname === '/hosting' ? styles.Active : ''}
                                onClick={() => router.push('/hosting')}
                            >
                                <i className="bx bx-cube-alt"></i> MINECRAFT
                            </Nav.Link>
                            <Nav.Link
                                className={router.pathname === '/servers' ? styles.Active : ''}
                                onClick={() => router.push('/servers')}
                            >
                                <i className="bx bx-server"></i> CLOUD/VPS
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
