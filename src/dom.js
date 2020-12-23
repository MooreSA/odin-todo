import {getProjects, createProject } from "./index";

function firstLoad() {
    const projects = getProjects();
    addButtonListeners();

    updateNav()
    

    changeActiveProject(projects[0]);
}

function addButtonListeners() {
    const newProjBtn = document.querySelector('#btn-new-project');
    const editProjBtn = document.querySelector('#btn-edit-project');
    const submitTodoBtn = document.querySelector('#btn-submit-todo');

    newProjBtn.addEventListener('click', displayNewProjectForm);
    editProjBtn.addEventListener('click', displayEditProjectForm);
    submitTodoBtn.addEventListener('click', createTodo)
}

function getActiveProject() {
    const projectId = document.querySelector('.project-active').dataset.projectId;
    const project = getProjects(projectId);
    return project;
}

function displayNewProjectForm() {
    clearProject();
    navHighlight();
    addProjectInfo('New Project', 'Description');

    const todoWrapper = document.querySelector('#todo-wrapper')
    const newProjectForm = createProjectForm();

    todoWrapper.appendChild(newProjectForm);
}

function displayEditProjectForm() {
    const todoWrapper = document.querySelector('#todo-wrapper');
    const project = getActiveProject();

    clearProject();

    addProjectInfo(project.title, project.description);

    const editProjectForm = createProjectForm(project.title, project.description, true);

    todoWrapper.appendChild(editProjectForm);
}

function createProjectForm(title = "New Project", description = "Description", editFlag = false) {
    const formWrapper = document.createElement('div');
    const titleInput = document.createElement('input');
    const descInput = document.createElement('input');
    const titleLabel = document.createElement('label');
    const descLabel = document.createElement('label');
    const submitBtn = document.createElement('button');

    titleInput.type = 'text';
    descInput.type = 'text';

    titleInput.id = "title-input";
    descInput.id = "desc-input";

    titleLabel.htmlFor = "title-input";
    descLabel.htmlFor = "desc-input";

    titleLabel.textContent = "Project Title";
    descLabel.textContent = "Project Description";


    formWrapper.classList.add('mt-2');
    titleInput.classList.add('form-control');
    descInput.classList.add('form-control');
    titleLabel.classList.add('form-label', 'mt-3');
    descLabel.classList.add('form-label', 'mt-3');
    submitBtn.classList.add('btn', 'btn-success', 'mt-3');
    if (editFlag) {
        titleInput.value = title;
        descInput.value = description;
    }
    else {
        titleInput.placeholder = "New Project";
        descInput.placeholder = "Description";
    }

    if (editFlag) {
        submitBtn.onclick = editProject;
        submitBtn.textContent = "Edit Project"
    }
    else {
        submitBtn.onclick = newProject;
        submitBtn.textContent = "Create Project";
    }


    formWrapper.appendChild(titleLabel);
    formWrapper.appendChild(titleInput);
    formWrapper.appendChild(descLabel);
    formWrapper.appendChild(descInput);
    formWrapper.appendChild(submitBtn);

    return formWrapper;
}

function newProject() {
    const title = document.querySelector('#title-input').value;
    const description = document.querySelector('#desc-input').value;
    if (validateProject(title)) {
        const project = createProject(title, description);
        updateNav();
        changeActiveProject(project);
    }
    else {
    }
}

function editProject() {
    const project = getActiveProject();
    const newTitle = document.querySelector('#title-input').value;
    const newDesc = document.querySelector('#desc-input').value;

    if (validateProject(newTitle) || project.title === newTitle) {
        project.updateProject(newTitle, newDesc);
        updateNav();
        changeActiveProject(project);
    }
}

function validateProject(title) {
    const projects = getProjects();

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) {
            return false;
        }
    }

    return true;
}

function projectClick(event) {
    changeActiveProject(getProjects(event.target.dataset.projectId));
}

