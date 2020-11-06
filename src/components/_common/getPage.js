import React, { useState, useEffect } from "react";
import axios from "axios";
import {GlobalContext} from "../Context/globalProvider"
import { useContext } from "react";

const Page = ({ pageId }) => {
  const {setLoading} = useContext(GlobalContext)
  const [page, setPage] = useState({});
  const url = `http://127.0.0.1:8000/pages/${pageId}`;
  useEffect(() => {
    axios
    .get(url)
    .then((res) => {
    setPage(res.data);
    setLoading(false);
    })
    }, []);

  return (
    <div className="page">
      <div key={page._id}>{page.page_content}</div>
    </div>
  );
};

export default Page;