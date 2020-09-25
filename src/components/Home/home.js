import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const home_URI = "http://127.0.0.1:8000/pages/5f6dba05dfbda66e00c44831";
  useEffect(() => {
    axios
      .get(home_URI)
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
  return <div className="home">{data.page_content}</div>;
};

export default Home;
