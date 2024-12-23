import './Team.css';
import { Card } from '../Card/Card';

export const Team = () => {
    return <section className='Team'>
        <h2>Programación</h2>
        <div className='Team_cards_container'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </section>
}