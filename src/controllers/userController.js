const User = require('../models/user');
const QuizResult =require('../models/QuizResult')

const getUserIdByName = async (req, res) => {
  try {
    const { name } = req.query;

    // Find the user by name
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with the user's ID
    res.status(200).json({ userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user ID', error: error.message });
  }
};





const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const quizResults = await QuizResult.find({ userId: req.params.id });

    const noOfQuizzes = quizResults.length;
    const lastQuiz =   new Date(quizResults[0].createdAt).toLocaleDateString();
  

    res.status(200).json({ user, noOfQuizzes, lastQuiz });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports={getUserIdByName,getUserById};
