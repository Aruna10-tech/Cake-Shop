import {Provider} from "react-redux"
import { createRoot } from 'react-dom/client'
import './index.css'
import './CSS/global.css'
import App from './App.jsx'
import Store from './Store.jsx'
// import Submit from './Components/Submit'


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App/>
  </Provider>
)
