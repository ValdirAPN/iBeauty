import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />}>
      <Route path='home' element={<App />} />
      <Route path='chats' element={<App />} />
      <Route path='appointments' element={<App />} />
      <Route path='new-appointment' element={<App />} />
    </Route>
    <Route path='*' element={<App />} />
  </Routes>
</BrowserRouter>
)
