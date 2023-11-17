import Projects from "../models/Projects.js";

const create = (body) => Projects.create(body);
const findAllService = () => Projects.find();
const findById = (id) => Projects.findById(id);
const update = (id, title, description) => 
    Projects.findByIdAndUpdate(
        { _id: id },
        { title, description }
    );

export default {
    create,
    findAllService,
    findById,
    update,
};
