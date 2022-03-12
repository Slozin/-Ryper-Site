import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { FaCode, FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
    const router = useRouter();

    return (
        <>
            <footer className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <h4>PRODUTOS</h4>
                            <div className="links">
                                <ul>
                                    <li>
                                        <Link href="/hosting">Hospedagem de Minecraft</Link>
                                    </li>
                                    <li>
                                        <Link href="/servers">Servidores VPS</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>SUPORTE</h4>
                            <div className="links">
                                <ul>
                                    <li>
                                        <Link href="/knowledge-base">Base de conhecimento</Link>
                                    </li>
                                    <li>
                                        <Link href="https://discord.maximushost.com/">Chat de atendimento</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>A EMPRESA</h4>
                            <div className="links">
                                <ul>
                                    <li>
                                        <Link href="/status">Status da rede</Link>
                                    </li>
                                    <li>
                                        <Link href="/work-us">Trabalhe conosco</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
