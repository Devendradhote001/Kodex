import { app } from "./app.js";

console.log(React)


let ui = React.createElement("div", {}, [
  React.createElement("h1", {}, "hey"),
  React.createElement("h1", {}, "bye"),
]);

{
  /* <div>
  <h1>hey</h1>
  <h1>bye</h1>
</div>; */
}

ReactDOM.createRoot(document.getElementById("root")).render(app());
