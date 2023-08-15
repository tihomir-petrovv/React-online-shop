function Card({ img, title, price }) {
  return (
    <>
    <section className="card">
      <img src={img} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
      </div>
      <section className="card-price">
        <div className="price">{price}</div>
      </section>
    </section>
    </>
  );
}

export default Card;
