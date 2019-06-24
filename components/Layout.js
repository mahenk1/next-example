import Link from 'next/link';

const temp = "testing";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <style jsx global>{`
                body {
                    background:#ddd;
                    font-family:'Arial';
                }
                a {
                    margin:10px;
                    color:grey;
                    font-size:16px;
                    font-family:'Arial';
                }
            `}</style>
            
            <Link href="/">
                App
            </Link>
            <Link href={`/home?param=${temp}`} >
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link  href="/employees">
                Employee
            </Link>
            <Link  href="/help">
                Help
            </Link>
            {children}
        </React.Fragment>
    )
}

export default Layout;