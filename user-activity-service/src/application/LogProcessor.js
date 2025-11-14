const ActivityService = require('../domain/userActivity/services/ActivityService');
const UserActivityLog = require('../domain/userActivity/models/UserActivityLog');

class LogProcessor {
  static async process(logData) {
    const cleaned = ActivityService.clean(logData);
    return await UserActivityLog.create(cleaned);
  }
}

module.exports = LogProcessor;
