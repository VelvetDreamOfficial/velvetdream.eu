import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, BookOpen, Film, Palette, Heart, Users, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/background.webp" alt="VelvetDream Background" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="flex justify-center mb-6 animate-float">
            <Image
              src="/images/velvet-dream-logo.png"
              alt="VelvetDream"
              width={500}
              height={200}
              className="w-full max-w-md"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Où l&apos;imaginaire prend vie
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
            Une maison créative née d&apos;une passion pour l&apos;imaginaire et une esthétique fusionnant douceur,
            diversité et élégance.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-velvet-red hover:bg-velvet-red/90 text-white">
              <Link href="#a-propos">Découvrir</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="#projets">Nos Projets</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* À Propos Section */}
      <section id="a-propos" className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              À Propos de <span className="text-velvet-red">VelvetDream</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-gold mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto">
              VelvetDream est une maison créative née d&apos;une passion pour l&apos;imaginaire et une esthétique
              fusionnant douceur, diversité et élégance. Inspirée par la culture japonaise — particulièrement les animés
              — et les univers fantastiques enchanteurs, VelvetDream cherche à captiver les cœurs et éveiller la
              curiosité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/50 dark:bg-velvet-black/50 backdrop-blur-sm border-velvet-gold/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-velvet-red/10 flex items-center justify-center mb-4 group-hover:bg-velvet-red/20 transition-colors">
                  <Palette className="w-6 h-6 text-velvet-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Esthétique Unique</h3>
                <p className="text-muted-foreground">
                  Une fusion d&apos;influences « fluffy » et « mignonnes » avec des designs élégants et captivants,
                  créant une identité visuelle distinctive.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-velvet-black/50 backdrop-blur-sm border-velvet-gold/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-velvet-red/10 flex items-center justify-center mb-4 group-hover:bg-velvet-red/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-velvet-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inspiration Japonaise</h3>
                <p className="text-muted-foreground">
                  Fortement inspirée par la culture japonaise, particulièrement les animés et leur capacité à créer des
                  mondes immersifs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-velvet-black/50 backdrop-blur-sm border-velvet-gold/20 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-velvet-red/10 flex items-center justify-center mb-4 group-hover:bg-velvet-red/20 transition-colors">
                  <Users className="w-6 h-6 text-velvet-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Communauté Inclusive</h3>
                <p className="text-muted-foreground">
                  Un espace accueillant pour tous, avec des racines dans la communauté LGBT+ et le Furry Fandom,
                  célébrant la diversité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Univers Section */}
      <section id="univers" className="w-full py-20 bg-gradient-to-b from-velvet-red/5 to-velvet-gold/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              L&apos;Univers de <span className="text-velvet-gold">Raoronia</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-red mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Chaque création de VelvetDream s&apos;inscrit dans l&apos;univers de Raoronia, un monde riche et vibrant
              incarnant nos valeurs : inclusivité, créativité et authenticité.
            </p>
          </div>

          <div className="relative mt-16 mb-8">
            <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-velvet-gold/50 to-transparent top-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-velvet-red flex items-center justify-center border-4 border-background">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Un Monde Fantastique</h3>
              <p className="text-lg mb-6">
                Raoronia est un univers où la magie et la technologie coexistent, où des créatures fantastiques et des
                personnages aux histoires profondes évoluent dans des paysages époustouflants.
              </p>
              <p className="text-lg">
                Ce monde sert de toile de fond à toutes nos créations, offrant une cohérence narrative tout en
                permettant une grande liberté créative.
              </p>
            </div>

            <div className="bg-gradient-to-br from-velvet-red/20 to-velvet-gold/20 p-1 rounded-lg shadow-lg">
              <div className="bg-background rounded-lg p-6 h-full">
                <h4 className="text-xl font-semibold mb-4 text-velvet-gold">Caractéristiques de Raoronia</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-velvet-red/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-velvet-red"></div>
                    </div>
                    <span>Paysages variés, des forêts enchantées aux cités flottantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-velvet-red/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-velvet-red"></div>
                    </div>
                    <span>Personnages diversifiés aux histoires entrelacées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-velvet-red/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-velvet-red"></div>
                    </div>
                    <span>Magie et technologie coexistant harmonieusement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-velvet-red/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-velvet-red"></div>
                    </div>
                    <span>Thèmes d&apos;acceptation, d&apos;aventure et de découverte</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Nos <span className="text-velvet-red">Projets</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-gold mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Notre mission est d&apos;offrir des expériences immersives et collaboratives à travers divers projets
              créatifs qui transportent notre audience dans l&apos;univers de Raoronia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:-translate-y-1 transition-all duration-300 border-velvet-gold/20">
              <div className="h-48 bg-gradient-to-br from-velvet-red to-velvet-gold/70 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Gamepad2 className="w-16 h-16 text-white/90" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-velvet-red transition-colors">Jeux Vidéo</h3>
                <p className="text-muted-foreground mb-4">
                  Des expériences interactives qui plongent les joueurs dans l&apos;univers de Raoronia, avec des
                  mécaniques innovantes et des histoires captivantes.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-velvet-red/50 text-velvet-red hover:bg-velvet-red hover:text-white"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:-translate-y-1 transition-all duration-300 border-velvet-gold/20">
              <div className="h-48 bg-gradient-to-br from-velvet-gold to-velvet-red/70 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/90" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-velvet-gold transition-colors">
                  Jeux de Société
                </h3>
                <p className="text-muted-foreground mb-4">
                  Des jeux de plateau et de cartes qui rassemblent les joueurs autour d&apos;expériences collaboratives
                  et stratégiques dans l&apos;univers de Raoronia.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-velvet-gold/50 text-velvet-gold hover:bg-velvet-gold hover:text-black"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:-translate-y-1 transition-all duration-300 border-velvet-gold/20">
              <div className="h-48 bg-gradient-to-br from-velvet-red/80 to-velvet-gold relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Film className="w-16 h-16 text-white/90" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-velvet-red transition-colors">
                  Animés & Médias
                </h3>
                <p className="text-muted-foreground mb-4">
                  Des productions animées et autres contenus visuels qui donnent vie aux personnages et aux histoires de
                  Raoronia.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-velvet-red/50 text-velvet-red hover:bg-velvet-red hover:text-white"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section id="valeurs" className="w-full py-20 bg-velvet-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Nos <span className="text-velvet-gold">Valeurs</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-red mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto text-white/80">
              Chez VelvetDream, nous croyons en la puissance du collectif et de la diversité. Nos valeurs fondamentales
              guident chacune de nos créations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-velvet-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-velvet-red/20 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-velvet-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-velvet-gold">Inclusivité</h3>
              <p className="text-white/70">
                Nous créons des espaces où chacun peut se sentir représenté et valorisé, célébrant la diversité sous
                toutes ses formes.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-velvet-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-velvet-red/20 flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-velvet-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-velvet-gold">Créativité</h3>
              <p className="text-white/70">
                Nous encourageons l&apos;expression artistique sans limites, en repoussant constamment les frontières de
                l&apos;imagination.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-velvet-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-velvet-red/20 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-velvet-red" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-velvet-gold">Authenticité</h3>
              <p className="text-white/70">
                Nous restons fidèles à notre essence tout en créant des expériences accessibles à tous, honorant nos
                racines et notre vision unique.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 italic">
              "Nous sommes avant tout un lieu où l&apos;imagination n&apos;a pas de limites, où chaque voix peut
              s&apos;exprimer et où l&apos;art raconte des histoires uniques."
            </p>
            <Button asChild className="bg-velvet-gold hover:bg-velvet-gold/90 text-velvet-black">
              <Link href="#contact">Rejoignez l&apos;Aventure</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image src="/images/background.webp" alt="VelvetDream Background" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Rejoignez <span className="text-velvet-red">l&apos;Aventure</span>
            </h2>
            <div className="w-20 h-1 bg-velvet-gold mb-8"></div>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Rejoignez-nous dans cette aventure pour créer, ensemble, des mondes où rêves et créativité
              s&apos;entrelacent.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white/50 dark:bg-velvet-black/50 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-velvet-gold/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Contactez-nous</h3>
              <p className="text-muted-foreground mb-6">
                Vous avez des questions ou souhaitez collaborer avec nous ? N'hésitez pas à nous contacter !
              </p>
              <Button asChild size="lg" className="bg-velvet-red hover:bg-velvet-red/90 text-white">
                <a href="mailto:contact@velvetdream.eu">contact@velvetdream.eu</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
