// React - React DOM

import { createRoot } from 'react-dom/client';

import 'bulma/css/bulma.min.css';

import App from './App';

const root = createRoot(document.querySelector('#root'));

//javascript xml

// root.render(template);
root.render(<App />);
