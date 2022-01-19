import React from 'react'

function Table({ numbersPosts, currentPosts}) {
    return (

   <section className="table">
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
          {!numbersPosts 
          ? <tr><td>Записи отсутствуют</td></tr>
          : currentPosts.map(item=>{
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
    )
}

export default Table
