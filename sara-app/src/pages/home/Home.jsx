import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios"
function Home() {
  const [articles, serArticles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/articles")
    .then(result=>{
      serArticles(result.data.data)
    })
  },[]);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="سارا بلاگ" />
      <div className="container">
        <h2> مقالات جدید</h2>
        <div className={styled.articles}>
          {articles.map((article) => (
            <Article key={article.id} articles={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
