const home_URI = `http://127.0.0.1:8000/pages/home`;
const filteredtLanguage = data.filter(el=> el.language === lang)
const correctLanguage = filteredtLanguage.map(el=><div key={el._id}>{el.page_content}</div>)
useEffect(() => {
axios
  .get(home_URI)
  .then((res) => {
    if (res.status === 200) {
      if (Object.entries(data).length === 0) {
        setData(res.data)
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
}, [data]);