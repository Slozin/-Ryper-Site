import styles from './styles.module.scss';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Table } from 'react-bootstrap';
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
                    <Table className={styles.Table} responsive>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Processador</th>
                                <th>Memória RAM</th>
                                <th>Armazenamento</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.Name}>KVM #1</td>
                                <td className={styles.Processor}>
                                    <p>2x Xeon E5-2650v2</p>
                                    <small>2vCPU</small>
                                </td>
                                <td className={styles.Memory}>
                                    <i className="bx bx-memory-card"></i> 4GB
                                </td>
                                <td className={styles.Storage}>
                                    <i className="bx bx-hdd"></i> 40GB
                                </td>
                                {location == 'Estados Unidos' ? (
                                    <td className={styles.Price}>
                                        R$33,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td className={styles.Price}>
                                        R$43,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Estados Unidos' ? (
                                    <td>
                                        <button onClick={() => router.push('/servers')}>
                                            Contratar
                                        </button>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td>
                                        <button onClick={() => router.push('/servers')}>
                                            Contratar
                                        </button>
                                    </td>
                                ) : null}
                            </tr>
                            <tr>
                                <td className={styles.Name}>KVM #2</td>
                                <td className={styles.Processor}>
                                    <p>2x Xeon E5-2650v2</p>
                                    <small>3vCPU</small>
                                </td>
                                <td className={styles.Memory}>
                                    <i className="bx bx-memory-card"></i> 6GB
                                </td>
                                <td className={styles.Storage}>
                                    <i className="bx bx-hdd"></i> 60GB
                                </td>
                                {location == 'Estados Unidos' ? (
                                    <td className={styles.Price}>
                                        R$50,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td className={styles.Price}>
                                        R$60,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Estados Unidos' ? (
                                    <td>
                                        <button onClick={() => router.push('/servers')}>
                                            Contratar
                                        </button>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td>
                                        <button onClick={() => router.push('/servers')}>
                                            Contratar
                                        </button>
                                    </td>
                                ) : null}
                            </tr>
                            <tr>
                                <td className={styles.Name}>KVM #3</td>
                                <td className={styles.Processor}>
                                    <p>2x Xeon E5-2650v2</p>
                                    <small>4vCPU</small>
                                </td>
                                <td className={styles.Memory}>
                                    <i className="bx bx-memory-card"></i> 8GB
                                </td>
                                <td className={styles.Storage}>
                                    <i className="bx bx-hdd"></i> 80GB
                                </td>
                                {location == 'Estados Unidos' ? (
                                    <td className={styles.Price}>
                                        R$67,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td className={styles.Price}>
                                        R$77,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Estados Unidos' ? (
                                    <td>
                                        <button onClick={() => router.push('/servers')}>
                                            Contratar
                                        </button>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td>
                                        <button onClick={() => router.push('/servers')}>
                                            Contratar
                                        </button>
                                    </td>
                                ) : null}
                            </tr>
                            <tr>
                                <td className={styles.Name}>KVM #4</td>
                                <td className={styles.Processor}>
                                    <p>2x Xeon E5-2650v2</p>
                                    <small>6vCPU</small>
                                </td>
                                <td className={styles.Memory}>
                                    <i className="bx bx-memory-card"></i> 12GB
                                </td>
                                <td className={styles.Storage}>
                                    <i className="bx bx-hdd"></i> 120GB
                                </td>
                                {location == 'Estados Unidos' ? (
                                    <td className={styles.Price}>
                                        R$101,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td className={styles.Price}>
                                        R$111,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                <td>
                                    <button onClick={() => router.push('/servers')}>
                                        Contratar
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.Name}>KVM #5</td>
                                <td className={styles.Processor}>
                                    <p>2x Xeon E5-2650v2</p>
                                    <small>8vCPU</small>
                                </td>
                                <td className={styles.Memory}>
                                    <i className="bx bx-memory-card"></i> 16GB
                                </td>
                                <td className={styles.Storage}>
                                    <i className="bx bx-hdd"></i> 160GB
                                </td>
                                {location == 'Estados Unidos' ? (
                                    <td className={styles.Price}>
                                        R$135,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td className={styles.Price}>
                                        R$145,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                <td>
                                    <button onClick={() => router.push('/servers')}>
                                        Contratar
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.Name}>KVM #6</td>
                                <td className={styles.Processor}>
                                    <p>2x Xeon E5-2650v2</p>
                                    <small>12vCPU</small>
                                </td>
                                <td className={styles.Memory}>
                                    <i className="bx bx-memory-card"></i> 24GB
                                </td>
                                <td className={styles.Storage}>
                                    <i className="bx bx-hdd"></i> 240GB
                                </td>
                                {location == 'Estados Unidos' ? (
                                    <td className={styles.Price}>
                                        R$203,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td className={styles.Price}>
                                        R$213,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                <td>
                                    <button onClick={() => router.push('/servers')}>
                                        Contratar
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className={styles.Name}>KVM #7</td>
                                <td className={styles.Processor}>
                                    <p>2x Xeon E5-2650v2</p>
                                    <small>16vCPU</small>
                                </td>
                                <td className={styles.Memory}>
                                    <i className="bx bx-memory-card"></i> 36GB
                                </td>
                                <td className={styles.Storage}>
                                    <i className="bx bx-hdd"></i> 360GB
                                </td>
                                {location == 'Estados Unidos' ? (
                                    <td className={styles.Price}>
                                        R$271,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                {location == 'Brasil' ? (
                                    <td className={styles.Price}>
                                        R$281,99 <span>/mês</span>
                                    </td>
                                ) : null}
                                <td>
                                    <button onClick={() => router.push('/servers')}>
                                        Contratar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}
