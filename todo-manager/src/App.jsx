import { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoFilters from './components/TodoFilters';
import TodoItem from './components/TodoItem';

function App() {
    // Состояние для списка задач (загружаем из localStorage при старте)
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    });

    // Состояние для текущего фильтра
    const [filter, setFilter] = useState('all');

    // Сохраняем задачи в localStorage при каждом изменении
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Добавление новой задачи
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    // Переключение статуса задачи (выполнена/не выполнена)
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Удаление задачи
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Фильтрация задач в зависимости от выбранного фильтра
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true; // 'all'
    });

    // Подсчет активных (невыполненных) задач
    const activeCount = todos.filter(todo => !todo.completed).length;

    return (
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '30px 20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#333',
                marginBottom: '30px',
                fontSize: '32px'
            }}>
                ✅ Менеджер задач
            </h1>

            <AddTodoForm onAdd={addTodo} />

            <TodoFilters
                filter={filter}
                onFilterChange={setFilter}
                activeCount={activeCount}
            />

            {/* Список задач */}
            {filteredTodos.length === 0 ? (
                <p style={{
                    textAlign: 'center',
                    color: '#999',
                    padding: '40px',
                    fontSize: '16px'
                }}>
                    {filter === 'all' && '📭 Задач пока нет. Добавьте первую задачу!'}
                    {filter === 'active' && '🎉 Нет активных задач!'}
                    {filter === 'completed' && '📋 Нет выполненных задач'}
                </p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {filteredTodos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            task={todo}
                            onToggle={toggleTodo}
                            onDelete={deleteTodo}
                        />
                    ))}
                </ul>
            )}

            {/* Кнопка очистки всех задач */}
            {todos.length > 0 && (
                <button
                    onClick={() => setTodos([])}
                    style={{
                        marginTop: '25px',
                        padding: '10px 20px',
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        width: '100%',
                        fontSize: '14px',
                        fontWeight: 'bold'
                    }}
                >
                    🗑️ Очистить всё
                </button>
            )}
        </div>
    );
}

export default App;