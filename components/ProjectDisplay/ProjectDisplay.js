import Project from './Project/Project';

import './ProjectDisplay.scss';

const ProjectDisplay = ({ projects }) => (
  <ul className="project-display">
    {projects.map(project => (
      <Project project={project} />
    ))}
  </ul>
);

export default ProjectDisplay;
