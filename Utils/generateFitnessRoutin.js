// Define an array of workouts based on gender
const maleWorkouts = ['Push-ups', 'Pull-ups', 'Squats', 'Bench Press', 'Deadlifts'];
const femaleWorkouts = ['Push-ups', 'Lunges', 'Bicep Curls', 'Hip Thrusts', 'Plank'];

export function generateFitnessRoutine(gender, workoutsPerWeek, availableTime) {
  // Calculate the number of workouts per day
  const workoutsPerDay = Math.ceil(workoutsPerWeek / 7);

  // Calculate the time per workout
  const timePerWorkout = Math.floor(availableTime / workoutsPerDay);

  // Select the appropriate workout array based on gender
  const workouts = gender === 'male' ? maleWorkouts : femaleWorkouts;

  // Randomly select workouts for each day of the week
  const weeklyRoutine = [];
  for (let i = 0; i < 7; i++) {
    const dayWorkouts = [];
    for (let j = 0; j < workoutsPerDay; j++) {
      const randomIndex = Math.floor(Math.random() * workouts.length);
      dayWorkouts.push(workouts[randomIndex]);
    }
    weeklyRoutine.push(dayWorkouts);
  }

  return {
    workoutsPerDay,
    timePerWorkout,
    routine: weeklyRoutine
  };
}

// Example usage
const gender = 'male';
const workoutsPerWeek = 4;
const availableTime = 180; // in minutes

const generatedRoutine = generateFitnessRoutine(gender, workoutsPerWeek, availableTime);
console.log(generatedRoutine);
