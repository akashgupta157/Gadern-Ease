

export const Home = () => {
const buttonprop={
    marginLeft:"300px" ,marginTop:"100px" ,backgroundColor: "#4CAF50",border:"none",color:"white",padding :"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px",borderRadius:"10px"
}

return <div>
    <div style={{margin:"20px 150px" ,boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px" , borderRadius:"10px" ,}}>
<img src="newa.jpg" alt=""  style={{width:"100% " ,height:"500px"}}/>  
<h3 style={{paddingLeft:"20px"}}>GREEN LIFE</h3>
<h2 style={{paddingLeft:"20px"}}>Making lavender oil: Preserve the scent of the south</h2>
<h4 style={{paddingLeft:"20px"}}>Do you love lavender? With these simple instructions, you can transform these fragrant blossoms from your garden into aromatic lavender oil.</h4>
<button style={{marginLeft:"800px" ,marginTop:"10px" ,marginBottom :"10px",backgroundColor: "#8BC34A",border:"none",color:"white",padding :"15px 40px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px",borderRadius:"10px"}}>Learn more</button>
</div>

<div style={{display:"flex" , margin:" 10px 150px" ,borderRadius:"10px" ,boxShadow :"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
    <div ><img src="1.jpg" alt=""  style={{ borderRadius:"10px" }}/></div>
    <div style={{padding :"40px"}}>
        <h3>ORNAMENTAL GARDEN</h3>
    <h1>How to fertilize Hydrangeas</h1>
    <button style={buttonprop} >Learn more</button>
    </div>
    </div>

<div style={{display:"flex" , margin:" 10px 150px" ,borderRadius:"10px" ,boxShadow :"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
    <div ><img src="2.jpg" alt=""  style={{ borderRadius:"10px"}}/></div>
    <div style={{padding :"40px"}}>
        <h3>ORNAMENTAL GARDEN</h3>
    <h1>How to fertilize Hydrangeas</h1>
    <button style={buttonprop}>Learn more</button>
    </div> 
</div>

<div style={{display:"flex" , margin:" 10px 150px" ,borderRadius:"10px" ,boxShadow :"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
    <div ><img src="3.jpg" alt=""  style={{ borderRadius:"10px"}}/></div>
    <div style={{padding :"40px"}}>
        <h3>ORNAMENTAL GARDEN</h3>
    <h1>How to fertilize Hydrangeas</h1>
    <button style={buttonprop}>Learn more</button>
    </div>

    
</div>
<h1 style={{textAlign:"Center" ,color :"green"}}>Plants</h1>
<div style={{display:"flex" , margin:" 0px 150px" ,borderRadius:"10px" }}>
    <div>
        
    <img src="m1.jpg" alt="" style={{ paddingRight:"10px"  , paddingTop:"10px", height:"420px" , width:"400px" ,borderRadius:"10px"}} />
    </div>
    <div style={{display:"grid" ,gridTemplateColumns :"repeat(2,1fr)"}}>
      
       <img src="m2.jpg" alt="" style={{ padding:"10px" , height:"200px" , width:"250px" ,borderRadius:"20px"}} />
        <img src="m3.jpg" alt="" style={{ padding:"10px" , height:"200px" , width:"250px" ,borderRadius:"20px"}} />
        <img src="m4.jpg" alt="" style={{ padding:"10px" , height:"200px" , width:"250px" ,borderRadius:"20px" }} />
        <img src="m5.jpg" alt="" style={{ padding:"10px" ,height:"200px" , width:"250px" ,borderRadius:"20px"}} />
    </div>
</div>

{/* <div>
    <img src="p1.png" alt="" />
    <img src="p2.png" alt="" />
    <img src="p3.png" alt="" />
    <img src="p4.png" alt="" />
    <img src="p5.png" alt="" />
    <img src="p6.png" alt="" />
    <img src="p7.png" alt="" />
    <img src="p8.png" alt="" />

</div> */}


</div>
}

// background-color: "#4CAF50"
// border: "none"
// color: white;
// padding: "15px 32px"
// text-align: "center"
// text-decoration: "none"
// display: "inline-block"
// font-size: "16px"
// margin: "4px 2px"
// cursor: "pointer"