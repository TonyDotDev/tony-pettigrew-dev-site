import Layout from '../components/Layout/Layout';
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay';

import '../scss/pages/work.scss';

const work = ({ projects }) => (
  <Layout isLanding={false}>
    <main className="work">
      <section className="work__recent-projects">
        <h2 className="sub-headline">
          <span>Recent</span>
          {` `}Projects
        </h2>
        <p className="paragraph">
          A selection of personal projects and professional work that I have
          developed over the last 2 years.
        </p>
      </section>
      <ProjectDisplay projects={projects} />
    </main>
  </Layout>
);

work.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects').catch(err => {
    if (err)
      return {
        json: () => ({
          projects: [],
        }),
      };
  });
  const { projects } = await res.json();

  return { projects };
};

export default work;
