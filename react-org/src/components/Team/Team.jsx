import React, { useState, useEffect } from 'react';
import './Team.css';
import { Card } from '../Card/Card';
import hexToRgba from 'hex-to-rgba';

export const Team = (props) => {
    const [members, setMembers] = useState(props.members);

    useEffect(() => {
        setMembers(props.members);
    }, [props.members]);

    return <section className='Team' style={{ backgroundColor: hexToRgba(props.color, 0.2) }}>
        <input
            className='Team_input_color'
            type="color"
            value={props.color}
            onChange={(e) => props.changeColor(props.id, e.target.value)}
        />
        <h2 style={{ borderColor: props.color }}>{props.title}</h2>
        <div className='Team_cards_container'>
            {members.map((member) => (
                <Card
                    id={member.id}
                    key={member.id}
                    name={member.name}
                    charge={member.charge}
                    img={member.img}
                    color={props.color}
                    removeMember={props.removeMember}
                    likeMember={props.likeMember}
                    fav={member.fav}
                />
            ))}
        </div>
    </section>
}