import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Main from 'main';

import 'assets/styles/tailwind.css';
import "./assets/styles/main.css";
const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);
