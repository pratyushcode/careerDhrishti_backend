const QuizResult = require('../models/QuizResult');

const createQuizResult = async (req, res) => {
  try {
    const { userId, numericalAptitude, analyticalAptitude, verbalAptitude, interpersonalAptitude } = req.body;

    const newQuizResult = new QuizResult({
      userId,
      numericalAptitude,
      analyticalAptitude,
      verbalAptitude,
      interpersonalAptitude
    });

    const savedQuizResult = await newQuizResult.save();
    res.status(201).json(savedQuizResult);
    return newQuizResult;

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllQuizResultsByUserId = async (userId) => {
    try {
      const quizResults = await QuizResult.find({ userId });
      return quizResults;
    } catch (error) {
      throw new Error('Error fetching quiz results');
    }
  };

  module.exports={createQuizResult,getAllQuizResultsByUserId}
