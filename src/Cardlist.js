import Card from './Card'
import React from 'react';

const Cardlist = ({robots}) => {
    const loopRobots = robots.map((user,i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <div>
            {loopRobots}
        </div>
    )
}

export default Cardlist;