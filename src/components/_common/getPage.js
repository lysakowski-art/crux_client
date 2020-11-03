import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = ({ pageId }) => {
  // const [page, setPage] = useState({});
  const url = `http://127.0.0.1:8000/pages/${pageId}`;
  // useEffect(() => {
  //   axios
  //     .get(page_URI)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         if (Object.entries(page).length === 0) {
  //           setPage(res.data);
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [page]);

  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      let unmounted = false;
      let source = axios.CancelToken.source();
      axios.get(url, {
          cancelToken: source.token
      })
          .then(a => {
              if (!unmounted) {
                  setData(a.data);
                  setLoading(false);
              }
          }).catch(function (e) {
          if (!unmounted) {
              setError(true);
              setErrorMessage(e.message);
              setLoading(false);
              if (axios.isCancel(e)) {
                  console.log(`request cancelled:${e.message}`);
              } else {
                  console.log("another error happened:" + e.message);
              }
          }
      });
      return function () {
          unmounted = true;
          source.cancel("Cancelling in cleanup");
      };
  }, [url]);



  return (
    <div className="page">
      <div key={data._id}>{data.page_content}</div>
    </div>
  );
};

export default Page;