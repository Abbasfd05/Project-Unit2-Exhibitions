const mongoose = require('mongoose');

// create the schema

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
// initial the model

const User = mongoose.model('User', userSchema);

// export it
module.exports = User;
