import { FC, ReactNode } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) => ({
    heroRoot: {
        minHeight: '70vh',
        height: '100%',
        width: '100%',
        backgroundColor: '#666666',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        minHeight: '70vh',
        height: '100%',
        width: '100%',
        backgroundColor: '#666666',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
}));

interface IProps {
    home?: boolean;
    children: ReactNode;
}

export const PageLayout: FC<IProps> = ({ home, children }) => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>Svindland | Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="preload"
                    href="/fonts/CascadiaCode.ttf"
                    as="font"
                    crossOrigin=""
                />
            </Head>

            <Header />

            <main className={home ? classes.heroRoot : classes.root}>
                {children}
            </main>

            <Footer />
        </>
    );
};
