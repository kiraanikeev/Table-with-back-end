import React from "react";
import "./Table.css";

function Table({ numbersPosts, currentPosts }) {
  return (
    <section className="table">
      <table>
        <thead>
          <tr>
            <th className="data">Дата</th>
            <th className="name">Название</th>
            <th className="amount">Количество</th>
            <th className="distance">Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {!numbersPosts ? (
            <tr>
              <td className="emptiness">Записи отсутствуют</td>
            </tr>
          ) : (
            currentPosts.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.Дата}</td>
                  <td>{item.Название}</td>
                  <td>{item.Количество}</td>
                  <td>{item.Расстояние}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
