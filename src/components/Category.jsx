import "./Category.css";

function Category({ data }) {
  return (
    <li style={{backgroundColor:data.backgroundcolor}}>
          <span className="d-flex" style={{ color: data.textcolor }}>
        <img src={data.icon} alt="icon" className="me-3" />
        {data.category}
      </span>
      <span> {data.score} / 100 </span>{" "}
    </li>
  );
}

export default Category;
