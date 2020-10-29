import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = ({ pageId }) => {
  const [page, setPage] = useState({});
  const page_URI = `http://127.0.0.1:8000/pages/${pageId}`;
  useEffect(() => {
    axios
      .get(page_URI)
      .then((res) => {
        if (res.status === 200) {
          if (Object.entries(page).length === 0) {
            setPage(res.data);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  return (
    <div className="page">
      <div key={page._id}>{page.page_content}</div>
    </div>
  );
};

export default Page;