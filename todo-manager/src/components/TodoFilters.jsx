function TodoFilters({ filter, onFilterChange, activeCount }) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            paddingBottom: '15px',
            borderBottom: '2px solid #eee'
        }}>
            <span style={{ fontSize: '14px', color: '#666' }}>
                📝 Осталось задач: <strong>{activeCount}</strong>
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
                {['all', 'active', 'completed'].map((filterType) => (
                    <button
                        key={filterType}
                        onClick={() => onFilterChange(filterType)}
                        style={{
                            padding: '6px 16px',
                            background: filter === filterType ? '#007bff' : '#f0f0f0',
                            color: filter === filterType ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            transition: 'all 0.2s'
                        }}
                    >
                        {filterType === 'all' && 'Все'}
                        {filterType === 'active' && 'Активные'}
                        {filterType === 'completed' && 'Выполненные'}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default TodoFilters;