function changeActiveProject(project) {
    clearProject();
    navHighlight(project.id);
    addProjectInfo(project.title, project.description);
    addTodos(project.todos);
}

function navHighlight(projectId = null) {
    const activeLink = document.querySelector('.project-active')
    if (activeLink != undefined) {
        activeLink.classList.remove('project-active');
    }
    if (projectId === null) {
        return
    }
    document.querySelector(`[data-project-id="${projectId}"]`).classList.add('project-active');
}

function clearProject(){
    clearProjectInfo();
    clearTodos();
}

function updateNav() {
    const navWrapper = document.querySelector('#nav-wrapper')
    const projects = getProjects();
    navWrapper.textContent = "";


    for (let i = 0; i < projects.length; i++) {
        addProjectToNav(projects[i]);
    }
}

function addProjectToNav(project) {
    const navRoot = document.querySelector('#nav-wrapper');
    const element = document.createElement('div');

    element.classList.add('nav-link', 'project');
    element.dataset.projectId = project.id;
    element.textContent = project.title;

    element.addEventListener('click', projectClick);

    navRoot.appendChild(element);
}

function clearProjectInfo() {
    const projTitle = document.querySelector('#project-title');
    const projDesc = document.querySelector('#project-desc');

    projTitle.innerHTML = "";
    projDesc.innerHTML = "";
}

function clearTodos() {
    const todoWrapper = document.querySelector('#todo-wrapper');
    todoWrapper.innerHTML = "";
}

function addProjectInfo(title, description) {
    const projTitle = document.querySelector('#project-title');
    const projDesc = document.querySelector('#project-desc');

    projTitle.textContent = title;
    projDesc.textContent = description;
}

function displayTodo(todo) {
    const rowElem = document.createElement('div');
    const wrapper = document.createElement('div');
    const checkBox = document.createElement('input');
    const title = document.createElement('span');
    const description = document.createElement('span');
    const dueDate = document.createElement('span');
    
    rowElem.classList.add('row');
    wrapper.classList.add('col-11', 'd-flex', 'justify-content-center', 'align-items-center', 'flex-row', 'todo');
    description.classList.add('flex-grow-1');
    dueDate.classList.add('todo-date');

    wrapper.id = todo.id;

    checkBox.type = "checkbox"
    checkBox.name = 'todo-check';

    title.textContent = todo.title;
    description.textContent = todo.description;
    dueDate.textContent = todo.dueDate;

    wrapper.appendChild(checkBox);
    wrapper.appendChild(title);
    wrapper.appendChild(description);
    wrapper.appendChild(dueDate);

    rowElem.appendChild(wrapper);

    return rowElem;
}

function addTodos(todos) {
    const todoWrapper = document.querySelector('#todo-wrapper');

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const todoElement = displayTodo(todo);
        todoWrapper.appendChild(todoElement);
    }

    todoWrapper.appendChild(createTodoBtn());
}

function createTodoBtn() {
    const btnWrapper = document.createElement('div');
    const todoBtn = document.createElement('button');

    btnWrapper.classList.add('row');
    todoBtn.classList.add('btn', 'btn-new-todo', 'col-3');

    todoBtn.textContent = "Add Todo";
    todoBtn.dataset.bsToggle = "modal";
    todoBtn.dataset.bsTarget = "#todo-modal";

    btnWrapper.appendChild(todoBtn);

    return btnWrapper;
}

function createTodo() {
    const todoInfo = getTodoInfo();
    const project = getActiveProject();

    project.addTodo(todoInfo);
    clearTodos();
    addTodos(project.todos);
}

function getTodoInfo() {
    const todoInfo = {
        title: document.querySelector('#todo-title').value,
        description: document.querySelector('#todo-description').value,
        priority: document.querySelector('#todo-priority').value,
        dueDate: document.querySelector('#todo-date').value
    }
    return todoInfo;
}


export {firstLoad, addProjectToNav}
export default {newProject};