import Navbar from "../../components/navbar/Navbar";
import styled from "./article.module.css";
import pic from "../../assets/images/article.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ArticlePage() {
  const [article, setArticle] = useState({});

  const param = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${param.id}`)
      .then((result) => {
        setArticle(result.data)
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styled.articlePage}>
        <div className="container">
          <h2>{article.title}</h2>
          <div className={styled.info}>
            <span>تاریخ:{article.date} </span>
            <span>نویسنده:{article.author}</span>
            <span>زمان :{article.readingTime} </span>
          </div>
          <img src={article.imageUrl} alt="" />
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
