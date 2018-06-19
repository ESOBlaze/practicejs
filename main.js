var todoList = {
    todos: [],
    addTodo: function(todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText){
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function(){
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true){
                completedTodos++;
            }  
        }
        if (completedTodos === totalTodos){
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    } 
};

var handlers = {
   toggleAll: function() {
       todoList.toggleAll();
       view.displayTodos();
   },
   addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
   },
   changeTodo: function(){
     var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
     var changeTodoTextInput = document.getElementById("changeTodoTextInput");
     todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value); 
     changeTodoPositionInput.valueAsNumber = "";
     changeTodoTextInput.value = "";
     view.displayTodos();
   },
   deleteTodo: function(){
    var deleteTodoInput = document.getElementById("deleteTodoInput");
    todoList.deleteTodo(deleteTodoInput.valueAsNumber);
    deleteTodoInput.value = "";
    view.displayTodos();
   },
   toggleCompleted: function() {
     var toggleCompletedInput = document.getElementById("toggleCompletedInput");
     todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
     toggleCompletedInput.value = ""; 
     view.displayTodos(); 
   }
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(X) " + todo.todoText;
            } else {
                todoTextWithCompletion = "() " + todo.todoText;
            }
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        };
    },
    createDeleteButton: function() {
        debugger;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete"; 
        deleteButton.className = "deleteButton";
        return deleteButton;
    }
};