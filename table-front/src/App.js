import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Preloader from "./components/Preloader/Preloader";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Table/Table";
import Filter from "./components/Filter/Filter";
function App() {
  //Получаем данные
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((respons) => {
        setData(respons.data)
        setNewData(respons.data)
      })
      .catch((err) => {
        console.log(`Не удалось получить данные пользователя ${err}`)
      })
  }, [])

  const [data, setData] = useState("")
  const [newData, setNewData] = useState("")
  const [numbersPosts, setnumbersPosts] = useState("100")
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  //Получаем стр пагинации
  const lastPost = currentPage * postsPerPage
  const firstPost = lastPost - postsPerPage
  const currentPosts = newData.slice(firstPost, lastPost)

  //Меняем стр
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <h1 className="title">Таблица</h1>
      <Filter
        data={data}
        setNewData={setNewData}
        setnumbersPosts={setnumbersPosts}
        setCurrentPage={setCurrentPage}
      />
      {newData ? (
        <Table numbersPosts={numbersPosts} currentPosts={currentPosts} />
      ) : (
        <Preloader />
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={numbersPosts}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
