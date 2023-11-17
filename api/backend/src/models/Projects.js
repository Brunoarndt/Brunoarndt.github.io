import mongoose from "mongoose";

const ProjectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
      type: String,
      required: true
    }
  });
  
  const Projects = mongoose.model('Projects', ProjectsSchema);

  export default Projects;