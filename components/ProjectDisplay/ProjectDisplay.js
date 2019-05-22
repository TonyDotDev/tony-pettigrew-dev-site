import Project from './Project/Project';

import './ProjectDisplay.scss';

const ProjectDisplay = ({ projects }) => (
  <ul className="project-display">
    {projects.map(project => (
      <Project key={project.id} project={project} />
    ))}
  </ul>
);

export default ProjectDisplay;
