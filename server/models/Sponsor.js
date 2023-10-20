const { Schema, model } = require('mongoose');

const sponsorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  donation: {
    type: Number,
    required: true
  },
  contractSignedAt: {
    type: Date,
    required: true
  },
  contractExpiration: {
    type: Date,
    required: true
  }
});

const Sponsor = model('Sponsor', sponsorSchema);

module.exports = Sponsor;
