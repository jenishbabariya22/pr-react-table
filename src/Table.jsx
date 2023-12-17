

function Table({ allrecorddata, btnclick }) {

  const category = ["mobile", "electronics", "cloth", "food", "all"];


  return (
    <div className="container">
      <center>
        <h1 style={{ paddingTop: "15px" }}>All Record</h1>

        {
          category.map((cat, i) => {
            return (
              <button type="button" className="btn btn-primary" style={{ margin: "20px" }} onClick={() => btnclick(cat)} key={i}>{cat}</button>
            )
          })
        }

        <br></br><br></br>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {
            allrecorddata.map((val) =>
              <div
                className="card" style={{ width: "300px", margin: "30px", cursor: "pointer", padding: "15px", background: val.color, boxShadow: "-4px 8px 8px rgba(0,0,0,0.1), -8px 16px 16px rgba(0,0,0,0.1), -16px 32px 32px rgba(0,0,0,0.15), -32px 64px 64px rgba(0,0,0,0.25)" }}>
                <img src={val.img} className="card-img-top" alt="..." style={{ objectFit: "contain", height: "200px" }} />
                <div className="card-body">
                  <h5 className="card-title">{val.name}</h5>
                  <p className="card-text" style={{ fontWeight: "500" }}>{val.category}</p>
                  <p className="card-text" style={{ fontWeight: "500" }}><strong>$</strong>{val.price}</p>
                  <a href="#" className="btn btn-danger me-2">Delete</a>
                  <button type="button" className="btn btn-success">Edit</button>
                </div>
              </div>
            )
          }
        </div>


      </center >
    </div>
  )
}
export default Table
