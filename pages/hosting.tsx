import type { NextPage } from 'next';

import Head from 'next/head';

import { Container } from 'react-bootstrap';

import Layout from '@layouts/Website';
import Banner from '@components/Website/Hosting/Banner';
import Plans from '@components/Website/Hosting/Plans';
import Protection from '@components/Website/Protection';
import Support from '@components/Website/Support';

const Hosting: NextPage = () => {
    return (
        <>
            <Head>
                <title>MaximusHost — Hospedagem de Minecraft</title>
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

export default Hosting;
