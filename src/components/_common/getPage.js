import React, { useState, useEffect } from "react";
import axios from "axios"
import ReactHtmlParser from "react-html-parser";

const Page = ({ pageId }) => {
  const [page, setPage] = useState({});
  const [loading, setLoading] = useState(true)
  const url = `http://127.0.0.1:8000/pages/${pageId}`;
  useEffect(()=>{
    const getData = async () => {
      if(loading){
        await axios 
        .get(url)
        .then(res=>{

          setPage(res.data);
          setLoading(false);
        })
      }
      }
    getData()
  },[url, loading])

  return (
    <div className="page">
      <div key={page._id}>{ReactHtmlParser(page.pageContent)}</div>
    </div>
  );
};

export default Page;