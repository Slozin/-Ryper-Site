import styles from './styles.module.scss';
import Image from 'next/image';

import { useRouter } from 'next/router';

import ApresentationImage from '../../../../../public/images/apresentation/render.png';

export default function Header() {
    const router = useRouter();

    return (
        <>
            <div className={styles.cardApresentation}>
                <div className="row animate__animated animate__backInDown">
                    <div className="col-md-6 col-sm-12">
                        <div className={styles.textArea}>
                            <h4>A MELHOR HOSPEDAGEM DE MINECRAFT</h4>
                            <p>
                                A RyperHost tem os melhores preços do mercado. Crie seu servidor
                                agora mesmo com quem entende do assunto!
                            </p>
                            <div className={styles.buttonsActions}>
                                <button onClick={() => router.push('/hosting')}>Ver plano</button>
                                <button onClick={() => router.push('https://discord.maximushost.com/')}>
                                    Nosso discord
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Image
                            src={ApresentationImage}
                            className={styles.ImageApresentation}
                            alt="Apresentation Minecraft Render"
                            onDragStart={e => e.preventDefault()}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
