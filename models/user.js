// Sera el esquema del usuario

const mongoose = require("mongoose");
const Scheme = mongoose.Scheme;

const UserSchema = {
  name: {type: String,require: true},
  username: { type: String, require: true, trim: true, unique: true },
  email: { type: String, require: true, trim: true, unique: true },
  avatar: { type: String, trim: true },
  website: { type: String, trim: true },
  description: { type: String, trim: true },
  password: { type: String, require: true, trim: true },
  createAt: { type: Date, default: Date.now() },
};

module.exports = mongoose.model('User',UserSchema);