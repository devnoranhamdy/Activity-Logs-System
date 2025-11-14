const express = require('express');
const UserActivityLog = require('../models/UserActivityLog');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, eventType, userId } = req.query;
    const query = {};
    if (eventType) query.eventType = eventType;
    if (userId) query.userId = userId;

    const logs = await UserActivityLog.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ timestamp: -1 });

    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
