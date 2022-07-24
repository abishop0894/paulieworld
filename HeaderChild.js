import "../App.css";
import { useEffect, useState } from "react";


const HeaderChild = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i < 1000; i++) {
        counter < 999 ? setCounter(() => counter + 1) : console.log("done");
        if (counter === 999) {
          setCounter(() => counter + 1 + "+");
        }
      }
    }, 12);
  }, [counter]);

  return (
    <div className="headerChild">
      <h1 style={{ marginBottom: "1rem" }}>About Us</h1>
      <p2 style={{ fontSize: "20px" }}>
        Proudly serving the Central Jersey area for nearly a decade, PaulieWorld
        Powerwashing provides pressure washing services for every surface. We
        hold ourselves to the highest standards, set by Paulie himself when he
        started this business in 2015. Our pride is in the work we do and the
        smiles on our customers faces when the job is done.
      </p2>
      <h2 style={{ fontSize: "50px", marginTop: "2.5rem" }}>{counter}</h2>
      <h4 style={{ color: "gray" }}>Satisfied Customers</h4>
    </div>
  );
};

export default HeaderChild;
