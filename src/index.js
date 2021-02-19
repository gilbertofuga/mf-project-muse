import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
//import * as serviceWorker from './serviceWorker';

// export const lifeCycle = {
//   render: (id) => {
//     ReactDOM.createPortal(
//       <App theme={theme} />,
//       document.getElementById(containerId),
//     );
//     serviceWorker.unregister();
//   }
// }

window.renderMF1 = (containerId, theme) => {
  ReactDOM.render(<App theme={theme} />, document.getElementById(containerId));
};

window.unmountMF1 = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("MF1-container")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
