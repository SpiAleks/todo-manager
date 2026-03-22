function TodoItem({ task, onToggle, onDelete }) {
    return (
        <li style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 8px',
            borderBottom: '1px solid #eee'
        }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                style={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer'
                }}
            />
            <span style={{
                flex: 1,
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#999' : '#333',
                fontSize: '16px'
            }}>
                {task.text}
            </span>
            <button
                onClick={() => onDelete(task.id)}
                style={{
                    background: '#ff4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    fontSize: '14px'
                }}
            >
                Удалить
            </button>
        </li>
    );
}

export default TodoItem;

