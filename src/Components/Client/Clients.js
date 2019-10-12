import React, { Component } from 'react';


class Customers extends Component {


    render() {

        let clients = this.props.data
        console.log(clients)
        return (
            <div className="clientss">
                {clients.map(c => {
                    return <div className="customer" key={c._id}>
                    <span>
                        {c.name}
                        {c.email}
                        {c.sold}
                        {c.firstContact}
                        {c.owner}
                        {c.country}
                    </span>
                </div>
                })}
            </div>)


    }
}

export default Customers