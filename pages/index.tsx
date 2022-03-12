import type { NextPage } from 'next';

import Head from 'next/head';

import { Container } from 'react-bootstrap';

import Layout from '@layouts/Website';
import Header from '@components/Website/Home/Header';
import Banner from '@components/Website/Home/Banner';
import Protection from '@components/Website/Protection';
import Features from '@components/Website/Home/Features';
import Partners from '@components/Website/Home/Partners';
import Support from '@components/Website/Support';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>MaximusHost — A empresa que faz a diferença.</title>
            </Head>
            <Layout>
                <Container>
                    <Header />
                    <Banner />
                    <Protection />
                    <Features />
                    <Partners />
                    <Support />
                </Container>
            </Layout>
        </>
    );
};

export default Home;
