import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <ToastContainer 
      autoClose={3000}
      pauseOnHover = {false}
      theme="light"
    />
  </>
)
