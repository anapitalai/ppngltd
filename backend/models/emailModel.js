import mongoose from 'mongoose'


const emailSchema = mongoose.Schema(
  {

    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },

  },
  {
    timestamps: true,
  }
)

const Email = mongoose.model('Email', emailSchema)

export default Email
