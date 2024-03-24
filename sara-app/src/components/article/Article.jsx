import styled from "./article.module.css";
import article from "./../../assets/images/article.jpg";
function Article() {
  return (
    <div className={styled.articlWrapper}>
      <img src={article} />
      <h3>متغیرها در جاوا اسکریپت</h3>
      <p>خواندن در ۵ دقیقه</p>
    </div>
  );
}
export default Article;
