import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";
import { travelModes } from "@/lib/travel-modes";

export const metadata = {
  title: "Travel Modes - St Mary&apos;s Urban Mobility Hub",
  description: "Explore different sustainable transportation modes available",
};

export default function TravelModes() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen sm:h-[700px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/hero2.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/80"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Travel Modes
              </h1>

              <p className="text-lg text-foreground max-w-2xl mx-auto">
                Explore all available sustainable transportation options and
                find the best way to travel in our city.
              </p>
            </div>
          </div>
        </section>

        {/* Travel Modes Grid */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {travelModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <Card
                    key={mode.id}
                    className="bg-card border-border p-8 hover:border-primary/50 transition-colors"
                  >
                    {/* Header */}
                    <div className="flex items-center  gap-4 mb-2">
                      <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">
                          {mode.name}
                        </h2>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6">
                      {mode.description}
                    </p>


                    <div className="grid xl:grid-cols-2">
                      {/* Benefits */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {mode.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Limitations */}
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-primary" />
                          Limitations
                        </h3>
                        <ul className="space-y-2">
                          {mode.limitations.map((limitation, idx) => (
                            <li
                              key={idx}
                              className="text-muted-foreground flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
