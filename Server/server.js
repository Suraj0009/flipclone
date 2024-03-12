// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import cors module

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MongoDB connection

// MongoDB connection
mongoose.connect('mongodb+srv://sr80371:%40Saymyname07@cluster0.njxs9ip.mongodb.net/<New>', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User model
const User = mongoose.model('User', {
  username: String,
  password: String,
});


const validateRegistrationData = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  // Add more validation rules if needed
  next();
};

const validateLoginData = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  next();
};

// Route for user registration
app.post('/register', validateRegistrationData, async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Send response indicating successful registration
    res.status(201).json({ message: 'User registered successfully', redirectTo: '/login' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



// Route for user login
app.post('/login',validateLoginData, async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // If password is incorrect, return error
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

   // If username and password are correct, login successful
    // Redirect user to the home page
    res.redirect('/home'); // Change '/home' to the desired endpoint for the home page
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for the home page
app.get('/home', (req, res) => {
  // Serve the home page
  res.send('Welcome to the home page!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
