import "./Footer.css"

export const Footer=()=>{
return <div style={{backgroundColor :"#00695C" ,marginTop:"40px" , color:"#B3B5B2" }}>
    <div className="footer1" style={{backgroundColor :"#00695C" ,display:"flex" ,justifyContent :"space-between" ,marginTop:" 40px" , color:"#B3B5B2" }}> 

    <img src="logo.jpeg" alt="" style={{width:"250px"}}  />
    <h3>Imprint</h3>
<h3>
    Privacy Policy
</h3>
    
    <h3> Privacy Statement</h3>
    <h3> Terms of Use </h3>
 <h3 style={{marginRight:"20px"}}>   Privacy Settings</h3>
</div>
<div className="footer1" style={{}}>
<div style={{marginLeft :"20px"}}>
<h3>Deutsch </h3>

<h3>Français</h3>

<h3>English</h3>
</div>
<div  className="last"style={{marginTop:"20px" , display:"flex"}}>
<img src="i.jpg" alt=""  style={{width :"40px" , marginLeft :"10px"}} />
<img src="f1.jpg" alt="" style={{width :"40px", marginLeft :"10px"}} />
<img src="t.png" alt="" style={{width :"40px" ,marginLeft :"10px"}} />
<img src="p2.jpg" alt="" style={{width :"40px" ,marginLeft :"10px"}} />
</div>
</div>

</div>

}
