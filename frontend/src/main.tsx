import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ClassFolder from './pages/ClassFolder'
import Study from './pages/Study'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'classes/:classId', element: <ClassFolder /> },
      { path: 'classes/:classId/study', element: <Study /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'signup', element: <Signup /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)