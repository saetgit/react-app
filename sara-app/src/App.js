
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlePage/ArticlePage";
import CreateArticle from "./pages/createArticle/CreateArticle";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import { createContext, useState } from "react";

export const AppContext = createContext(null)
const App = () => {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <AppContext.Provider value={{isLogin,setIsLogin}}>
      <div>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/createArticle" element={<CreateArticle />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </AppContext.Provider>

  );
}

export default App;
