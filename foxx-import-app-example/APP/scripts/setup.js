'use strict';

  var console = require("console"),
  Foxx = require('org/arangodb/foxx'),
  db = require("org/arangodb").db,
  jobQueue = Foxx.queues.create("test-queue", 1);

var registerPeriodicJob = function() {
      if(applicationContext.dependencies.foxxExportsExample === undefined)
          return;
      var allJobs = jobQueue.all({mount: applicationContext.mount, name: 'myJob'});
      console.log("Displaying all jobs in queue: %s", allJobs);
      for(var i=0 ; i<allJobs.length; i++){
          var jobId = allJobs[i];
          var abortStatus = jobQueue.get(jobId).abort();
          console.log("Job %s aborted", jobId);
          var deleteJobStatus = jobQueue.delete(jobId);
          console.log("Job %s deleted successfully? %s", jobId, deleteJobStatus);
      }
      allJobs = jobQueue.all({mount: applicationContext.mount, name: 'myJob'});
      if(allJobs.length === 0){
          console.log("Adding a job to the queue...");
         jobQueue.push({mount: applicationContext.mount, name: 'myJob'}, {}, {repeatTimes: Infinity, "repeatDelay": applicationContext.configuration.repeatDelay });
      }
  }

  registerPeriodicJob();