import './Project.scss';

const Project = ({ project }) => {
  const { data } = project;

  return (
    <li className="project">
      <img
        src={data.display_image.url}
        alt={data.display_image.alt}
        className="project__img"
      />

      <h3 className="project__title">{data.project_name[0].text}</h3>
      <p className="paragraph project__description">
        {data.short_description[0].text}
      </p>
    </li>
  );
};

export default Project;
