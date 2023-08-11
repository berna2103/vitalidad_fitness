const { onCall } = require("firebase-functions/v2/https");

exports.calculateBMI = onCall((request) => {
    const {weight, height} = request.data.text

    const imc = weight / (height * height);

       // Define the BMI ranges
       const underweightRange = { min: 0, max: 18.5 };
       const normalRange = { min: 18.5, max: 24.9 };
       const overweightRange = { min: 25, max: 29.9 };

       let categoria, message;
       if (imc < underweightRange.max) {
           categoria = "Bajo peso";
           message = "Tu IMC está por debajo del rango normal.";
       } else if (imc >= underweightRange.max && imc <= normalRange.max) {
           categoria = "Peso normal";
           message = "Tu IMC está dentro del rango normal.";
       } else if (imc >= overweightRange.min && imc <= overweightRange.max) {
           categoria = "Sobrepeso";
           message = "Tu IMC está por encima del rango normal.";
       } else {
           categoria = "Obesidad";
           message = "Tu IMC está significativamente por encima del rango normal.";
       }

    return {
        BMI: `${imc.toFixed(2)}`,
        Category: `${categoria}`,
        Message: `${message}`
    }
})