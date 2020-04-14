var projects = [
    {
        id : 1,
        name: 'Project 1',
        description: 'This is java Project'
    },
    {
        id : 2,
        name: 'Project 2',
        description: 'This is Angular Project'
    },
    {
        id : 3,
        name: 'Project 3',
        description: 'This is React JS Project'
    }
];

function findProject(id) {
    projects.forEach(project => {
        if(project.id === id) {
            console.log(project.name + ' ' + project.description);
        }
    });
}

findProject(2);
