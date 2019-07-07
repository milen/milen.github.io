import Link from 'next/link'
import "../styles/styles.scss";

export default () => (
  <>
    <div>About me</div>
    <div>Back to <Link href='/' as={ process.env.BACKEND_URL + '/'}><a>Home</a></Link></div>
  </>
)
