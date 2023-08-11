// Assuming you have already initialized the Firebase app and imported the necessary libraries

// Function to create a user account and store data in Firestore
export function createUserAccount(name, email, gender, age, weight, height) {
    // Create the user object
    const user = {
      name,
      email,
      gender,
      age,
      weight,
      height,
    };
  
    // Add the user object to Firestore
    return firebase
      .firestore()
      .collection('users')
      .add(user)
      .then((docRef) => {
        console.log('User account created with ID:', docRef.id);
        return docRef.id; // Optionally return the document ID
      })
      .catch((error) => {
        console.error('Error creating user account:', error);
        throw error;
      });
  }
  
  // Example usage
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const gender = 'male';
  const age = 30;
  const weight = 75;
  const height = 180;
  
  createUserAccount(name, email, gender, age, weight, height)
    .then((userId) => {
      console.log('User account created successfully with ID:', userId);
      // Additional logic or actions after user account creation
    })
    .catch((error) => {
      console.error('Error creating user account:', error);
      // Handle the error appropriately
    });
  