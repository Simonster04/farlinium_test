import React from 'react';
import './App.css';
import coronaImage from './images/image.png';
import Chart from './components/Chart';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {

    render() {
        return (
            <>
                <div className="img">
                    <img className="image" src={coronaImage} alt="COVID-19" />
                </div>
                <div className="container">
                    <Chart
                        chart="doubleBarChart"
                        statistic="total_restaurants" statistic2="less_than_30_reviews"
                        label="Total of restaurants per brand" label2="Restaurants with less than 30 reviews"
                    />
                    <p><b>McDonald's</b> has 28 restaurants in Washington, DC. It's the third brand in terms of number of restaurants, behind <b>Starbucks</b> and <b>Subway</b>. It's also the second in terms of restaurants with less than 30 reviews, behind <b>Dunkin</b>.</p>
                    <Chart
                        chart="bubbleChart"
                        statistic="total_restaurants" statistic2="less_than_30_reviews"
                        label="Total of restaurants per brand" label2="Restaurants with less than 30 reviews"
                        type="bubble"
                    />
                    <p>In relative terms, the rate of <b>McDonald's</b> restaurants with less than 30 reviews is 46.43%, which puts the brand below average.</p>
                    <Chart chart="barChart" statistic="total_reviews" label="Total reviews" />
                    <p>894 is the total reviews <b>McDonald's</b> restaurants have received. That means, between 31 and 32 per restaurant on average. <b>Chipotle Mexican Grill</b> receives about 64 per restaurant.</p>
                    <Chart chart="barChart" statistic="average_rating" label="Average rating" type="bubble" />
                    <p>Average rating for <b>McDonald's</b> is the second lowest, behind <b>Taco Bell</b>. The difference between <b>McDonald's</b> and the brand with the best rating (<b>Wendy's</b>), is 1.6.</p>
                </div>
            </>
        )
    }
}

export default App;