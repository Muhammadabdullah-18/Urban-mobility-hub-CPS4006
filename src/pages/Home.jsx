import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bus, Train, Bike, Users } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Bus,
      title: "Bus",
      description: "Reliable and affordable bus transportation across the city",
      image: "/bus.jpg",
    },
    {
      icon: Train,
      title: "Rail",
      description: "Fast and efficient rail services connecting major hubs",
      image: "/train.jpg",
    },
    {
      icon: Bike,
      title: "Cycling",
      description: "Eco-friendly cycling options for short-distance travel",
      image: "/cycle.jpg",
    },
    {
      icon: Users,
      title: "Walking",
      description: "Join a sustainable urban mobility movement",
      image: "/walking.jpg",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen sm:h-[700px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/90"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                St Mary&apos;s Urban Mobility Hub
              </h1>

              <p className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto">
                Discover sustainable transportation solutions for modern urban
                living. Choose from buses, trains, cycling, and walking options.
              </p>

              <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4 justify-center pt-4">
                <Link to="/travel-modes">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Travel Modes
                  </Button>
                </Link>

                <Link to="/fare-estimator">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Calculate Fares
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-center">
              Our Services
            </h2>
             <p className="text-lg sm:text-xl text-foreground max-w-2xl mx-auto text-center mb-12">
                We provide simple and reliable tools to help you explore travel options, plan journeys, and make smarter urban mobility decisions.
              </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => {
                return (
                  <Card
                    key={idx}
                    className="bg-card border-border overflow-hidden hover:border-primary/50 transition-colors"
                  >
                    
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="object-cover aspect-square"
                      />
                   
                    <div className="p-3 text-center">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Move Sustainably?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Start your journey with us and discover the best way to get around
              the city.
            </p>
            <Link to="/travel-modes">
              <Button size="lg">Read More</Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
