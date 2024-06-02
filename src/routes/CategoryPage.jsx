import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import '../components/css/category.css';

const CategoryPage = ({ animals, birds, insects, fishes, addLikes, removeCard, removeLikes }) => {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState('');

    // Get the appropriate data based on the category
    const data = { animals, birds, insects, fishes }[category] || [];

    // Filter data based on the search term
    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="category-page">
            <input
                type="text"
                placeholder={`Search ${category}`}
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="cards-container">
                {filteredData.map(item => (
                    <Card
                        key={item.name}
                        name={item.name}
                        likes={item.likes}
                        addLikes={() => addLikes(item.name, category, 'add')}
                        removeLikes={() => removeLikes(item.name, category, 'remove')}
                        removeCard={() => removeCard(item.name, category)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
