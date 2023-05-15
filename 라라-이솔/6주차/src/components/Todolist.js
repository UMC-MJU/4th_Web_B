const todoList = todos.map((todo) => {
  <TodoItem {...todo} onToggle={onToggle} onRemove={onRemove} key={todo.id} />;
});
