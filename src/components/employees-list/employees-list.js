import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {
    const employees = data.map(item => {
        const {id, ...propsItem} = item;
        return <EmployeesListItem
            key={id}
            {...propsItem}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.dataset.toggle)}/>
    })

    return (
        <ul className="app-list list-group">
            {employees}
        </ul>
    )
}

export default EmployeesList;