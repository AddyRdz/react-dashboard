import logo from './logo.svg';
import './App.css';
import Review from './components/reviews';
import AverageRating from './components/averageRating';
import SentimentAnalysis from './components/sentimentAnalysis';
import WebsiteVisitors from './components/websiteVisitors';
import Sidebar from './components/sidebar';

const reviewData = [
  {
      title: 'Reviews',
      number: 1281,
  }
]

const averageRatingData = [
  {
    title: 'Average Rating',
    number: 4.6,
  }
]

const sentimentAnalysisData = [
  {
    title: 'Sentiment Analysis',
    number: ['960','122','321'],
  }
]

const websiteVisitorsData = [
  {
    title: 'Website Visitors',
    number: 821,
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="container">
        <Sidebar />
        <div className="reviewSection">
        {reviewData.map((reviews)=>{
          return(
            <Review
              title={reviews.title}
              number={reviews.number}
              />
            )
         })}
         </div>
         <div className="averageRatingSection">
         {averageRatingData.map((averageRating)=>{
           return(
             <AverageRating
             title={averageRating.title}
             number={averageRating.number}
             />
           )
         })}
         </div>
         <div className="sentimentAnalysisSection">
         {sentimentAnalysisData.map((sentimentAnalysis)=>{
          return(
            <SentimentAnalysis
            title={sentimentAnalysis.title}
            number={sentimentAnalysis.number}
            />
          )
         })}
         </div>
         <div className="websiteVisitorsSection">
         {websiteVisitorsData.map((websiteVisitors)=>{
           return(
             <WebsiteVisitors
             title={websiteVisitors.title}
             number={websiteVisitors.number}
             />
           )
         })}
         </div>
        </section> 
      </header>
    </div>
    
  );
}

export default App;
