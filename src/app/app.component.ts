import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: [{ content: string; isChecked: boolean; }] = [
    {
      content: 'Example todo',
      isChecked: false
    },
    {
      content: 'Fold laundry',
      isChecked: true
    },
    {
      content: 'Wash dirty dishes',
      isChecked: true
    },
    {
      content: 'Pick up parcel',
      isChecked: false
    },
    {
      content: 'Call mom',
      isChecked: true
    },
    {
      content: 'Make dinner',
      isChecked: false
    }
];

  todoContent = '';

  displayTodos = this.todos; // Defaults to showing all todos

  tabs = [
    {
      title: 'All',
      isActive: true
    },
    {
      title: 'Checked',
      isActive: false
    },
    {
      title: 'Unchecked',
      isActive: false
    }
  ];

  onTabClick(clickedIndex) {
    this.activateTab(clickedIndex);
  }

  onAddTodo(index) {
    if (this.todoContent.trim() !== '') {
      this.todos.push({
        content: this.todoContent.trim(),
        isChecked: false
      });

      this.resetTodoContent();

      // Activate "All" tab if not selected
      if (this.tabs[0].isActive === false) {
        this.activateTab(0);
      }
    }
  }

  // checkedTodos = this.todos.filter(todo => todo.isChecked === true);
  // uncheckedTodos = this.todos.filter(todo => todo.isChecked === false);

  get checkedTodos() {
    return this.todos.filter(todo => todo.isChecked === true);
  }

  get uncheckedTodos() {
    return this.todos.filter(todo => todo.isChecked === false);
  }

  activateTab(nextActiveIndex) {
    const prevActiveIndex = this.tabs.findIndex(tab => tab.isActive === true);

    // Reset to false
    this.tabs[prevActiveIndex].isActive = false;

    // Activate clicked tab
    this.tabs[nextActiveIndex].isActive = true;

    switch (nextActiveIndex) {
      case 0:
        this.displayTodos = this.todos;
        break;

      case 1:
        this.displayTodos = this.checkedTodos;
        break;

      case 2:
        this.displayTodos = this.uncheckedTodos;
        break;

      default:
        this.displayTodos = this.todos;
    }
  }

  resetTodoContent() {
    this.todoContent = '';
  }

  todoClicked(index) {
    this.todos[index].isChecked = !this.todos[index].isChecked;
  }
}
