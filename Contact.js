import "../App.css";
import * as React from "react";
import TextField from "@mui/material/TextField";

import TextareaAutosize from "@mui/material/TextareaAutosize";

import Button from "@mui/material/Button";
import { useForm } from "@formspree/react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Toast from "react-bootstrap/Toast";
import SendIcon from "@mui/icons-material/Send";
const Contact = () => {
  const [state, handleSubmit] = useForm("xlezkvaw");
  const [color, setColor] = React.useState("white");

  if (state.succeeded) {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
    return (
      <div className="thankYou" style={{ backgroundColor: "yellow" }}>
        <div className="cttwrap">
          <center>
            {" "}
            <h1 style={{ color: "black" }}>Inquiries</h1>
          </center>
          <center>
            <h3 className="ctext" style={{ marginBottom: "2rem" }}>
              Let's talk.
            </h3>
          </center>
          <div className="ctIcons">
            <div>
              <PhoneIphoneIcon />
              <p4>732-735-0838</p4>
            </div>
            <div>
              <EmailIcon />
              <p4> Paulieworldpowerwashing@gmail.com</p4>
            </div>
            <div>
              <LocationOnIcon />
              <p4>58 Stillwell Rd, Kendall Park, NJ 08824</p4>
            </div>
          </div>
          <hr style={{ height: "2px", color: "black" }}></hr>
        </div>
        <Toast className="toast">
          <Toast.Header closeButton={false}>PaulieWorld Team</Toast.Header>
          <Toast.Body>We'll be in touch. Thank you!</Toast.Body>
        </Toast>
      </div>
    );
  }
  return (
    <div
      className="contactWrap"
      id="contact"
      style={{ backgroundColor: "#FFF200", paddingTop: "1rem" }}
    >
      <div className="cttwrap">
        <center>
          <h1 style={{ color: "black" }}>Inquiries</h1>
        </center>
        <center>
          <h3 className="ctext" style={{ marginBottom: "2rem" }}>
            Let's talk.
          </h3>
        </center>
        <div className="ctIcons">
          <div>
            <PhoneIphoneIcon />
            <p4>732-735-0838</p4>
          </div>
          <div>
            <EmailIcon />
            <p4> Paulieworldpowerwashing@gmail.com</p4>
          </div>
          <div>
            <LocationOnIcon />
            <p4>Kendall Park, NJ 08824</p4>
          </div>
        </div>
        <hr style={{ height: "4px", color: "black" }}></hr>
      </div>
      <div
        className="contactForm"
        style={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "2rem",
          marginRight: "1rem",
          marginLeft: "1rem",
          backgroundColor: "white",
        }}
      >
        <form onSubmit={handleSubmit} method="POST">
          <TextField
            fullWidth
            label="Name"
            id="name"
            required
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            id="email"
            name="email"
            required
            style={{ marginTop: "2rem" }}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
          <TextField
            fullWidth
            label="Company (optional)"
            type="text"
            id="company"
            name="company"
            style={{ marginTop: "2rem" }}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            required
            id="Message"
            name="message"
            minRows={5}
            placeholder="Message"
            style={{
              marginTop: "2rem",
              width: "100%",
              border: "1px solid lightgray",
              borderRadius: "3px",
              maxHeight: "150px",
            }}
            InputLabelProps={{
              style: { color: "black" },
            }}
          />

          <Button
            variant="contained"
            style={{
              width: "10rem",
              height: "3rem",
              backgroundColor: "black",
              marginTop: "2rem",
              gap: "1rem",
            }}
            type="submit"
            disabled={state.submitting}
            endIcon={<SendIcon style={{ color: color }} />}
            onMouseEnter={() => setColor("#FFF200")}
            onMouseLeave={() => setColor("white")}
          >
            <p4 style={{ color: color }}>Send</p4>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
