import "../App.css";
import Paper from "@mui/material/Paper";

const Pics = () => {
  return (
    <div
      id="services"
      style={{
        backgroundColor: "#f9f9f9",
        paddingTop: "1rem",
        marginTop: "1rem",
      }}
    >
      <center>
        <h1 style={{ marginBottom: "2rem" }}>Services</h1>
      </center>
      <div className="pics">
        <Paper
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "20rem",
            height: "20rem",
            backgroundImage: `url(https://paulieworld.s3.amazonaws.com/rsz_exterior_softwash.jpg)`,
          }}
          elevation={3}
          square
        >
          <div className="titleOne">
            <h3>Exterior</h3>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "20rem",
            height: "20rem",
            backgroundImage: `url(https://paulieworld.s3.amazonaws.com/19693838_1930053937208231_617535828254068083_o.jpg)`,
            backgroundSize: "cover",
          }}
          elevation={3}
          square
        >
          <div className="titleTwo">
            <h3>Decks</h3>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "20rem",
            height: "20rem",
            backgroundImage:
              "url(https://paulieworld.s3.amazonaws.com/rsz_concrete.jpg)",
          }}
          elevation={3}
          square
        >
          <div className="titleThree">
            <h3>Concrete</h3>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "20rem",
            height: "20rem",
            backgroundImage:
              "url(https://paulieworld.s3.amazonaws.com/rsz_pavers.jpg)",
          }}
          elevation={3}
          square
        >
          <div className="titleFour">
            <h3>Pavers</h3>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "20rem",
            height: "20rem",
            backgroundImage:
              "url(https://paulieworld.s3.amazonaws.com/rsz_1gutter.jpg)",
            backgroundSize: "cover",
          }}
          elevation={3}
          square
        >
          <div className="titleFive">
            <h3>Gutters</h3>
          </div>
        </Paper>
        <Paper
          style={{
            display: "flex",
            alignItems: "flex-end",
            width: "20rem",
            height: "20rem",
            backgroundImage:
              "url(https://paulieworld.s3.amazonaws.com/rsz_fence.jpg)",
          }}
          elevation={3}
          square
        >
          <div className="titleSix">
            <h3>Fences</h3>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Pics;
