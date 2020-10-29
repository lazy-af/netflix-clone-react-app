// @flow
import React, { Component } from 'react';
import  Link  from 'next/link';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';


class ProfileDropdown extends Component {
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
        const profilePic = this.props.profilePic || null;

        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                <DropdownToggle
                    data-toggle="dropdown"
                    tag="button"
                    className="nav-link dropdown-toggle nav-user arrow-none mr-0"
                    onClick={this.toggleDropdown}
                    aria-expanded={this.state.dropdownOpen}>
                    <span className="account-user-avatar">
                        <img src={profilePic} className="rounded-circle" alt="user" />
                    </span>
                    <span>
                        <span className="account-user-name">{this.props.username}</span>
                        <span className="account-position">{this.props.userTitle}</span>
                    </span>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                    <div onClick={this.toggleDropdown}>
                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow m-0">Welcome !</h6>
                        </div>
                        {this.props.menuItems.map((item, i) => {
                            return (
                                <a
                                    href={item.redirectTo}
                                    className="dropdown-item notify-item"
                                    key={i + '-profile-menu'}>
                                    <>
                                    <i className={`${item.icon} mr-1`}></i>
                                    <span>{item.label}</span>
                                        </>
                                </a>
                            );
                        })}
                    </div>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default ProfileDropdown;
