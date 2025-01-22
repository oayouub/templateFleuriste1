import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Pretty Flower
          </Heading>
          <Heading
            level="h3"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Beauté et Savoir Faire
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary" size="xlarge" >
            Acheter des Fleurs
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
