function Card() {
  return (<section className="card">
  <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Nike shoe" className="card-image"/>
  <div className="card-details">
    <h3 className="card-title">Nike Air</h3>
  </div>
  <section className="card-price">
    <div className="price">$300</div>
  </section>
  </section>);
}

export default Card;
