import {Project} from "./todo";
import {firstLoad} from "./dom";

const projects = [];

function getProjects(projectId) {
    if (projectId === undefined) {
        return projects
    }
    return projects[projectId - 1]
}

function createProject(title, description) {
    const project = new Project(title, description);
    projects.push(project);

    return project;
}

createProject('one', 'test project ONE!');
createProject('two', 'test project TWO!');


const exampleTodoOne = {
    title: 'example1',
    description: 'example desc',
    priority: 1,
    dueDate: '12-12-2020',
    active: false
}
const exampleTodoTwo = {
    title: 'example2',
    description: 'example 2 desc',
    priority: 2,
    dueDate: '03-20-1995',
    active: true
}

projects[0].addTodo(exampleTodoOne);
projects[0].addTodo(exampleTodoTwo);

firstLoad();

export {getProjects, createProject}
export default getProjects;