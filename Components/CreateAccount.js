import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CreateAccountForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

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
    firebase
      .firestore()
      .collection('users')
      .add(user)
      .then((docRef) => {
        console.log('User account created with ID:', docRef.id);
        // Optionally perform additional actions after successful account creation
      })
      .catch((error) => {
        console.error('Error creating user account:', error);
        // Handle the error appropriately
      });

    // Reset the form fields
    setName('');
    setEmail('');
    setGender('');
    setAge('');
    setWeight('');
    setHeight('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <label>
        Gender:
        <input
          type="text"
          value={gender}
          onChange={(event) => setGender(event.target.value)}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
      </label>
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
          required
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
          required
        />
      </label>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
