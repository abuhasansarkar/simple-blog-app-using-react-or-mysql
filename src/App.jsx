import { RouterProvider } from "react-router-dom";
import "./App.scss";
import { router } from "./router/Router";

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
