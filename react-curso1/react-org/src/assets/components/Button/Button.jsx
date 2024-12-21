import './Button.css';

export const Button = ({ onClick, children }) => {
    return (
        <button className="Button" onClick={onClick}>
            {children}
        </button>
    );
};