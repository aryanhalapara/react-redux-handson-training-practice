let projects = [];

function addProject() {
    const id = document.getElementById('pid').value;
    const pname = document.getElementById('pname').value;
    const pdesc = document.getElementById('pdesc').value;
    const status = document.getElementById('pstatus').value;
    projects.push(
        {
            id: id,
            name: pname,
            description: pdesc,
            status: status
        }
    );
    id.value = '';
    pname.value = '';
    pdesc.value = '';
    status.value = '';
}

function createTable() {
    let tableContainer = document.getElementById('projectListTbl');
    console.log(tableContainer);
    tableContainer.innerHTML = '';
    let tbl = document.createElement("table");
    let tblHeading = document.createElement("thead");
    const headRow = document.createElement("tr");
    const headCell1 = document.createElement("td")
    const hTxtCell1 = document.createTextNode('Project ID');
    headCell1.appendChild(hTxtCell1);
    headRow.appendChild(headCell1);
    const headCell2 = document.createElement("td")
    const hTxtCell2 = document.createTextNode('Project Name');
    headCell2.appendChild(hTxtCell2);
    headRow.appendChild(headCell2);
    const headCell3 = document.createElement("td")
    const hTxtCell3 = document.createTextNode('Description');
    headCell3.appendChild(hTxtCell3);
    headRow.appendChild(headCell3);
    const headCell4 = document.createElement("td")
    const hTxtCell4 = document.createTextNode('Status');
    headCell4.appendChild(hTxtCell4);
    headRow.appendChild(headCell4);
    tblHeading.appendChild(headRow);
    let tblBody = document.createElement("tbody");
    let tblFoot = document.createElement("tfoot");
    if (projects.length > 0) {
        for (let i = 0; i < projects.length; i++) {
            const row = document.createElement("tr");
            const cell1 = document.createElement("td")
            const txtCell1 = document.createTextNode(projects[i].id);
            const cell2 = document.createElement("td")
            const txtCell2 = document.createTextNode(projects[i].name);
            const cell3 = document.createElement("td")
            const txtCell3 = document.createTextNode(projects[i].description);
            const cell4 = document.createElement("td")
            const txtCell4 = document.createTextNode(projects[i].status);
            cell1.appendChild(txtCell1);
            cell2.appendChild(txtCell2);
            cell3.appendChild(txtCell3);
            cell4.appendChild(txtCell4);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);
            row.appendChild(cell4);
            tblBody.appendChild(row);
        }
    } else {
        const noDatEle = document.createElement('h3')
        const noData = document.createTextNode('No Project data to display !!');
        noDatEle.appendChild(noData);
        tblBody.appendChild(noDatEle);
    }
    tbl.appendChild(tblHeading);
    tbl.appendChild(tblBody);
    tableContainer.appendChild(tbl);
    countTRTag();
}

function countTRTag() {
    document.getElementById('countTR').innerText = document.getElementsByTagName('tbody')[0].rows.length;
}


