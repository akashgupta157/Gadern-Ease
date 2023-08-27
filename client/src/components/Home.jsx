import "./Home.css";

export const Home = () => {
  const buttonprop = {
    marginLeft: "300px",
    marginTop: "100px",
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    borderRadius: "10px",
  };

  const highlight = {
    color: "#404040",
    fontSize: "15px",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="images1">
        <img
          src="newa.jpg"
          alt=""
          style={{ width: "100% ", height: "400px", objectFit: "cover" }}
        />
        <h3
          style={{
            paddingLeft: "20px",
            color: "#404040",
            fontSize: "15px",
            fontWeight: "bold",
            paddingTop: "10px",
          }}
        >
          GREEN LIFE
        </h3>
        <h6 style={{ paddingLeft: "20px" }}>
          Making lavender oil: Preserve the scent of the south
        </h6>
        <h4 style={{ paddingLeft: "20px" }}>
          Do you love lavender? With these simple instructions, you can
          transform these fragrant blossoms from your garden into aromatic
          lavender oil.
        </h4>
        <button className="buttonprop" style={{ margin: "20px 20px" }}>
          Learn more
        </button>
      </div>

      <div className="main1">
        <div className="div1">
          <div>
            <img src="1.jpg" alt="" style={{ borderRadius: "10px" }} />
          </div>
          <div style={{ padding: "40px" }}>
            <h3 style={highlight}>ORNAMENTAL GARDEN</h3>
            <h1>How to fertilize Hydrangeas</h1>
            <button className="buttonprop">Learn more</button>
          </div>
        </div>
        <div className="div1">
          <div>
            <img src="2.jpg" alt="" style={{ borderRadius: "10px" }} />
          </div>
          <div style={{ padding: "40px" }}>
            <h3>ORNAMENTAL GARDEN</h3>
            <h1>How to fertilize Hydrangeas</h1>
            <button className="buttonprop">Learn more</button>
          </div>
        </div>

        <div className="div1">
          <div>
            <img src="3.jpg" alt="" style={{ borderRadius: "10px" }} />
          </div>
          <div style={{ padding: "40px" }}>
            <h3>ORNAMENTAL GARDEN</h3>
            <h1>How to fertilize Hydrangeas</h1>
            <button className="buttonprop">Learn more</button>
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "Center", color: "green" }}>Plants</h1>

      <div className="last">
        <div>
          <img src="m1.jpg" alt="" className="lastimg" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <img src="m2.jpg" alt="" className="imglast2" />
          <img src="m3.jpg" alt="" className="imglast2" />
          <img src="m4.jpg" alt="" className="imglast2" />
          <img src="m5.jpg" alt="" className="imglast2" />
        </div>
      </div>
    </div>
  );
};
