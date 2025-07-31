import React from "react";
import "./App.css";
import Button from "./components/Button";

const _test = { name: "hello", items: [1, 2, 3] }; // underscore = ignored
function _messy() {
    return { status: "ok" };
}

const App: React.FC = () => {
    return (
        <div className='app-container'>
            <h1>Hello, React with TypeScript!</h1>
            <p>This is a simple template running on your Samsung A54.</p>
            <Button />
        </div>
    );
};

export default App;
