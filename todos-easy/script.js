class App extends React.Component{
    state = {
        tasks: ['task 1','task 2','task 3']
    }

    redner(){
        return(
            <div className='wrapper'>
                <div className="card frame">
                    <Header numTodos={this.state.tasks.length}/>
                </div>
            </div>
        )
    }
}
//show number with numTodos
const Header = (props) => {
    return(
        <div className='card-header'> 
            <h1 className='card-header-title header'>
                You have {props.numTodos} Todos currently 
            </h1> 
        </div>
    )
}

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index) => {
    return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
  })
  return( 
    <div className='list-wrapper'>
      {todos}
    </div>
  );
}


ReactDOM.render(
    <App/>,
    document.getElementById('#root')
)