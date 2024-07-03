const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    numericalAptitude: { type: Number, required: true },
    analyticalAptitude: { type: Number, required: true },
    verbalAptitude: { type: Number, required: true },
    interpersonalAptitude: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("QuizResult", quizResultSchema);
