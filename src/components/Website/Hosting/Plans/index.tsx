import styles from './styles.module.scss';

import Image from 'next/image';
import { useRouter } from 'next/router';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Benefits from './Benefits';
import { useEffect, useState } from 'react';

export default function Plans() {
    const router = useRouter();

    const [location, setLocation] = useState('');

    useEffect(() => {
        setLocation('Estados Unidos');
    }, []);

    const switchLocation = (location: string) => {
        setLocation(location);
    };

    const responsiveCarousel = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
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
            <div className="animate__animated animate__backInDown">
                <div className={styles.Plans}>
                    <div className={styles.Locations}>
                        <div
                            className={`${styles.Location} ${
                                location == 'Estados Unidos' ? styles.Active : ''
                            }`}
                            onClick={() => switchLocation('Estados Unidos')}
                        >
                            <Image
                                src="https://cdn.moonkode.com/images/projects/HyperHost/flags/unitedstates.png"
                                alt="Location"
                                onDragStart={e => e.preventDefault()}
                                objectFit={'cover'}
                                width={40}
                                height={40}
                            />
                            <div className={styles.Name}>
                                <p>Estados Unidos</p>
                                <small>Ping de 100 ~ 145ms</small>
                            </div>
                        </div>
                        <div
                            className={`${styles.Location} ${
                                location == 'Brasil' ? styles.Active : ''
                            }`}
                            onClick={() => switchLocation('Brasil')}
                        >
                            <Image
                                src="https://cdn.moonkode.com/images/projects/HyperHost/flags/brazil.png"
                                alt="Location"
                                onDragStart={e => e.preventDefault()}
                                objectFit={'cover'}
                                width={40}
                                height={40}
                            />
                            <div className={styles.Name}>
                                <p>Brasil</p>
                                <small>Ping de 20 ~ 50ms</small>
                            </div>
                        </div>
                    </div>
                    <Carousel responsive={responsiveCarousel}>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/HyperHost/plans/1.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 2GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$10,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$15,00 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.ryperhost.com/cart.php?a=add&pid=1')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/HyperHost/plans/2.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 4GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$21,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$30,00 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.ryperhost.com/cart.php?a=add&pid=2')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/HyperHost/plans/3.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 6GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$30,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$45,00 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.ryperhost.com/cart.php?a=add&pid=3')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/HyperHost/plans/5.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 8GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$39,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$60,50 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.ryperhost.com/cart.php?a=add&pid=4')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/HyperHost/plans/6.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 10GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$48,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$75,50 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.maximushost.com/cart.php?a=add&pid=5')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/ryperHost/plans/7.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 12GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$58,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$90,50 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.maximushost.com/cart.php?a=add&pid=6')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/HyperHost/plans/8.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 14GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$42,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$70,00 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.maximushost.com/cart.php?a=add&pid=7')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.Plan}>
                            <div className={styles.Icon}>
                                <Image
                                    src="https://cdn.moonkode.com/images/projects/HyperHost/plans/9.svg"
                                    onDragStart={e => e.preventDefault()}
                                    alt="Plan"
                                    objectFit={'cover'}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className={styles.Title}>
                                <h4>Plano de 16GB</h4>
                            </div>
                            <div className={styles.Price}>
                                {location == 'Estados Unidos' ? (
                                    <p>
                                        R$48,00 <span>/mês</span>
                                    </p>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <p>
                                        R$80,00 <span>/mês</span>
                                    </p>
                                ) : null}
                            </div>
                            <div className={styles.Body}>
                                <ul>
                                    <Benefits />
                                </ul>
                            </div>
                            <div className={styles.Buy}>
                                {location == 'Estados Unidos' ? (
                                    <button onClick={() => router.push('https://central.maximushost.com/cart.php?a=add&pid=8')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <button onClick={() => router.push('/hosting')}>
                                        Comprar plano
                                    </button>
                                ) : null}
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    );
}
