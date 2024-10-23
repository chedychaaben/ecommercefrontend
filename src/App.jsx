import { BrowserRouter as Router , Routes, Route} from "react-router-dom"

import Editarticle from "./components/articles/Editarticle";
import Insertarticle from "./components/articles/Insertarticle";
import Listarticle from "./components/articles/Listarticle";
import Viewarticle from "./components/articles/Viewarticle";

import Editcategories from "./components/categories/Editcategories";
import Insertcategories from "./components/categories/Insertcategories";
import Listcategories from "./components/categories/Listcategories";
import Viewcategories from "./components/categories/Viewcategories";

import Insertscategories from "./components/scategories/Insertscategories";
import Listscategories from "./components/scategories/Listscategories";
import Viewscategories from "./components/scategories/Viewscategories";
import Editscategories from "./components/scategories/Editscategories";

import Menu from "./components/Menu";


function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Routes>
          <Route path="/articles" element={<Listarticle/>}/>
          <Route path="/articles/add" element={<Insertarticle/>}/>
          <Route path="/article/edit/:id" element={<Editarticle/>}/>
          <Route path="/article/view/:id" element={<Viewarticle/>}/>

          <Route path="/categories" element={<Listcategories/>}/>
          <Route path="/categories/add" element={<Insertcategories/>}/>
          <Route path="/categories/edit/:id" element={<Editcategories/>}/>
          <Route path="/categories/view/:id" element={<Viewcategories/>}/>

          <Route path="/scategories" element={<Listscategories/>}/>
          <Route path="/scategories/add" element={<Insertscategories/>}/>
          <Route path="/scategories/edit/:id" element={<Editscategories/>}/>
          <Route path="/scategories/view/:id" element={<Viewscategories/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App