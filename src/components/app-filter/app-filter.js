import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {label: 'Все сотрудники', name: 'all'},
        {label: 'На повышение', name: 'rise'},
        {label: 'З/П больше 1000$', name: 'moreThan1000'},
    ];

    const buttons = buttonsData.map(({label, name}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;