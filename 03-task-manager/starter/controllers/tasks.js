const Task = require('../models/task')

const getAllTasks = (req,res) => {
    res.send('all items from tasks file')
};

const createTasks = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTasksByID = (req,res) => {
res.json({id:req.params.id})    
}

const updateTasks = (req,res) => {
    res.send('update task')
}

const deleteTasks = (req,res) => {
    res.send('delete task')
}


module.exports = {
    getAllTasks,
    createTasks,
    getTasksByID, 
    updateTasks,
    deleteTasks
}