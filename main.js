const winston = require('winston');
const LogstashTransport = require("winston-logstash/lib/winston-logstash-latest");


// Configure the winston logger to use the Logstash transport
const logger = winston.createLogger({
  transports: [
    new LogstashTransport({
      host: 'localhost',
      port: 50000,
      prefix: 'my_app_name'
    }),
  ],
});

// Define the log message structure with fields
const logMessage = {
  message: 'This is a sample log message',
  level: 'info', // You can set different log levels (e.g., error, warn)
  timestamp: new Date().toISOString(),
  source: 'nodejs_app'
};

// Log 10 messages with the defined structure
for (let i = 0; i < 10; i++) {
  logger.log(logMessage.level, logMessage);
}

console.log('10 log messages sent to Logstash');
