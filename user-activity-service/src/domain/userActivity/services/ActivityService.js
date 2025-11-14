class ActivityService {
  static clean(log) {
    return {
      userId: log.userId,
      eventType: log.eventType,
      logLevel: log.logLevel || 'info',       
      timestamp: log.timestamp ? new Date(log.timestamp) : new Date(),
      details: log.details || {}
    };
  }
}

module.exports = ActivityService;
