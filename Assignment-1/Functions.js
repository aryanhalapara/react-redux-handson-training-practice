var projects = [
    { pid: 101, pname: 'RMS' , status : 'In Progress' },
    { pid: 102, pname: 'RMG' , status : 'In Progress' }
];

function addProject(id, pname, status) {
    projects.push(
        {
            id: id,
            pname: pname,
            status: status
        }
    );
    displayPojects();
}

function displayPojects() {
    console.log(projects);
}

function updateProjectStatus(position, newStatus) {
    projects[position].status = newStatus;
    displayPojects();
}

function deleteProject(position) {
    projects.splice(position, 1);
    displayPojects();
}

addProject(103, 'AssetMgmnt', 'Inprogress');
updateProjectStatus(2, 'Completed');