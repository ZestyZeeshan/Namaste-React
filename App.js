const nested = React.createElement(
    "div", {id:"parent"},[
React.createElement(
    "div", {id:"child"},[
React.createElement(
"h1",{}, "hey nested p1"),
React.createElement(
    "h2", {}, "hey nested p2"),
]),
React.createElement(
"div", {id:"adult"},[
React.createElement(
"h1",{}, "hey nested p1"),
React.createElement(
    "h2", {}, "hey nested p2"),
]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(nested)


// const heading= React.createElement("h1", 
// {id :"heading"},
//  "Hello World!")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

// console.log(heading)