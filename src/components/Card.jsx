import { Link } from 'react-router-dom';
import './css/card.css';

const Card = ({ name, likes, removeCard, addLikes, removeLikes }) => {
    return (
        <div className="card">
            <button className="remove-btn" onClick={removeCard}>
                <span className="material-symbols-outlined">cancel</span>
            </button>
            <h2>{name}</h2>
            <img src={`https://source.unsplash.com/400x400/?${name}`} alt={name} />
            <div className="likes-container">
                <button onClick={addLikes}>
                    <span className="material-symbols-outlined">heart_plus</span>
                </button>
                <p>{likes}</p>
                <button onClick={removeLikes}>
                    <span className="material-symbols-outlined">heart_minus</span>
                </button>
            </div>
            <Link to={name}>See more</Link>
        </div>
    );
};

export default Card;
