import './MyOrg.css';

export const MyOrg = (props) => {

    return (<section className="MyOrg" >
        <div className='MyOrg_container'>
            <h2>Mi&nbsp;Organización</h2>
            <img src="./img/add_button.png" alt="Add" onClick={props.switchShowForm} />
        </div>
    </section>);
}