import '../src/styles/globals.scss';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

import 'bootstrap/dist/css/bootstrap.min.css';

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <base href="/" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index,nofollow" />
                <meta name="author" content="Moonkode (moonkode.com)" />
                <meta name="copyright" content="Moonkode" />
                <meta name="designer" content="Moonkode (moonkode.com)" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <link
                    rel="shortcut icon"
                    href=""
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link
                    href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
