import styles from './styles.module.scss';

import Image from 'next/image';

import { Row, Col } from 'react-bootstrap';

export default function Protection() {
    return (
        <>
            <div className="animate__animated animate__fadeInUp">
                <div className={styles.Protection}>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Image
                                src="https://cdn.moonkode.com/images/projects/HyperHost/protection/Protection.svg"
                                onDragStart={e => e.preventDefault()}
                                alt="Protection"
                                objectFit={'cover'}
                                width={500}
                                height={357}
                            />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <h3>Nossa proteção</h3>
                            <p>
                                Temos uma das melhores proteções do mercado brasileiro, chegando a
                                ter capacidade de mitigar ataques de até 1Tbps em menos de 60
                                segundos. Nossa proteção consegue checar qualquer tipo de ataque
                                contra o seu projeto rapidamente para que ele seja mitigado e o
                                tráfego fique limpo em poucos segundos. Conseguimos bloquear ataques
                                como Layer 4 e Layer 7* com base TCP (SYN, ACK, HTTP) que utilizam
                                falhas de aplicações e vunerabilidades para passar pelo Firewall e
                                chegar até o servidor, causando o esgotamento de recursos ou rede.
                                Nossa rede é protegida internamente e externamente, localizados em
                                um dos maiores datacenters da América do Norte, nossa proteção vai
                                muito além do virtual.
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}
