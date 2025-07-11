import Banner from './Banner';
import DailyRecommend from './DailyRecommend';
import Review from './Review';
import Promotion from './Promotion';

const Home = () => {
    return (
        <div>
            <Banner/>
            <DailyRecommend/>
            <Promotion/>
            <Review/>
        </div>
    );
};

export default Home;