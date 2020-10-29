// @flow
import React, { Component } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';



class TopbarSearch extends Component {
    constructor(props) {
        super(props);

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    /*:: toggleDropdown: () => void */
    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        const resultItems = this.props.items || [];
        return (

            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} className="app-search d-none d-lg-block">
                <DropdownToggle tag='a' className='d-none'></DropdownToggle>
                <form className='position-relative'>
                    <div className="input-group">
                        <input className="form-control dropdown-toggle"
                            placeholder="Search..." id="top-search"
                            onClick={this.toggleDropdown} />
                        <span className="mdi mdi-magnify search-icon"></span>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </div>
                    <DropdownMenu right className="dropdown-menu-animated topbar-dropdown-menu dropdown-lg">
                        <div className="dropdown-header noti-title">
                            <h5 className="text-overflow mb-2">Found <span className="text-danger">{resultItems.length}</span> results</h5>
                        </div>

                        {resultItems.map((item, i) => {
                            return <a key={i}
                                href={item.redirectTo}
                                className={classNames("dropdown-item", "notify-item")}>
                                <>
                                <i className={classNames(item.icon, "font-16", "mr-1")}></i>
                                <span>{item.title}</span>
                                    </>
                            </a>
                        })}

                    </DropdownMenu>
                </form>
            </Dropdown>

        );
    }
}

export default TopbarSearch;
