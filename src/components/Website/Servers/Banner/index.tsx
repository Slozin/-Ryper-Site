import styles from './styles.module.scss';

import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <div className="animate__animated animate__pulse">
                <div className={styles.Banner}>
                    <div className={styles.Title}>
                        <h3>Servidores VPS</h3>
                        <p>Abra sua empresa com o melhor Servidor VPS do mercado!</p>
                    </div>
                    <Image
                        src="https://cdn.moonkode.com/images/projects/HyperHost/banner/3.svg"
                        onDragStart={e => e.preventDefault()}
                        alt="Servers"
                        objectFit={'cover'}
                        width={300}
                        height={250}
                    />
                </div>
            </div>
        </>
    );
}
