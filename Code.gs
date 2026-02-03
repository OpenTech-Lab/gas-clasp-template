function myFunction() {
  Logger.log('Hello, World! This is a sample Apps Script function.');
  return 'Sample output';
}

// Function to set up a time-driven trigger (run this once to schedule myFunction)
function createTrigger() {
  ScriptApp.newTrigger('myFunction')
    .timeBased()
    .everyHours(1)  // Runs every hour; change to everyMinutes(30), everyDays(1), etc.
    .create();
}