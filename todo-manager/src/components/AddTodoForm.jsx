import { useState } from 'react';

function AddTodoForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{
            marginBottom: '25px',
            display: 'flex',
            gap: '10px'
        }}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить новую задачу..."
                style={{
                    flex: 1,
                    padding: '12px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: '1px solid #ddd',
                    outline: 'none'
                }}
            />
            <button
                type="submit"
                style={{
                    padding: '12px 24px',
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}
            >
                Добавить
            </button>
        </form>
    );
}

export default AddTodoForm;