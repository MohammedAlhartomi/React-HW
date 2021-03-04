
function House(props){


    return <div className="card">
   
    <img src={props.pic}/>
    <h2>seat:{props.name}</h2>
    
    </div>
}


export default House