import { Link } from 'react-router-dom';
import '../components/css/home.css';

const Home = () => {
    const categories = [
        { name: "Animals", path: "/animals" },
        { name: "Birds", path: "/birds" },
        { name: "Insects", path: "/insects" },
        { name: "Fishes", path: "/fishes" },
    ];

    return (
        <div className="categories">
            {categories.map((category) => (
                <Link
                    key={category.name}
                    to={category.path}
                    className="category-link"
                    style={{
                        backgroundImage: `url(https://source.unsplash.com/random/?${category.name.toLowerCase()})`

                    }}
                >
                    <div className="category-name">{category.name}</div>
                </Link>
            ))}
        </div>
    );
};

export default Home;
