
//1. import area
import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ThemeProvider, createTheme } from '@mui/material'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function pradeep(){
  return 'orange';

}
let clr = pradeep();

export const ThemeProvider2 =  createContext().Provider;
const customTheme = createTheme({
   palette: {
    primary:{
      main: '#FF0000',
    }
   },
})

let clr3 = '#0000FF'


//2. define area
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme= {customTheme}>
        <ThemeProvider2 mclr={clr3}>
           <App mycolor = {clr} />
        </ThemeProvider2>
    </ThemeProvider>
    
  </React.StrictMode>
);

//3. export area