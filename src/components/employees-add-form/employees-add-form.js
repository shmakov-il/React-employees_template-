import {Component} from "react";
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
        }
    }

    onChangeValue = (e) => {
        this.setState((state) => {
            if (e.target.name === 'name') {
                state[e.target.name] = e.target.value.replace(/[\d_=+/*]/g, '');
            } else {
                state[e.target.name] = e.target.value;
            }
            return state;
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length <= 3 || !this.state.salary) {
            return
        }
        this.setState({
            name: '',
            salary: '',
        })
        this.props.onSubmit(this.state);
    }

    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           value={name}
                           onChange={this.onChangeValue}
                           name="name"/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           value={salary}
                           onChange={this.onChangeValue}
                           name="salary"/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;