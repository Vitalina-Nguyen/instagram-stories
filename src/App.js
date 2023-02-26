import { BrowserRouter } from "react-router-dom";
import style from './App.module.scss';
import Page from "./components/Page";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Page/>
      </div>
    </BrowserRouter>
  );
}

export default App;
