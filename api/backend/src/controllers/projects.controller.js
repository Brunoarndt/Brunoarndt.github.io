import projectsService from "../services/projects.service.js";

const create = async (req, res) => {
    try{
        const {title, description } = req.body;

        if(!title || !description){
            res.status(400).send({message: "Submit all fields to post"})
        }

        const project = await projectsService.create(req.body);

        if(!project){
            return res.status(400).send({message: "Error creating user"});
        }

        res.status(201).send({
            message: "Project created successfully",
            project: {
                id: project.id,
                title,
                description,
            },
        });
    } catch (err){
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try{
        const projects = await projectsService.findAllService();

        if(projects.lenght === 0){
            return res.status(400).send({message: "There are no projects yet"});
        }

        res.send(projects);
    } catch (err){
        res.status(500).send({message: err.message});
    }
};

const findById = async (req, res) => {
    try{
        const project = req.project;
        
        res.send(project);
    } catch(err){
        res.status(500).send({message: err.message});
    }
};

const update = async (req, res) => {
    try{
        const { title, description } = req.body;

        if(!title || !description){
            res.status(400).send({message: "Submit all fields to update"})
        }

        const {id, project} = req;

        await projectsService.update(
            id,
            title,
            description,
        );

        res.send({message: "Project successfully updated"});
    } catch(err) {
        res.status(500).send({message: err.message});
    }
};

export default { create, findAll, findById, update };