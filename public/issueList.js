function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", {
    id: "root-3"
  }, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueFilter"));
}
function IssueRow(props) {
  //props.issue.Id
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Id), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Owner), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Status), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Created), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Effort), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Due), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Title));
}
function IssueTable() {
  const style = {
    border: "2px solid black"
  };
  const issueList = {
    Id: 1,
    Owner: "Person-A",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 4,
    Due: "2023-02-18",
    Title: "ABC"
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "root-3"
  }, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueTable"), /*#__PURE__*/React.createElement("table", {
    style: style
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Effort"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement(IssueRow, {
    issue: issueList,
    style: style
  }))));
}
function IssueAdd() {
  return /*#__PURE__*/React.createElement("div", {
    id: "root-3"
  }, /*#__PURE__*/React.createElement("h3", null, "Welcome to IssueAdd"));
}
const IssueList = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(IssueList, null));