import React from 'react';

class ProjectDetailComponent extends React.Component {

    render() {
        return (
            <div>
                <form className="search-form">
                    <input type="text"></input>
                    <button>Search</button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Scrum master</th>
                            <th>Team Members</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>TCI</td>
                            <td>John</td>
                            <td>12</td>
                            <td colSpan='2'>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>TCI</td>
                            <td>John</td>
                            <td>10</td>
                            <td colSpan='2'>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>TCI</td>
                            <td>John</td>
                            <td>8</td>
                            <td colSpan='2'>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>TCI</td>
                            <td>John</td>
                            <td>5</td>
                            <td colSpan='2'>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default ProjectDetailComponent;