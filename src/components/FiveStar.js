import React from "react";
import { Rating } from "react-native-ratings";

function ratingCompleted(rating) {
  console.log("Rating is: " + rating);
}

function FiveStar() {
  return (
    <Rating defaultRating={4} showRating onFinishRating={ratingCompleted} />
  );
}

export default FiveStar;
