import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Preloader from './components/Preloader/Preloader';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8080/')
    .then(respons=>setData(respons.data))
        .catch((err) => {
        console.log(`Не удалось получить данные пользователя ${err}`);
      });
  }, []);



  const [data, setData] = useState('')
  const [filrerColumn, setFilterColumn] = useState('')
  const [filrerOption, setFilterOption] = useState('')
  const [filrerInput, setFilterInput] = useState('')
  const [filrer, setFilter] = useState([])
  


const handleFilter = ()=>{


//  data.filter(item=>{
// let itemValue;

//     if (filrerColumn === 'Название') {
//       itemValue = item.Название
//     } else if (filrerColumn === 'Расстояние') {
//       itemValue = item.Расстояние
//     } else if (filrerColumn === 'Количество') {
//       itemValue = item.Количество
//     }
//     return(itemValue == filrerInput)
    
//   });

let filrer2=[]
data.filter(item=> {
  switch (filrerColumn) {
    case "Название":
      if(filrerOption == "Определенное значение" && item.Название == filrerInput)
        // console.log(item)
        setData(item)
        else
        if(filrerOption == "Включает в себя" && item.Название.includes(filrerInput))
        // console.log(item)
        setData(item)
    break;
    case "Расстояние":
      if(filrerOption == "Определенное значение" && item.Расстояние == filrerInput)
        // console.log(item)
        setData(item)
        else
        if(filrerOption == "Меньше" && item.Расстояние < filrerInput)
         // console.log(item)
         setData(item)
          else
          if(filrerOption == "Больше" && item.Расстояние > filrerInput)
               // console.log(item)
               setData(item)
    break;
    case "Количество":
      if(filrerOption == "Определенное значение" && item.Количество == filrerInput)
            // console.log(item)
            setFilter(item)
        else
        if(filrerOption == "Меньше" && item.Количество < filrerInput)
              // console.log(item)
              setFilter(item)
          else
          if(filrerOption == "Больше" && item.Количество > filrerInput)
                  // console.log(item)
                 setFilter(item)
                // filrer2 = [item]
     break;
     }})
    console.log(filrer2)
    console.log(filrer)
    };
  
    

  return (
    <div className="App">
    <h1 className="title">Таблица</h1>
    <section className="sorting">
    <select className="filter" name="filter_1" onChange={(e)=>setFilterColumn(e.target.value)}>
          <option value="Название">Название</option>
          <option value="Количество">Количество</option>
          <option value="Расстояние">Расстояние</option>
        </select>
        <select className="filter" name="filter_2" onChange={(e)=>setFilterOption(e.target.value)}>
          <option value="Определенное значение">Определенное значение</option>
          <option value="Включает в себя">Включает в себя</option>
          <option value="Больше">Больше</option>
          <option value="Меньше">Меньше</option>
        </select>
        <input className='input' placeholder='введите значение'onChange={(e)=>setFilterInput(e.target.value)}/>
        <button className='button' onClick={handleFilter} >Показать</button>
    </section>
    {data  
    ?<section className="table">
      <table>
        <thead>
          <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Количество</th>
          <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item=>{
              return( 
              <tr key={item._id}>
              <td>{item.Дата}</td>
              <td>{item.Название}</td>
              <td>{item.Количество}</td>
              <td>{item.Расстояние}</td>
            </tr>)
          })}
          </tbody>
      </table>
    </section>
    : <Preloader/>}
     
    </div>
  );
}

export default App;
