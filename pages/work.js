import Layout from '../components/Layout/Layout';
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay';

import { getAllProjects } from '../cms/prismic';

import '../scss/pages/work.scss';

const work = ({ projects, pathname }) => (
  <Layout pathname={pathname} isLanding={false}>
    <main className="work">
      <section className="work__recent-projects">
        <h2 className="sub-headline">
          <span>Recent</span>
          {` `}Work
        </h2>
        <p className="paragraph">
          A selection of personal projects and professional work, developed by
          me this year.
        </p>
      </section>
      <ProjectDisplay projects={projects} />
    </main>
  </Layout>
);

work.getInitialProps = async ({ pathname }) => {
  const projects = await getAllProjects();
  return { projects, pathname };
};

export default work;
