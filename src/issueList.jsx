function IssueFilter() {
    return (
        <div id="root-3">
            <h3>Welcome to IssueFilter</h3>
        </div>
    )
}
function IssueRow(props) {
    //props.issue.Id
    return (
        <tr>
            <td style={props.style}>{props.issue.Id}</td>
            <td style={props.style}>{props.issue.Owner}</td>
            <td style={props.style}>{props.issue.Status}</td>
            <td style={props.style}>{props.issue.Created}</td>
            <td style={props.style}>{props.issue.Effort}</td>
            <td style={props.style}>{props.issue.Due}</td>
            <td style={props.style}>{props.issue.Title}</td> 
        </tr>
    )
}
function IssueTable() {
    const style = {border: "2px solid black"};
    const issueList = {
        Id:1, 
        Owner: "Person-A", 
        Status: "Assigned", 
        Created: "2023-01-20", 
        Effort: 4, 
        Due: "2023-02-18", 
        Title:"ABC"
    };  
    return (
        <div id="root-3">
            <h3>Welcome to IssueTable</h3>
            <table style={style}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Owner</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                   <IssueRow issue={issueList} style={style}/>
                </tbody>
            </table>
        </div>
    )
}

function IssueAdd() {
    return (
        <div id="root-3">
            <h3>Welcome to IssueAdd</h3>
        </div>
    )
}



const IssueList = () => {
    return(
        <div>
            <IssueFilter />
            <hr />
            <IssueTable />
            <hr />
            <IssueAdd />
        </div>
    )
}

const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render(<IssueList/>);