//business logic
function Task(entered, priority, notes) {
  this.enteredTask = entered;
  this.priorityTask = priority;
  this.notesTask = notes;
}

Task.prototype.fullTask = function () {
  return this.enteredTask + ", " + this.priorityTask + ", " + this.notesTask;
}

//user interface logic

$(document).ready(function(){
  $("form#new-task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
    var inputtedPriority = $("input#priority-level").val();
    var inputtedNotes = $("input#notes").val();

    var newTask = new Task(inputtedTask, inputtedPriority, inputtedNotes);

    $("#output-tasks").append("<li><span class ='completed'>" + newTask.fullTask() + "</span></li>");

    $(".completed").last().dblclick(function(){
      $(this).hide();
    });


  });
});
