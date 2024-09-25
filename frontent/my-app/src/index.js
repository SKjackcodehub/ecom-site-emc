import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using React 18 or later
import App from './App'; // Adjust the import based on your App component's path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
