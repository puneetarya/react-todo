function AddTodo() {
return (<>
    <div class="container">
        <div class="row item-row">
          <div class="col-sm-6">
            <input type="text" placeholder= "Enter Task Here" name="task" id="task" />
          </div>
          <div class="col-sm-4">
            <input type="date" name="date" id="date" />

          </div>
          <div class="col-sm-2">
          <button type="button" class="btn btn-success pa-button" >
              Add
            </button>
          </div>
        </div>
      </div>

</>)
}

export default AddTodo