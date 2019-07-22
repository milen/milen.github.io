
import Header from '../components/Header';
import "../styles/styles.scss";

const pageStyle = {};

const Page = props => (
    <div style={pageStyle}>
        <Header />
        <main>
            {props.children}
        </main>
    </div>
);

export default Page;