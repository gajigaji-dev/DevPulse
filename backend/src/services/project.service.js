const getAllProjects = async () => {    
const projects = await Project.findAll();
  return projects;
}

const getProject = async (projectId) => {
  const project = await Project.findByPk(projectId);
   return projects;
}   