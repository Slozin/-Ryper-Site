import styles from './styles.module.scss';

import { Row, Col } from 'react-bootstrap';

export default function Features() {
    return (
        <>
            <div className={styles.Features}>
                <div className={styles.Title}>
                    <h4>Porque escolher a RyperHost?</h4>
                    <p>
                        Saíba tudo sobre nossa empresa e seus benefícios de contratar, pois é nossa
                        garantia passar a credibilidade aos clientes antes que realizem suas compras
                        conosco, veja todo abaixo e caso tiver dúvidas entre em contato com nossa
                        equipe de suporte!
                    </p>
                </div>
                <Row>
                    <Col sm={12} md={3} lg={3}>
                        <div className={styles.Feature}>
                            <div className={styles.Icon}>
                                <i className="bx bxs-lock-alt bx-lg"></i>
                            </div>
                            <div className={styles.Body}>
                                <h4>Tempo de ativação</h4>
                                <p>Nosso tempo de ativação de serviços é de 5 minutos!</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <div className={styles.Feature}>
                            <div className={styles.Icon}>
                                <i className="bx bxs-credit-card-alt bx-lg"></i>
                            </div>
                            <div className={styles.Body}>
                                <h4>Sobre o reembolso</h4>
                                <p>
                                    Prazo de <b>7</b> dias para a solicitação do reembolso!
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <div className={styles.Feature}>
                            <div className={styles.Icon}>
                                <i className="bx bxs-heart bx-lg"></i>
                            </div>
                            <div className={styles.Body}>
                                <h4>Suporte ao cliente</h4>
                                <p>O suporte está sempre disponível para você!</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3} lg={3}>
                        <div className={styles.Feature}>
                            <div className={styles.Icon}>
                                <i className="bx bx-shield-quarter bx-lg"></i>
                            </div>
                            <div className={styles.Body}>
                                <h4>Proteção de dados</h4>
                                <p>Seus dados sempre estará criptografado e seguro!</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}
