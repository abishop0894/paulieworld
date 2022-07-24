import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";
const Footer = () => {
  return (
    <div
      className="footer"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <p3> © 2022, PaulieWorld Powerwashing</p3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5rem",
          color: "gray",
          marginTop: ".5rem",
          marginBottom: ".5rem",
        }}
      >
        <Link
          href="https://www.facebook.com/PaulieWorldpowerwashingllc/"
          style={{ color: "gray" }}
        >
          <FacebookIcon
            style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
          ></FacebookIcon>
        </Link>
        <Link
          href="https://instagram.com/paulieworldpowerwashing?igshid=NWRhNmQxMjQ="
          style={{ color: "gray" }}
        >
          <InstagramIcon
            style={{ height: "2.5rem", width: "2.5rem", cursor: "pointer" }}
          ></InstagramIcon>
        </Link>
      </div>
      <p>Web Design + Development by SA Media</p>
    </div>
  );
};

export default Footer;
