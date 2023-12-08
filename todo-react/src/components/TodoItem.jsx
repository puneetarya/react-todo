function TodoItem(){
    let todoName = "Buy Milk"
    let todoDate = "4/10/2023"
return (
    <>
    <div className="container">
        <div className="row item-row">
          <div className="col-sm-6"> {todoName}</div>
          <div className="col-sm-4"> {todoDate}</div>
          <div className="col-sm-2">
          <button type="button" className="btn btn-danger pa-button" >
              Delete
            </button>
          </div>
        </div>
      </div>
    
    </>
)

}

export default TodoItem