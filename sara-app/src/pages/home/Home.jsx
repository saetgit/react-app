import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
function Home() {
  let articles = [
    {
      id: 1,
      imageUrl: "",
      title: "عنوان تستی۱",
      readingTime: 5,
    },
    {
      id: 2,
      imageUrl: "",
      title: "عنوان ggg",
      readingTime: 4,
    },
  ];
  return (
    <div className={styled.homeWrapper}>
      <Navbar title="سارا بلاگ" />
      <div className="container">
        <h2> مقالات جدید</h2>
        <div className={styled.articles}>
          {articles.map((article) => (
            <Article />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
