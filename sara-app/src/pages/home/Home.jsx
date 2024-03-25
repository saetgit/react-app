import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
function Home() {
  const [articles, serArticles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/articles").then((result) => {
      serArticles(result.data);
    });
  }, []);

  return (
  <div className={styled.homeWrapper}>
      <Navbar title="سارا بلاگ" />
      <div className="container">
        <h2> مقالات جدید</h2>
        <div className={styled.articles}>
          {articles.map((article) => (
            <Link to={`/article/${article.id}`}>
              <Article key={article.id} articles={article} />
            </Link>
          ))}
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Home;
