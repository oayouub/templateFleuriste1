import "./Banniere.scss"

export const Banniere = () => {
  return (
    <div className="banniere">
      <div className="item-1">
        <img src="src/assets/img/logo-fleur.jpg" alt="img fleur" />
        <h2>Fleurs Avec Passions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eius placeat
          consectetur aliquid amet, reiciendis quidem cupiditate iure ullam praesentium?
        </p>
      </div>
      <div className="item-2">
        <img src="src/assets/img/banniere.jpg" alt="image grosse" />
      </div>
    </div>
  )
}
