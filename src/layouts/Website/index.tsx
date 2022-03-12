import Menu from '@components/Website/Menu';
import Footer from '@components/Website/Footer';
import Copyright from '@components/Website/Copyright';

const Layout = ({ children }: any) => {
    return (
        <>
            <Menu />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
