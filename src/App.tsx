import React from 'react';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Hello, React with TypeScript!</h1>
      <p>This is a simple template running on your Samsung A54.</p>
      <Button />
    </div>
  );
};

export default App;