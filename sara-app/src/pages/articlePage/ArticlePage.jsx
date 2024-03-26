import Navbar from "../../components/navbar/Navbar";
import styled from "./article.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Spinner from "../../components/spinner/Spinner";

function ArticlePage() {
  const [article, setArticle] = useState({});
  const [isLoading, setisLoading] = useState(false);

  const param = useParams();

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`http://localhost:8000/articles/${param.id}`)
      .then((result) => {
        setArticle(result.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className={styled.articlePage}>
        <div className="container">
          {isLoading ? (
            <Spinner/>
          ) : (
            <>
              <h2>{article.title}</h2>
              <div className={styled.info}>
                <span>تاریخ:{article.date} </span>
                <span>نویسنده:{article.athor}</span>
                <span>زمان :{article.readingTime} </span>
              </div>
              <img src={article.imageUrl} alt="" />
              <p>{article.content}</p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArticlePage;
