import "../App.css";
import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { gsap } from "gsap";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const Reviews = () => {
  const [reviewOne, setReviewOne] = React.useState("");
  const [reviewTwo, setReviewTwo] = React.useState("");
  const [reviewThree, setReviewThree] = React.useState("");
  const [reviewFour, setReviewFour] = React.useState("");
  const [errHide, setErrHide] = React.useState(false);
  let randomSet;
  let conversion;

  randomSet = new Set();
  for (let i = 0; i <= 5; i++) {
    randomSet.add(Math.floor(Math.random() * 5));
  }
  conversion = Array.from(randomSet).slice(0, 5);
  console.log(conversion);

  useEffect(() => {
    async function time() {
      await fetch(
        "https://paulieworld.herokuapp.com/882BB38C3D1F25C5778CAE71346A667F261EEC124488A186F5509F"
      )
        .then((res) => res.json())
        .then((data) => {
          setReviewOne({
            name: data.result.reviews[conversion[0]].author_name,
            rating: data.result.reviews[conversion[0]].rating,
            text: data.result.reviews[conversion[0]].text,
          });
          setReviewTwo({
            name: data.result.reviews[conversion[1]].author_name,
            rating: data.result.reviews[conversion[1]].rating,
            text: data.result.reviews[conversion[1]].text,
          });
          setReviewThree({
            name: data.result.reviews[conversion[2]].author_name,
            rating: data.result.reviews[conversion[2]].rating,
            text: data.result.reviews[conversion[2]].text,
          });
          setReviewFour({
            name: data.result.reviews[conversion[3]].author_name,
            rating: data.result.reviews[conversion[3]].rating,
            text: data.result.reviews[conversion[3]].text,
          });
        });
    }
    time();
  }, []);
  let timeLine = gsap.timeline();

  useEffect(() => {
    timeLine.to(".first", { x: 75 });
    timeLine.to(".second", { x: -75 });
    timeLine.to(".third", { x: 75 });
    timeLine.to(".fourth", { x: -75 });
  }, [timeLine]);
  // Filter out
  if (conversion.length < 4) {
    setErrHide(true);
  }
  console.log(reviewFour.name);
  return (
    <div className="reviews" id="reviews">
      <div className="wrap">
        <center>
          <h1 style={{ marginBottom: ".5rem" }}>Reviews</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "center",
              marginBottom: "3rem",
            }}
          >
            <h3 style={{ color: "gray" }}>from</h3>
            <img
              src="https://img.icons8.com/color/40/google-logo.png"
              alt=""
            ></img>
          </div>
        </center>
        <Paper className="first" elevation={4}>
          <h4>{reviewOne.name}</h4>
          <Typography component="legend"></Typography>

          <Rating name="read-only" value={5} readOnly />

          <h2>{reviewOne.text}</h2>
        </Paper>

        <Paper className="second" elevation={4}>
          <div>
            <h4>{reviewTwo.name}</h4>
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={5} readOnly />
          </div>
          <h2>{reviewTwo.text}</h2>
        </Paper>

        <Paper className="third" elevation={4}>
          <h4>{reviewThree.name}</h4>
          <Typography component="legend"></Typography>
          <Rating name="read-only" value={5} readOnly />
          <h2>{reviewThree.text}</h2>
        </Paper>

        <Paper className="fourth" elevation={4} hidden={errHide}>
          <h4>{reviewFour.name}</h4>
          <Typography component="legend"></Typography>
          <Rating name="read-only" value={5} readOnly />
          <h2>{reviewFour.text}</h2>
        </Paper>
      </div>
    </div>
  );
};

export default Reviews;
