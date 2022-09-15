import Banner from '../Banner/Banner';
import Row from 'react-bootstrap/Row';
import useFruits from '../../hooks/useFruits/useFruits';
import HomeFruit from './HomeFruit/HomeFruit';
import { Link } from 'react-router-dom';

const Home = () => {

    const [fruits, setFruits] = useFruits();

    return (
        <div>
            <Banner></Banner>
            <h2 className='mt-5'>Trending Fruits</h2>
            <Row xs={1} md={3} className="w-75 my-4 mx-auto g-4">
                {
                    fruits.map(fruit => <HomeFruit
                        key={fruit._id}
                        fruit={fruit}
                    ></HomeFruit>)
                }
            </Row>
            <div style={{ margin: '150px auto 40px auto' }} className='w-100'>
                <Link className='btn btn-primary fs-3 w-50' to="/fruits">Manage Fruits</Link>
            </div>

        </div>
    );
};

export default Home;