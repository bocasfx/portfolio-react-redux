import _ from 'lodash';
import projects from '../store/projects';

const fadeProjects = (projectList) => {
  return projectList.map((project) => {
    project.transition = 'fadeIn';
    return project;
  });
};

const filterProjects = (state, categories) => {
  if (!categories.length) {
    return fadeProjects(projects);
  }

  let filteredProjects = _.filter(projects, (project) => {
    return (_.indexOf(categories, project.icon) >= 0);
  });
  return fadeProjects(filteredProjects);
};

const activateProject = (id) => {
  return projects.map((project) => {
    project.active = project.id === id;
    return project;
  });
};

export default (state = projects, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return projects;

    case 'ACTIVATE_PROJECT':
      let test = activateProject(action.id);
      return test;

    case 'FILTER_PROJECTS':
      return filterProjects(state, action.categories);

    case 'CLEAR_PROJECTS':
      return [];

    case 'FADE_OUT_PROJECTS':
      return state.map((project) => {
        project.transition = 'fadeOut';
        return project;
      });

    default:
      return state;
  }
};
