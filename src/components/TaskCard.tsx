export default function TaskCard(props:{id:string, title:string, description:string, isDone:boolean}) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h5 className="card-title m-0"> {props.title}</h5>
            <p className="card-text m-0 text-muted">{props.description}</p>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-success w-100">Done</button>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
