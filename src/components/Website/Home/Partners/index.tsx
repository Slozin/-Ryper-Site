import styles from './styles.module.scss';

import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Partners() {
    const responsiveCarousel = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <div className={styles.Partners}>
                <div className={styles.Title}>
                    <h3>Nossos parceiros</h3>
                    <p>Conheça as empresas que nos apoiam.</p>
                </div>
                <Carousel responsive={responsiveCarousel} showDots={true}>
                    <div className={styles.Partner}>
                        <Image
                            src="https://i.imgur.com/g6JPAl8.png"
                            onDragStart={e => e.preventDefault()}
                            alt="Partner"
                            objectFit={'cover'}
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className={styles.Partner}>
                        <Image
                            src="https://i.imgur.com/TiZcW2E.png"
                            onDragStart={e => e.preventDefault()}
                            alt="Partner"
                            objectFit={'cover'}
                            width={200}
                            height={200}
                        />
                    </div>
                </Carousel>
            </div>
        </>
    );
}
