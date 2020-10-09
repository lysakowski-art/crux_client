import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = ({ uri, lang }) => {
  const [data, setData] = useState([]);
  const page_URI = `http://127.0.0.1:8000/pages/${uri}`;
  const filteredtLanguage = data.filter((el) => el.language === lang);
  const correctLanguage = filteredtLanguage.map((el) => (
    <div key={el._id}>{el.page_content}</div>
  ));
  useEffect(() => {
    axios
      .get(page_URI)
      .then((res) => {
        if (res.status === 200) {
          if (Object.entries(data).length === 0) {
            setData(res.data);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data]);
  return <div className="page">{correctLanguage}</div>;
};

export default Page;