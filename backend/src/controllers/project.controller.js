const projectService = require('../services/project.service');

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getAllProjects();

    res.status(200).json({
      status: 'success',
      data: projects,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};

const getProject = async (req, res, next) => {
  const { projectId } = req.params;

  try {
    const project = await projectService.getProject(projectId);

    res.status(200).json({
      status: 'success',
      data: project,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  getProject,
};