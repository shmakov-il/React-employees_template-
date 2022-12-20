import {Component} from "react";
import { v1 as uuidv1 } from 'uuid';

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex C.', salary: 200, increase: false, rise: true, id: 1},
                {name: 'John B.', salary: 900, increase: true, rise: false, id: 2},
                {name: 'Ann W.', salary: 1600, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = ({name, salary}) => {
        this.setState(({data}) => {
            const newItem = {
                name,
                salary,
                increase: false,
                rise: false,
                id: uuidv1()
            }
            return {
                data: [...data, newItem]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter});
    }

    searchEmp = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleEmp = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}/>

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>

                <EmployeesList
                    data={visibleEmp}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                    onSubmit={this.addItem}/>
            </div>
        );
    }
}

export default App;