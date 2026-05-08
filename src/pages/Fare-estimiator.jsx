import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle } from "lucide-react";
import { travelModes } from "@/lib/travel-modes";

export default function FareEstimator() {
  const [distance, setDistance] = useState("");
  const [transportMode, setTransportMode] = useState("");
  const [fare, setFare] = useState(null);
  const [error, setError] = useState("");

  const travelModesOptions = travelModes.map((mode) => ({
    value: mode.id,
    label: mode.name,
  }));

  const calculateFare = () => {
    setError("");
    setFare(null);

    // Validation
    if (!transportMode) {
      setError("Please select a travel mode");
      return;
    }

    if (!distance || distance === "0") {
      setError("Please enter a valid distance greater than 0");
      return;
    }

    const distanceNum = parseFloat(distance);
    if (isNaN(distanceNum) || distanceNum <= 0) {
      setError("Please enter a valid positive number");
      return;
    }

    // Calculate fare
    const selectedMode = travelModes.find((m) => m.id === transportMode);
    const rate = selectedMode?.fareRate || 0;
    const calculatedFare = distanceNum * rate;
    setFare(Math.round(calculatedFare * 100) / 100); // Round to 2 decimals
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      calculateFare();
    }
  };

  const reset = () => {
    setDistance("");
    setTransportMode("");
    setFare(null);
    setError("");
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          className="relative w-full h-screen sm:h-[700px] bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/hero3.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/80"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Fare Estimator
              </h1>

              <p className="text-lg text-foreground max-w-2xl mx-auto">
                Calculate the cost of your journey based on distance and
                transport mode.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto">
            {/* Pricing Information */}
            <Card className="bg-card/50 border-border p-6 ">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Pricing Information
              </h2>
              <div className="space-y-3">
                {travelModes.map((mode) => (
                  <div
                    key={mode.id}
                    className="flex justify-between items-center"
                  >
                    <span className="text-muted-foreground">{mode.name}</span>
                    <span className="text-foreground font-medium">
                      {mode.fareRate === 0
                        ? "Free"
                        : `£${mode.fareRate.toFixed(2)} per km`}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="bg-card border-border p-8 mt-8 ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  calculateFare();
                }}
                className="space-y-6"
              >
                <div className="grid xl:grid-cols-2 gap-5">
                  {/* Transport Mode Selection */}
                  <div className="">
                    <label className="text-sm font-semibold text-foreground ">
                      Select Travel Mode
                    </label>
                    <Select
                      value={transportMode}
                      onValueChange={setTransportMode}
                    >
                      <SelectTrigger className="bg-input border-border text-foreground w-full mt-2">
                        <SelectValue placeholder="Choose a travel mode..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {travelModesOptions.map((mode) => (
                          <SelectItem key={mode.value} value={mode.value}>
                            {mode.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Distance Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">
                      Distance (km)
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter distance in kilometers"
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground mt-2"
                      step="0.1"
                      min="0"
                    />
                  </div>
                </div>
                {/* Error Message */}
                {error && (
                  <div className="flex items-start gap-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-200">{error}</p>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-1">
                  <Button
                    type="submit"
                    className="flex-1 py-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Calculate Fare
                  </Button>
                  <Button
                    type="button"
                    onClick={reset}
                    variant="outline"
                    className="flex-1 py-1 border-border text-foreground hover:bg-card/50"
                  >
                    Reset
                  </Button>
                </div>
              </form>

              {/* Result Display */}
              {fare !== null && (
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Distance
                      </p>
                      <p className="text-xl text-foreground font-semibold">
                        {distance} km
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Travel Mode
                      </p>
                      <p className="text-xl text-foreground font-semibold capitalize">
                        {transportMode}
                      </p>
                    </div>
                    <div className="bg-primary/20 border border-primary/30 rounded-lg p-6 mt-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        Estimated Fare
                      </p>
                      <p className="text-4xl font-bold text-primary">
                        £{fare.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
