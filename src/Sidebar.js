import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
	SidebarHeader,
	SidebarFooter,
	SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart, FaGem } from "react-icons/fa";
import React, { Component } from "react";

class Sidebar extends Component {
	state = {
		collapseID: "",
	};

	toggleCollapse = (collapseID) => () => {
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : "",
		}));
	};

	render() {
		return (
			<div class="sidebar">
				<ProSidebar>
					<SidebarHeader>
						{/**
						 *  You can add a header for the sidebar ex: logo
						 */}
					</SidebarHeader>
					<SidebarContent>
						{
							/**
							 *  You can add the content of the sidebar ex: menu, profile details, ...
							 */
							<Menu iconShape="square">
								<MenuItem icon={<FaGem />}>Dashboard</MenuItem>
								<SubMenu title="Components" icon={<FaHeart />}>
									<MenuItem>Component 1</MenuItem>
									<MenuItem>Component 2</MenuItem>
								</SubMenu>
							</Menu>
						}
					</SidebarContent>
					<SidebarFooter>
						{/**
						 *  You can add a footer for the sidebar ex: copyright
						 */}
					</SidebarFooter>
				</ProSidebar>
			</div>
		);
	}
}

export default Sidebar;
