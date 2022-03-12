import styles from './styles.module.scss';

import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Copyright() {
    const router = useRouter();

    return (
        <>
            <div className={styles.Copyright}>
                <div className={styles.Copy}>
                    <Image
                        src="https://cdn.moonkode.com/images/projects/HyperHost/logo.png"
                        onClick={() => router.push('/')}
                        onDragStart={e => e.preventDefault()}
                        alt="Logo"
                        objectFit={'cover'}
                        width={100}
                        height={100}
                    />
                    <p onClick={() => router.push('https://moonkode.com')}>
                        <i className="bx bx-code-curly"></i> Developed by <a>Slozin</a>.
                    </p>
                </div>
            </div>
        </>
    );
}
