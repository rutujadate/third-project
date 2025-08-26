function Greetings(props){
      return (
        <div>
            {props.username.map((singleElement)=>{
                return <h2>Hello {singleElement.Name}</h2>


            })}
        </div>
      );
}
export default Greetings;
