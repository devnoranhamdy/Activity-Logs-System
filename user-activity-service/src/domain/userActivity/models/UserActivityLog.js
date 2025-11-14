const mongoose = require('mongoose');

const UserActivityLogSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  eventType: { type: String, required: true, enum: ['login', 'logout', 'view', 'click'], index: true },
  logLevel: { type: String, required: true, enum: ['info', 'warning', 'error'], default: 'info', index: true },
  timestamp: { type: Date, default: Date.now, index: true },
  details: { type: Object }  
});

module.exports = mongoose.model('UserActivityLog', UserActivityLogSchema);
