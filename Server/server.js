const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb+srv://suraj:saymyname07@cluster0.ydykgfu.mongodb.net/newdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  username: String,
  password: String,
});

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"]
  },
  price: {
    type: Number,
    required: [true, "Enter the Product Price "],
    maxLength: [8, "Price cannot exceed 8 characters"]
  },
  rating: {
    type: Number,
    default: 0
  },
  images: [{
    url: {
      type: String,
      required: true
    }
  }],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter the Product stock"],
    maxLength: [4, "Stock cannot exceed 9999"],
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', redirectTo: '/login' });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    res.redirect('/home');

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/home', (req, res) => {
  res.send('Welcome to the home page!');
});

app.post('/createProduct', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/products', async (req, res) => {
  try {
    let query = {};

    if (req.query.category) {
      query.category = req.query.category;
    }

    if (req.query.minPrice && req.query.maxPrice) {
      query.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
    }

    const products = await Product.find(query);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});