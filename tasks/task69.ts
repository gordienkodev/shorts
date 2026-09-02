



/**
 * Task 2: Given multiple Todo interface declarations below, explain what happens when they are present in the same scope.
 * Discuss how TypeScript treats them and fill in the myTodo object to satisfy the merged Todo interface requirements.
 */

interface Todo {
  title: string;
  dueDate: Date;
}

interface Todo {
  description: string;
  completed: boolean;
}

interface Todo {
  priority: 'high' | 'medium' | 'low';
  completed: string;
}

const myTodo: Todo = {};