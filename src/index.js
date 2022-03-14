import reactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";
import Lowbar from "./Lowbar"

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Lowbar/>
        </div>
    );
}

let root = document.querySelector(".root");
reactDOM.render(<App/>, root);