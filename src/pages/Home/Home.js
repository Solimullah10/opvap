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
            <marquee style={{ width: '73%' }} className="text-success"> <h2 className='mt-5'>আপনি যে পণ্যটির দাম যাচাই করতে চাচ্ছেন সেই পণ্যটির বিস্তারিত দেখুন </h2></marquee>
            <Row xs={1} md={3} className="w-75 my-4 mx-auto g-4">
                {
                    fruits.map(fruit => <HomeFruit
                        key={fruit._id}
                        fruit={fruit}
                    ></HomeFruit>)
                }
            </Row>
        </div>
    );
};

export default Home;