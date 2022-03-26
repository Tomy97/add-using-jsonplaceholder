import useGetDataApi from './hooks/UseGetDataApi'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import NavbarComponent from './components/Navbar/NavbarComponent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Users from './views/Users'
import Login from './views/Login'
import Posts from './views/Posts'
import Albumes from './views/Albumes'
import Todos from './views/Todos'
import { Suspense } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
            />
            <Route path="/users" element={<Users />}>
              <Route path="/users/:userId/posts" element={<Posts />} />
              <Route path="/users/:userId/albumes" element={<Albumes />} />
              <Route path="/users/:userId/todos" element={<Todos />} />
            </Route>
            <Route path="/posts" element={<Posts />} />
            <Route path="/albumes" element={<Albumes />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App
