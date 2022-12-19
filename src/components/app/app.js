
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

const App = () => {

    const data = [
        {name: 'Alex C.', salary: 200, increase: false, id: 1},
        {name: 'John B.', salary: 900, increase: true, id: 2},
        {name: 'Ann W.', salary: 1600, increase: false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    );
}

export default App;