import Link from 'next/link';
import "../styles/styles.scss";

export default () => (
  <>
    <div>Hello World.</div>
    <div><Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link></div>
  </>
)
