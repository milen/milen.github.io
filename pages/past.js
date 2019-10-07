import Page from '../layouts/Page.js';
import ProjectsItem from '../components/ProjectsItem.js';

export default () => (
    <Page>
        <h1>Past projects.</h1>
        <p>A quick list of some of my more notable projects and the technoilogies I've utilised working on them.</p>

        <section>
            <h2>Playtech</h2>
            <ul>
                <li>Rect / Redux</li>
                <li>Typescript</li>
                <li>SASS</li>
                <li>Webpack</li>
            </ul>
        </section>
        <section>
            <h2><a href="https://craider.com/" target="_blank">Craider</a></h2>
            <ul>
                <li>Angular JS</li>
                <li>Bootstrap</li>
                <li>Webpack</li>
            </ul>
        </section>
        <section>
            <h2><a href="https://tanzo.io/" target="_blank">Tanzo</a></h2>
            <ul>
                <li>Angular JS</li>
                <li>Bootstrap</li>
                <li>Webpack</li>
            </ul>
        </section>
    </Page>
)
