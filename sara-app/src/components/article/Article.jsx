import styled from "./article.module.css";
import article from "./../../assets/images/article.jpg";
function Article(props) {
  console.log(props.articles);
  return (
    <div className={styled.articlWrapper}>
      <img src={props.articles.imageUrl} />
      <h3>{props.articles.title}</h3>
      <p>خواندن در {props.articles.readingTime} دقیقه</p>
    </div>
  );
}
export default Article;
