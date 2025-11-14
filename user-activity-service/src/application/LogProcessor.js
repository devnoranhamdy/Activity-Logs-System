const ActivityService = require('../domain/userActivity/services/ActivityService');
const UserActivityLog = require('../domain/userActivity/models/UserActivityLog');

class LogProcessor {
  static async process(logData) {
    // تنظيف ومعالجة البيانات
    const cleaned = ActivityService.clean(logData);
    // حفظ في DB
    return await UserActivityLog.create(cleaned);
  }
}

module.exports = LogProcessor;
