import styles from './styles.module.scss';

import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <div className="animate__animated animate__backInLeft">
                <div className={styles.Banner}>
                    <h3>Nossas vantagens</h3>
                    <ul>
                        <li>
                            <i className="bx bx-check-circle"></i> Proteção DDoS
                        </li>
                        <li>
                            <i className="bx bx-check-circle"></i> Ativação imediata
                        </li>
                        <li>
                            <i className="bx bx-check-circle"></i> Suporte eficaz
                        </li>
                        <li>
                            <i className="bx bx-check-circle"></i> Rede de 1Gbps
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <i className="bx bx-check-circle"></i> Sub-domínios gratuitos
                        </li>
                        <li>
                            <i className="bx bx-check-circle"></i> Backups diários
                        </li>
                        <li>
                            <i className="bx bx-check-circle"></i> Container docker
                        </li>
                        <li>
                            <i className="bx bx-check-circle"></i> Banco de dados MySQL
                        </li>
                    </ul>
                    <Image
                        src="https://cdn.moonkode.com/images/projects/HyperHost/banner/1.svg"
                        onDragStart={e => e.preventDefault()}
                        alt="Banner"
                        objectFit={'cover'}
                        width={250}
                        height={250}
                    />
                </div>
            </div>
        </>
    );
}
