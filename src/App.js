import "../src/sb-admin-2.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Layouts/Sidebar';
import Topbar from './Layouts/Topbar';
import Admin from "./Pages/Admin/Admin";
import List from "./Pages/Student/List";
import Create from "./Pages/Student/Create";
import Edit from "./Pages/Student/Edit";
import View from "./Pages/Student/View";
import Tcreate from "./Pages/Teacher/Create";
import Tlist from "./Pages/Teacher/List";
import Tview from "./Pages/Teacher/View";
import Tedit from "./Pages/Teacher/Edit";
import Dashboard from "./Pages/Admin/Dashboard";


function App() {
  return (
    <>
     <BrowserRouter>
     <div id="wrapper">
     <Sidebar/>
     <div id="content-wrapper" class="d-flex flex-column">
     <div id="content">
     <Topbar />
     <div class="container-fluid">
     <Routes>
    <Route path="/" element={<Admin />}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>

    <Route path="/students/list" element={<List/>}></Route>
    <Route path="/students/create" element={<Create/>}></Route>
    <Route path="/students/edit/:id" element={<Edit/>}></Route>
    <Route path="/students/view/:id" element={<View/>}></Route>

    
    <Route path="/teacher/create" element={<Tcreate/>}></Route>
    <Route path="/teachers/list" element={<Tlist/>}></Route>
    <Route path="/teacher/view/:id" element={<Tview/>}></Route>
    <Route path="/teacher/edit/:id" element={<Tedit/>}></Route>

  
   
    </Routes>
     </div>
     </div>
     </div>
     </div>
     </BrowserRouter>
    </>
  );
}

export default App;
