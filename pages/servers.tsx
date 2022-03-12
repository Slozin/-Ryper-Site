import type { NextPage } from 'next';

import Head from 'next/head';

import { Container } from 'react-bootstrap';

import Layout from '@layouts/Website';
import Banner from '@components/Website/Servers/Banner';
import Plans from '@components/Website/Servers/Plans';
import Protection from '@components/Website/Protection';
import Support from '@components/Website/Support';

const Servers: NextPage = () => {
    return (
        <>
            <Head>
                <title>MaximusHost — Servidores VPS</title>
            </Head>
            <Layout>
                <Container>
                    <Banner />
                    <Plans />
                    <Protection />
                    <Support />
                </Container>
            </Layout>
        </>
    );
};

export default Servers;
