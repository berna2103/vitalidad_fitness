

const { onCall } = require("firebase-functions/v2/https");

exports.calculateMacros = onCall((request) => {
    const { weight, height, age, gender, activityLevel, goal } =
      request.data.text;
    // Validate the input data
    if (!weight || !height || !age || !gender || !activityLevel || !goal) {
      return "Paramteros missing!";
    }
  
    // Constants for macro calculation (adjust according to your needs)
    const proteinRatio = 0.25;
    const carbRatio = 0.45;
    const fatRatio = 0.3;
  
    let bmr;
    let protein;
    let carbs;
    let fat;
    let BMR;
  
    // Calculate Basal Metabolic Rate (BMR) based on gender
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      return "Invalid gender.";
    }
  
    // Adjust BMR based on activity level
    switch (activityLevel) {
      case "sedentary":
        bmr *= 1.2;
        break;
      case "light":
        bmr *= 1.375;
        break;
      case "moderate":
        bmr *= 1.55;
        break;
      case "veryActive":
        bmr *= 1.725;
        break;
      default:
        response.status(400).json({ error: "Invalid activity level." });
        return;
    }
  
    // Adjust BMR based on goal
    switch (goal) {
      case "loseWeight":
        bmr -= 500;
        break;
      case "maintain":
        break;
      case "gainWeight":
        bmr += 500;
        break;
      default:
        response.status(400).json({ error: "Invalid goal." });
        return;
    }
  
    // Calculate macros based on adjusted BMR
    const proteinCals = Math.round(bmr * proteinRatio);
    const carbCals = Math.round(bmr * carbRatio);
    const fatCals = Math.round(bmr * fatRatio);
    protein = Math.round((bmr * proteinRatio) / 4);
    carbs = Math.round((bmr * carbRatio) / 4);
    fat = Math.round((bmr * fatRatio) / 9);
    BMR = bmr;
  
    return {
      protein: `${protein}`,
      proteinCals: `${proteinCals}`,
      carbCals: `${carbCals}`,
      fatCals: `${fatCals}`,
      carbs: `${carbs}`,
      fat: `${fat}`,
      bmr: `${BMR}`,
    };
  });