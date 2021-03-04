
function Name(props){


    return <div className="card">
    <h1>{props.name}</h1>
    <img src={props.pic}/>
    <h2>House:{props.house}</h2>
    
    </div>
}


export default Name