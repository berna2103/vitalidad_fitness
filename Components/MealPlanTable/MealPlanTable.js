import React from 'react';

const MealPlanTable = ({ data }) => {
  const calculateSubtotal = (macro, alimentos) => {
    return alimentos.reduce((total, food) => total + food[macro], 0);
  };

  const calculateTotal = (macro) => {
    return data.reduce((total, day) => total + calculateSubtotal(macro, day.alimentos), 0);
  };

  const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

  return (
    <div>
      {data.map((day, index) => (
        <div className='table-responsive' key={index}>
          <h2 className='display-6'>{days[index]}</h2>
          <table className='table '>
            <thead>
              <tr>
                <th>Comida</th>
                <th>Alimento</th>
                <th>Porción</th>
                <th>Proteínas (gr)</th>
                <th>Carbohidratos (gr)</th>
                <th>Grasas (gr)</th>
                <th>Calorías</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td className='bg-light' colSpan={7} style={{ textAlign: 'left', fontWeight: 'bold' }}>
                {day.comida}
              </td>
            </tr>
              {day.alimentos.map((food, foodIndex) => (
                <tr key={foodIndex}>
                  <td>{}</td>
                  <td>{food.nombre}</td>
                  <td>{food.porcion}</td>
                  <td>{food.proteinas}</td>
                  <td>{food.carbohidratos}</td>
                  <td>{food.grasas}</td>
                  <td>{food.calorias}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} style={{ textAlign: 'right', fontWeight: 'bold' }}>
                  Total
                </td>
                <td>{calculateSubtotal('proteinas', day.alimentos)}</td>
                <td>{calculateSubtotal('carbohidratos', day.alimentos)}</td>
                <td>{calculateSubtotal('grasas', day.alimentos)}</td>
                <td>{calculateSubtotal('calorias', day.alimentos)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default MealPlanTable;
