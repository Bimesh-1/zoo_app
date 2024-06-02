
import { useParams, useNavigate } from 'react-router-dom';

const SinglePage = ({ animals, birds, insects, fishes }) => {
    const { category, name } = useParams();
    const navigate = useNavigate();

    // Get the appropriate data based on the category
    const data = { animals, birds, insects, fishes }[category] || [];
    const item = data.find(item => item.name === name);

    return (
        <div>
            {item ? (
                <div>
                    <h2>{item.name}</h2>
                    <img src={`https://source.unsplash.com/600x600/?${item.name}`} alt={item.name} />
                    <p>Likes: {item.likes}</p>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            ) : (
                <p>Item not found</p>
            )}
        </div>
    );
};

export default SinglePage;
