
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import Home from "./pages/home/Home";
import { Route,Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/article/:id" element={<ArticlePage/>}/>
        <Route path="/createArticle" element={<CreateArticle/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
