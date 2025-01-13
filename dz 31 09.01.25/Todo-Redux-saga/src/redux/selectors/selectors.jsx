export const selectTodos = (state) => state.todo.todos || [];

export const selectTodosCounter = (state) => state.todo.todos.length;

export const isLoading = (state) => state.todo.loading;
