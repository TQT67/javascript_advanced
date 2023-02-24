class ToDo {
  date: Date;
  works: string[];

  constructor(date: Date, works: string[]) {
    this.date = date;
    this.works = works;
  }
}

class ToDoList {
  todos: ToDo[];

  constructor() {
    this.todos = [];
  }

  addToDo(todo: ToDo) {
    if (this.todos.length === 0) {
      this.todos.push(todo);
    } else {
      let flag = true;
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].date.getTime() === todo.date.getTime()) {
          console.log("Trùng ngày");
          flag = false;
          break;
        }
      }
      if (flag) {
        this.todos.push(todo);
      }
    }
  }

  printToDoList() {
    console.log("To Do List :");
    for (let i = 0; i < this.todos.length; i++) {
      console.log(`Date: ${this.todos[i].date}, Works: ${this.todos[i].works}`);
    }
  }
}

let todoList = new ToDoList();
let todo1 = new ToDo(new Date(2023, 2, 23), ["Chơi game", "Ngủ", "Đá bóng"]);
let todo2 = new ToDo(new Date(2023, 2, 24), ["Ăn cơm", "Xem phim"]);
let todo3 = new ToDo(new Date(2023, 2, 24), ["Đi tập thể dục", "Học"]);

todoList.addToDo(todo1);
todoList.addToDo(todo2);
todoList.addToDo(todo3);
todoList.printToDoList();
console.log(todoList);
