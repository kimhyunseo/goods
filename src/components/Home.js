import Banner from './Banner';
import DailyRecord from './DailyRecord';
import Review from './Review';
import Promotion from './Promotion';

const Home = () => {
    return (
        <div>
            <Banner/>
            <DailyRecord/>
            <Promotion/>
            <Review/>
        </div>
    );
};

export default Home;