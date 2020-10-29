// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';

class DatepickerInput extends Component {
    constructor(props) {
        super(props);

        this.onDateValueChange = this.onDateValueChange.bind(this);
    }

    onDateValueChange = () => {
        console.log('date value changed');
    };
    render() {
        return (
            <input
                type="text"
                className="form-control date"
                id="dash-daterange"
                onClick={this.props.onClick}
                value={this.props.value}
                onChange={this.onDateValueChange}
            />
        );
    }
}

class DatepickerInputWithAddon extends Component {
    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    className="form-control form-control-light"
                    id="dash-daterange"
                    onClick={this.props.onClick}
                    value={this.props.value}
                    readOnly
                />

                <div className="input-group-append">
                    <span className="input-group-text bg-primary border-primary text-white">
                        <i className="mdi mdi-calendar-range font-13"></i>
                    </span>
                </div>
            </div>
        );
    }
}

class HyperDatepicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        };
        this.handleDateSelectChange = this.handleDateSelectChange.bind(this);
    }

    handleDateSelectChange = (date) => {
        this.setState({
            startDate: date,
        });
    };

    render() {
        const input = (this.props.hideAddon || false) === true ? <DatepickerInput /> : <DatepickerInputWithAddon />;

        return (
            <DatePicker
                {...this.props}
                customInput={input}
                selected={this.state.startDate}
                onChange={this.handleDateSelectChange}
            />
        );
    }
}

export default HyperDatepicker;
