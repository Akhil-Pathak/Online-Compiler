const mongoose = require("mongoose");

const JobSchema = mongoose.Schema({
  language: {
    type: String,
    required: true,
    enum: ["cpp", "py", "c", "js", "java"],
  },
  filepath: {
    type: String,
    required: true,
  },
  input: {
    type: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  executionTime: {
    type: Number,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "success", "error"],
  },
  output: {
    type: String,
  },
  probID: {
    type: mongoose.Types.ObjectId,
  },
});

// default export

const ProblemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [120, "too big name"],
  },
  statement: {
    type: String,
    required: true,
  },
  inputStructure: {
    type: String,
    required: true,
  },
  outputStructure: {
    type: String,
    required: true,
  },
  constraints: {
    description: {
      type: String,
      required: true,
    },
    timLim: {
      type: Number,
    },
    memLim: {
      type: Number,
    },
  },
  testCases: {
    type: [
      {
        input: {
          type: String,
          required: true,
        },
        output: {
          type: String,
          required: true,
        },
        _id: { id: false },
      },
    ],
    required: true,
  },
});

const jobs = mongoose.model("job", JobSchema);
const problems = mongoose.model("problem", ProblemSchema);

module.exports = { Job: jobs, Problem: problems };
