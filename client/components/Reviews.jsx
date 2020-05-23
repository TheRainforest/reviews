import React from "react";
import Review from "./Review.jsx";
import style from "../dist/style.css";

function getRatings(numReviews) {
  var num = JSON.stringify(numReviews * 143);
  var arr = num.split("");
  if (arr.length > 3) {
    arr.splice(1, 0, ",");
  }
  var string = arr.join("");
  return string;
}

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.toggleClassSeeMore = this.toggleClassSeeMore.bind(this);
    this.state = {
      active: false,
      active2: false,
      see: "See more",
    };
  }

  getAverageStars() {
    var arr = [];
    for (var i = 0; i < this.props.reviews.length; i++) {
      arr.push(this.props.reviews[i].stars);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 2) {
        arr[i] = 1;
      }
      if (arr[i] > 1 && arr[i] < 4) {
        arr[i] = 2;
      }
      if (arr[i] > 3 && arr[i] < 6) {
        arr[i] = 3;
      }
      if (arr[i] > 5 && arr[i] < 10) {
        arr[i] = 4;
      }
      if (arr[i] > 9) {
        arr[i] = 5;
      }
    }
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total = total + arr[i];
    }
    var rounded = Math.round((total / arr.length) * 10) / 10;
    return rounded;
  }

  findPercentageOfStars(num) {
    var arr = [];
    for (var i = 0; i < this.props.reviews.length; i++) {
      arr.push(this.props.reviews[i].stars);
    }
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 2) {
        arr[i] = 1;
      }
      if (arr[i] > 1 && arr[i] < 4) {
        arr[i] = 2;
      }
      if (arr[i] > 3 && arr[i] < 6) {
        arr[i] = 3;
      }
      if (arr[i] > 5 && arr[i] < 10) {
        arr[i] = 4;
      }
      if (arr[i] > 9) {
        arr[i] = 5;
      }
    }
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count++;
      }
    }
    var total = Math.ceil((count / arr.length) * 100);
    return total;
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }
  toggleClassSeeMore() {
    const currentState = this.state.active2;
    this.setState({ active2: !currentState });
    if (this.state.see === "See more") {
      this.setState({ see: "See less" });
    }
    if (this.state.see === "See less") {
      this.setState({ see: "See more" });
    }
  }

  getClassNames() {
    var arrOfPossibilities = [
      `${style.customerReviewsStars} ${style.fiveStarsBig}`,
      `${style.customerReviewsStars} ${style.fourToFive}`,
      `${style.customerReviewsStars} ${style.threeToFour}`,
      `${style.customerReviewsStars} ${style.twoStarsBig}`,
      `${style.customerReviewsStars} ${style.fourStarsBig}`,
    ];
    var avg = this.getAverageStars();
    if (Number(avg) > 4.8) {
      return arrOfPossibilities[0];
    }
    if (Number(avg) > 4.3) {
      return arrOfPossibilities[1];
    }
    if (Number(avg) > 3.9) {
      return arrOfPossibilities[4];
    }
    if (Number(avg) > 2.9) {
      return arrOfPossibilities[2];
    }
    if (Number(avg) > 1.9) {
      return arrOfPossibilities[3];
    }
  }

  render(props) {
    const styles5 = { width: `${this.findPercentageOfStars(5)}%` };
    const styles4 = { width: `${this.findPercentageOfStars(4)}%` };
    const styles3 = { width: `${this.findPercentageOfStars(3)}%` };
    const styles2 = { width: `${this.findPercentageOfStars(2)}%` };
    const styles1 = { width: `${this.findPercentageOfStars(1)}%` };
    return (
      <div>
        <div id={style.containertopleft}>
          <div id={style.customerReviews}>Customer reviews</div>
          <button className={this.getClassNames()}></button>
          <span className={style.nextToStarsText}>
            {this.getAverageStars()} out of 5
          </span>
          <div className={style.numberCustomerRatings}>
            {this.props.reviews.length} customer ratings
          </div>
          <table className={style.ratingsTable}>
            <tr>
              <td className={`${style.underline} ${style.leftOfBar}`}>
                5 star
              </td>
              <td className={style.meter}>
                <div className={style.tooltip2}>
                  5 stars represent {this.findPercentageOfStars(5)}% of rating
                </div>
                <span className={style.progress} style={styles5}></span>
              </td>
              <td className={`${style.underline} ${style.rightOfBar}`}>
                {this.findPercentageOfStars(5)}%
              </td>
            </tr>
            <tr>
              <td className={`${style.underline} ${style.leftOfBar}`}>
                4 star
              </td>
              <td className={style.meter}>
                <div className={style.tooltip2}>
                  4 stars represent {this.findPercentageOfStars(4)}% of rating
                </div>
                <span className={style.progress} style={styles4}></span>
              </td>
              <td className={`${style.underline} ${style.rightOfBar}`}>
                {this.findPercentageOfStars(4)}%
              </td>
            </tr>
            <tr>
              <td className={`${style.underline} ${style.leftOfBar}`}>
                3 star
              </td>
              <td className={style.meter}>
                <div className={style.tooltip2}>
                  3 stars represent {this.findPercentageOfStars(3)}% of rating
                </div>
                <span className={style.progress} style={styles3}></span>
              </td>
              <td className={`${style.underline} ${style.rightOfBar}`}>
                {this.findPercentageOfStars(3)}%
              </td>
            </tr>
            <tr>
              <td className={`${style.underline} ${style.leftOfBar}`}>
                2 star
              </td>
              <td className={style.meter}>
                <div className={style.tooltip2}>
                  2 stars represent {this.findPercentageOfStars(2)}% of rating
                </div>
                <span className={style.progress} style={styles2}></span>
              </td>
              <td className={`${style.underline} ${style.rightOfBar}`}>
                {this.findPercentageOfStars(2)}%
              </td>
            </tr>
            <tr>
              <td className={`${style.underline} ${style.leftOfBar}`}>
                1 star
              </td>
              <td className={style.meter}>
                <div className={style.tooltip2}>
                  1 stars represent {this.findPercentageOfStars(1)}% of rating
                </div>
                <span className={style.progress} style={styles1}></span>
              </td>
              <td className={`${style.underline} ${style.rightOfBar}`}>
                {this.findPercentageOfStars(1)}%
              </td>
            </tr>
          </table>
          <div onClick={this.toggleClass} className={style.calculateStars}>
            <button className={style.downArrow}></button>
            How do we calculate our star ratings?
          </div>
          <p
            className={`${
              this.state.active ? style.calculateExplain : style.null
            }`}
          >
            We calculate a product’s star ratings based <br></br>
            on a machine learned model instead of a raw <br></br>
            data average. The model takes into account <br></br>
            factors including the age of a rating, whether <br></br>
            the ratings are from verified purchasers, and <br></br>
            factors that establish reviewer trustworthiness. <br></br>
          </p>
          <span className={style.horizontalDivider}></span>{" "}
          <div className={style.byFeature}>By feature</div>
          <div className={style.featureDiv}>
            <span className={style.feature}>Feature</span>
            <button
              className={`${style.amazonStars} ${style.fourStars}`}
            ></button>
            <span className={style.afterStar}>4.1</span>
          </div>
          <div className={style.featureDiv}>
            <span className={style.feature}>Feature</span>
            <button
              className={`${style.amazonStars} ${style.threeStars} ${style.feature2}`}
            ></button>
            <span className={style.afterStar}>3.2</span>
          </div>
          <div className={style.featureDiv}>
            <span className={style.feature}>Feature</span>
            <button
              className={`${style.amazonStars} ${style.fourStars} ${style.feature3}`}
            ></button>
            <span className={style.afterStar}>3.9</span>
          </div>
          <div
            className={`${this.state.active2 ? style.featureDiv : style.null}`}
          >
            <span className={style.feature}>Feature</span>
            <button
              className={`${style.amazonStars} ${style.fourStars} ${style.feature3}`}
            ></button>
            <span className={style.afterStar}>4.0</span>
          </div>
          <div
            onClick={this.toggleClassSeeMore}
            className={`${style.calculateStars} ${style.seeMore}`}
          >
            <button className={`${style.downArrow} ${style.arrow2}`}></button>
            {this.state.see}
          </div>
          <span className={style.horizontalDivider}></span>{" "}
          <div className={style.reviewThisProduct}>Review this product</div>
          <div className={style.shareThoughts}>
            Share your thoughts with other customers
          </div>
          <button className={style.btnWriteReview}>
            Write a customer review
          </button>
          <span className={style.horizontalDivider}></span>{" "}
        </div>
        <div>
          {this.props.reviews.map((review) => (
            <Review
              id={review.id}
              name={review.name}
              stars={review.stars}
              date={review.date}
              country={review.country}
              reviewBody={review.review}
              image={review.image}
              title={review.title}
              avatar={review.avatar}
              foundThisHelpful={review.foundThisHelpful}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Reviews;
