const mystyle = {
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
  fontSize: "23px",
  fontWeight: "bold",
  backgroundColor: "#F5F5F5",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  fontFamily: " Roboto, sans-serif ",
  color: "#404040",
  fontWeight: "700",
  position: "sticky",
  top: "0",
};
const allname = {
  margin: "34px",
};

export const Navbar = () => {
  return (
    <div>
      {" "}
      <div style={mystyle}>
        <div>
          {" "}
          <img src="logo.jpeg" alt="" style={{ width: "350px" }} />
        </div>
        <div style={allname}>Gardening Practice</div>
        <div style={allname}>Houseplants</div>
        <div style={allname}>Perennials</div>
        <div style={allname}>Trees & Shrubs </div>
        <div style={allname}>More Plants </div>
        <div style={allname}>Topics</div>
      </div>
      <div style={{ margin: "auto" }}>
        <img
          src="newa.jpg"
          alt=""
          style={{ width: "1000px ", margin: "auto" }}
        />
      </div>
    </div>
  );
};
