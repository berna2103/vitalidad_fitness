import React from "react";

export default function IngredientTable(props) {
  const ingredients = props.ingredients;

  const columns = ["Ingredient", "Protein", "Carbs", "Fat", "Calories"];
  const totalValues = { Protein: 0, Carbs: 0, Fat: 0, Calories: 0 };

  if (!Array.isArray(ingredients)) {
    return <p>No ingredients data available.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ingredients.map((item, index) => {
            const { ingredient, protein, carbs, fat, calories } = item;
            const proteinValue = parseFloat(protein) || 0;
            const carbsValue = parseFloat(carbs) || 0;
            const fatValue = parseFloat(fat) || 0;
            const caloriesValue = parseFloat(calories) || 0;

            totalValues.Protein += proteinValue;
            totalValues.Carbs += carbsValue;
            totalValues.Fat += fatValue;
            totalValues.Calories += caloriesValue;

            return (
              <tr key={index}>
                <td className="text-capitalize">{ingredient}</td>
                <td className="text-capitalize">{protein}</td>
                <td className="text-capitalize">{carbs}</td>
                <td className="text-capitalize">{fat}</td>
                <td className="text-capitalize">{calories}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            {columns.slice(1).map((column) => (
              <td key={column}>{totalValues[column].toFixed(2)}</td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
