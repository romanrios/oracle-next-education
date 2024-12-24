import React, { useState, useEffect } from 'react';
import './Team.css';
import { Card } from '../Card/Card';

export const Team = (props) => {
    const [members, setMembers] = useState(props.members);

    useEffect(() => {
        members.forEach((member, index) => {
            const img = new Image();
            img.src = member.img;
            img.onerror = () => {
                const updatedMembers = [...members];
                updatedMembers[index].img = './img/profile.jpeg';
                setMembers(updatedMembers);
            };
        });
    }, []);

    return <section className='Team' style={{ backgroundColor: props.colorSecondary }}>
        <h2 style={{ borderColor: props.colorPrimary }}>{props.title}</h2>
        <div className='Team_cards_container'>
            {members.map((member, index) => (
                <Card key={index} name={member.name} charge={member.charge} img={member.img} color={props.colorPrimary} />
            ))}
        </div>
    </section>
}