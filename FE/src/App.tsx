import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/client/rootLayout'
import AdminLayout from './components/admin/adminLayout'
import './App.css'
import AddProject from './components/admin/Projects/AddProject'
import AddCategories from './components/admin/Categories/AddCategories'
import ListCategories from './components/admin/Categories/ListCategories'
import ListProjects from './components/admin/Projects/ListProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout/>}>
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
            <Route path="projects" element={<ListProjects/>}></Route>
            <Route path="projects/add" element={<AddProject/>}></Route>


            <Route path="categories" element={<ListCategories/>}></Route>
            <Route path="categories/add" element={<AddCategories/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
