import { useContext, useState } from "react";
import Input from "../../components/Input/Input";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Textarea from "../../components/textarea/Textarea";
import axios from "axios";
import { AppContext } from "../../App";
import Login from "../../components/login/Login";
function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    athor: "",
    message: "",
    imageUrl: "",
  });

  const handelChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };
  const handelNewArticle = () => {
    axios.post("http://localhost:8000/articles", {
      id: 9,
      imageUrl: article.imageUrl,
      title: article.title,
      readingTime: article.readingTime,
      date: article.date,
      athor: article.athor,
      content: article.message,
    });
  };

  console.log(article);
  const {isLogin}=useContext(AppContext)

  return (
    <>
      <Navbar title="سارا بلاگ" />

      {isLogin ? (
        <div className={styled.CreateArticle}>
          <div className="container">
            <h2>ایجاد مقاله جدید</h2>
            <Input
              label="عنوان"
              name="title"
              type="text"
              handelChange={handelChangeArticle}
            />
            <Input
              label="تاریخ"
              name="date"
              type="text"
              handelChange={handelChangeArticle}
            />
            <Input
              label="مدت زمان مطالعه"
              name="readingTime"
              type="text"
              handelChange={handelChangeArticle}
            />
            <Input
              label="نویسنده"
              name="athor"
              type="text"
              handelChange={handelChangeArticle}
            />
            <Input
              label="آدرس تصویر"
              name="imageUrl"
              type="text"
              handelChange={handelChangeArticle}
            />
            <Textarea label="متن" handelChange={handelChangeArticleMessage} />
            <div>
              <button onClick={handelNewArticle}>ایجاد یک مقاله جدید</button>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default CreateArticle;
