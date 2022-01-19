import React, {useState} from 'react'
import './Filter.css'

function Filter({ data, setNewData, setnumbersPosts, setCurrentPage}) {
// Стейты сортировок
    const [filterColumn, setFilterColumn] = useState('')
    const [filterOption, setFilterOption] = useState('')
    const [filterInput, setFilterInput] = useState('')
//Функция фильтрации
    const handleFilter = ()=>{
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
             setnumbersPosts(filter.length)
             setFilterInput("")
             setFilterColumn("")
             setFilterOption("")
             setCurrentPage("1")
            };
//Валидация
  const[inputDirty, setInputDerty] = useState(false)
  const[error, setError] = useState("")
// Инпут
const inputHandler =(e)=>{
    setFilterInput(e.target.value)
    const reNumber = /^([0-9]*)$/
  const reLetters = /^[a-zA-Zа-яА-Я]+$/ui
  if((filterColumn != "Название")
  ? !reNumber.test(String(e.target.value))
  : !reLetters.test(String(e.target.value))){
    setError("Некорректное значение")
    setInputDerty(false)
  }else{
    setError("")
    setInputDerty(true)
  }
  }
  
    return (
        <section className="sorting">
        <select className="filter" onChange={(e)=>setFilterColumn(e.target.value)} value={filterColumn}>
              <option value="" disabled>Выберите колонку</option>
              <option value="Название">Название</option>
              <option value="Количество">Количество</option>
              <option value="Расстояние">Расстояние</option>
            </select>
            <select className="filter" onChange={(e)=>setFilterOption(e.target.value)} value={filterOption}>
            <option value="" disabled>Вид фильтрации</option>
              <option className="visible"
               value="Определенное значение">Определенное значение</option>
              <option className={ filterColumn == "Название" ? "visible" : "invisible"}
               value="Включает в себя">Включает в себя</option>
              <option className={ filterColumn == "Название" ? "invisible" : "visible"}
               value="Больше">Больше</option>
              <option className={ filterColumn == "Название" ? "invisible" : "visible"}
               value="Меньше">Меньше</option>
            </select>
            <div  className='block'>
            {error && <div className='error'>{error}</div>}
            <input className='input' value={filterInput} disabled={!filterColumn || !filterOption} placeholder='введите значение'
            onChange={(e)=>inputHandler(e)}/>
            <button className='button' onClick={handleFilter} disabled={!filterColumn || !filterOption || !filterInput || !inputDirty} >Показать</button>
            </div>
        </section>
    )
}

export default Filter
