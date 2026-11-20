const getAllProjects = async () => {
  return [
    { id: 1, name: 'DevPulse' },
    { id: 2, name: 'ByteSieve' },
  ];
};

const getProject = async (projectId) => {
  return {
    id: projectId,
    name: 'DevPulse',
  };
};

module.exports = {
  getAllProjects,
  getProject,
};