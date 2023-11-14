import "../../style/Home.scss"


export default function Home() {
    document.title = "HOME";
    
    if(sessionStorage.getItem("token-user")){
    return (
      <div>
        <h1> Oi Home</h1>
  
      </div>
    )}else{
      window.location = "/login";
      
    }
  } 