const Prismic = require('prismic-javascript');

const getAllProjects = async () => {
  const api = await Prismic.getApi(
    'https://tonypettigrewdev.prismic.io/api/v2',
  );

  const query = await api.query('').catch(err => {
    if (err) return [];
  });

  return query.results;
};

const getProjectBySlug = async slug => {
  const api = await Prismic.getApi(
    'https://tonypettigrewdev.prismic.io/api/v2',
  );

  const query = await api
    .query([Prismic.Predicates.at('my.project.project_slug', slug)])
    .catch(err => {
      if (err) return [];
    });

  return query.results;
};

export { getAllProjects, getProjectBySlug };
