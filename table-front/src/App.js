import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Preloader from './components/Preloader/Preloader';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8080/')
    .then(respons=>{
      setData(respons.data)
      setNewData(respons.data)})
        .catch((err) => {
        console.log(`Не удалось получить данные пользователя ${err}`);
      });
    }, []);

  const [data, setData] = useState('')
  const [newData, setNewData] = useState('')
  const [filterColumn, setFilterColumn] = useState('')
  const [filterOption, setFilterOption] = useState('')
  const [filterInput, setFilterInput] = useState('')

  
const handleFilter = ()=>{
 console.log('newData 1', newData)
let filter = data.filter(item=> {
  switch (filterColumn) {
    case "Название":
      if(filterOption == "Определенное значение") 
        return item.Название == filterInput
        else if(filterOption == "Включает в себя") 
        return item.Название.includes(filterInput)
    break;
    case "Расстояние":
      if(filterOption == "Определенное значение") 
        return item.Расстояние == filterInput
        else if(filterOption == "Меньше") 
        return item.Расстояние < filterInput
          else if(filterOption == "Больше") 
         return item.Расстояние > filterInput
    break;
    case "Количество":
      if(filterOption == "Определенное значение") 
            return item.Количество == filterInput
        else if(filterOption == "Меньше")  
              return item.Количество < filterInput
          else if(filterOption == "Больше") 
         return item.Количество > filterInput
     break;
     }})
     setNewData(filter)
    };

    
    console.log('newData 2', newData)
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
    {newData 
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
          {newData.map(item=>{
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
