import { Button } from "@medusajs/ui"
import "./sectionHome1.scss"

const SectionHome1 = () => {
  return (
    <div>
      <div className="sectionHome1">
        <h3>Des bouquets d'émotions pour toutes vos occasions.</h3>
        <h2>L'excellence florale au service de votre bonheur.</h2>
        <p>
          Fleurs pour chaque moment de la vie : mariages, anniversaires, et plus
          encore. <br />
          Sublimez vos occasions avec nos créations florales sur mesure.
        </p>
      </div>
      <div className="sectionHome2">
        <div className="bloc">
          <div className="text">
          <h3>Des bouquets d'émotions pour toutes vos occasions.</h3>
        <h2>L'excellence florale au service de votre bonheur.</h2>
        <p>
          Fleurs pour chaque moment de la vie : mariages, anniversaires, et plus
          encore. <br />
          Sublimez vos occasions avec nos créations florales sur mesure.
        </p>
        <Button variant="primary" size="xlarge" >
            Acheter des Fleurs
          </Button>
          </div>
          <div className="img"></div>
        </div>
      </div>
      <div className="sectionHome3">
      <h3>Des bouquets d'émotions pour toutes vos occasions.</h3>
        <h2>L'excellence florale au service <br /> de votre bonheur.</h2>
        <p>
          Fleurs pour chaque moment de la vie : mariages, anniversaires, et plus
          encore. <br />
          Sublimez vos occasions avec nos créations florales sur mesure.
        </p>
        <Button variant="secondary" size="xlarge" >
            Acheter des Fleurs
          </Button>
    </div>
    </div>
  )
}

export default SectionHome1
