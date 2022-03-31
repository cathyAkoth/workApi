const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  image: {
    type : String,

  },
  firstName: {
      type: String,
    
  },
  lastName: {
      type: String,
  },
  age: {
      type: Number,
  },
  dob: {
      type: Date,
  },
  numberOfKids: {
      type: Number,
  },
  nationality: {
      type: String,
  },
  countryOfResidence: {
      type: String,
  },
  district: {
      type : String,
  },
  religion: {
      type : String,
  },
  educationLevel: {
      type : String,
  },
  email: {
      type : String,
  },
  phoneNumber: {
      type : String,
  },
  whatsAppNo : {
      type : String,
  },
  passport : {
      type : String,
  },
  workExperience: {
      type : String,
  },
  availabilty: {
      type : String,
  },
  description : {
      type :String,
  },
  
  fil : {
      type: String,
  },
  position: {
      type: String,
  },
  price:{
    type: Number,
  },

  jobLocation: {
      type : String,
  },
  availability: {
      type : String,
  },
  video: {
      type: String,
  },
  nationalId: {
      type: String
  },
  dayOff: {
      type: String
  },
  availabilty: {
    type : String,
  },
  accommodation: {
        type: String,
    },
    languages: {
        type: String
    },
    mainSkills: {
        type: String
    },
    cookingSkills: {
        type: String,
    },
    personality: {
        type: String,
    },
    references: {
        type: String
    },

  createdAt: {
    type: Date,
    default: Date.now()
}
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;