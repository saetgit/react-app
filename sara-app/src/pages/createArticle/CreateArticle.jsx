import { useState } from "react";
import Input from "../../components/Input/Input";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
function CreateArticle() {
  const  [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    athor: "",
  });
  const handelChangeArticle = (e) => {
    setArticle((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  };
  console.log(article);
  return (
    <>
      <Navbar />
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
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
