const express = require('express');
const { createQuizResult,getAllQuizResultsByUserId } = require('../controllers/quizController');

const router = express.Router();

router.post('/quiz-results', createQuizResult);
router.get('/quiz-results/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const quizResults = await getAllQuizResultsByUserId(userId);
      if (quizResults.length === 0) {
        return res.status(404).json({ message: 'No quiz results found for this user.' });
      }
      res.status(200).json(quizResults);
    } catch (error) {
      console.error('Error fetching quiz results:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  });
  

module.exports = router;
