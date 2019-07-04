import React from 'react'
import './../../styles/components/sidebar.css'
import './../../public/fonts/fontawesome-free-5.8.2-web/css/all.css'




export default class Sidebar extends React.Component {
    render() {
        return (
			<div className="sidebar">
				<div className="user">
					<i class="fa-border fas fa-user" />
					<span>Aryan Sharma</span>
				</div>
			</div>
		);
    }

}