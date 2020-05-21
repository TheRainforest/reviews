import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Reviews from "./components/Reviews.jsx";
import style from "./dist/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    const id = new URLSearchParams(document.location.search.substring(1)).get('id') || 1;
    $.ajax({
      method: 'GET',
      url: `/api/allreviews/${id}`
    })
      .done(reviews => {
        this.setState({
          reviews
        });
      });
  }

  render() {
    return (
      <div>
        <div className={style.topDivider}></div>
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("reviewsapp") || document.createElement("div") // <----- the OR is for testing purposes
);

// for testing purposes
export default App;
