import "./Categorie.scss"

export const Categorie = () => {
  return (
    <div className="categorie">
      <ul className="liste-1">
        <li className="item-1">
          <h2>Professionnels</h2>
          <span></span>
          <p>
            Des fleurs et des plantes qui accompagnent votre quotidien, valorise votre image et
            enchantent vos évènements les plus importants.
          </p>
        </li>
        <li className="item-2">img</li>
        <li className="item-3">img</li>
      </ul>
      <ul className="liste-2">
        <li className="item-2">img</li>
        <li className="item-1">
          <h2>Particuliers</h2>
          <span></span>
          <ul>
            <li>Evenements</li>
            <li>Abonnements et livraisons</li>
            <li>Terrasses et balcons</li>
            <li>Ateliers d'Art Floral</li>
          </ul>
        </li>
        <li className="item-3">img</li>
      </ul>
      <ul className="liste-3">
        <li className="item-2">img</li>
        <li className="item-1">
          <h2>Ateliers</h2>
          <span></span>
          <p>
            Suppléments d'Ame organise des ateliers à destination de différents publics, enfants ou
            adultes, ils permettent la réalisation de bouquets, d'accessoires floraux, de
            compositions plantés.
          </p>
        </li>
        <li className="item-3">img</li>
      </ul>
    </div>
  )
}
