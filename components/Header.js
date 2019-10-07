import Link from 'next/link';

const navStyle = {
    padding: "1em 0"
};
const linkStyle = {
    marginRight: 1 + "em"
};

const Header = () => (
    <nav style={navStyle}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/past">
            <a style={linkStyle}>Past</a>
        </Link>
    </nav>
);

export default Header;