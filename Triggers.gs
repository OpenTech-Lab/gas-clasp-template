// Functions for managing time-driven triggers

// Function to set up a time-driven trigger (run this once to schedule myFunction)
function createTrigger() {
  ScriptApp.newTrigger('myFunction')
    .timeBased()
    .everyHours(1)  // Runs every hour; change to everyMinutes(30), everyDays(1), etc.
    .create();
}

// Function to delete the time-driven trigger for myFunction
function deleteTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() == 'myFunction') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
}