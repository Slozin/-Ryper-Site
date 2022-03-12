import styles from './styles.module.scss';

import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <div className="animate__animated animate__pulse">
                <div className={styles.Banner}>
                    <div className={styles.Title}>
                        <h3>Hospedagem de Minecraft</h3>
                        <p>Abra seu servidor com a melhor Hospedagem de Minecraft do mercado!</p>
                    </div>
                    <Image
                        src="https://cdn.moonkode.com/images/projects/HyperHost/banner/2.svg"
                        onDragStart={e => e.preventDefault()}
                        alt="Hosting"
                        objectFit={'cover'}
                        width={200}
                        height={250}
                    />
                </div>
            </div>
        </>
    );
}
