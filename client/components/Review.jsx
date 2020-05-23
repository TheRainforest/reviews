import React from "react";
import style from "../dist/style.css";

function getRandomTime(min, max) {
  return Math.random() * (max - min) + min;
}

var arr = [
  `${style.amazonStars} ${style.oneStar}`,
  `${style.amazonStars} ${style.oneStar}`,
  `${style.amazonStars} ${style.twoStars}`,
  `${style.amazonStars} ${style.twoStars}`,
  `${style.amazonStars} ${style.threeStars}`,
  `${style.amazonStars} ${style.threeStars}`,
  `${style.amazonStars} ${style.fourStars}`,
  `${style.amazonStars} ${style.fourStars}`,
  `${style.amazonStars} ${style.fourStars}`,
  `${style.amazonStars} ${style.fourStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
  `${style.amazonStars} ${style.fiveStars}`,
];

var avatars = [
  `${style.avatar} ${style.avatar1}`,
  `${style.avatar} ${style.avatar0}`,
  `${style.avatar} ${style.avatar2}`,
  `${style.avatar} ${style.avatar3}`,
  `${style.avatar} ${style.avatar4}`,
  `${style.avatar} ${style.avatar5}`,
  `${style.avatar} ${style.avatar6}`,
  `${style.avatar} ${style.avatar7}`,
  `${style.avatar} ${style.avatar8}`,
  `${style.avatar} ${style.avatar9}`,
  `${style.avatar} ${style.avatar10}`,
  `${style.avatar} ${style.avatar11}`,
  `${style.avatar} ${style.avatar12}`,
  `${style.avatar} ${style.avatar13}`,
  `${style.avatar} ${style.avatar14}`,
  `${style.avatar} ${style.avatar15}`,
];

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: "false",
      clicked: `${style.helpfulButton}`,
    };
  }

  changeClass() {
    this.setState({ clicked: `${style.helpfulClicked}`, boolean: "true" });
  }

  click() {
    if (this.state.boolean === "false") {
      this.setState({ clicked: `${style.sendingFeedback}` });
      var thisBind = this;
      setTimeout(function() {
        thisBind.changeClass();
      }, getRandomTime(50, 350));
    }
  }

  getStars() {
    if (this.props.stars < 2) {
      return "1.0";
    }
    if (this.props.stars > 1 && this.props.stars < 4) {
      return "2.0";
    }
    if (this.props.stars > 3 && this.props.stars < 6) {
      return "3.0";
    }
    if (this.props.stars > 5 && this.props.stars < 10) {
      return "4.0";
    }
    if (this.props.stars > 9) {
      return "5.0";
    }
  }

  render(props) {
    return (
      <div>
        <div id={style.reviewsContainer}>
          <button className={avatars[this.props.avatar]}></button>
          <span className={style.reviewName}>{this.props.name}</span>
          <div>
            <button className={arr[this.props.stars]}>
              <div className={style.tooltip}>
                {this.getStars()} out of 5 stars
              </div>
            </button>
            <span className={style.reviewTitle}>{this.props.title}</span>
          </div>
          <div className={style.reviewDate}>Reviewed in {this.props.country} on {this.props.date}</div>
          <div className={style.verified}>Verified Purchase</div>
          <div id={style.reviewBody}>{this.props.reviewBody}</div>
          <div id={style.foundthishelpful}>
            {this.props.foundThisHelpful} people found this helpful
          </div>
          <button
            onClick={this.click.bind(this)}
            className={this.state.clicked}
          >
            Helpful
          </button>{" "}
          <span className={style.divider}></span>{" "}
          <span className={style.comment}>Comment</span>
          <span className={style.divider}></span>
          <span className={style.reportAbuse}>Report abuse</span>
        </div>
      </div>
    );
  }
}

export default Review;
