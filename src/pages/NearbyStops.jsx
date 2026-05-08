import { useEffect, useState } from "react";
import { fetchStops } from "../services/api";

export default function NearbyStops() {
  const [stops, setStops] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStops()
      .then((res) => setStops(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">Nearby Stops</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Find the closest transport stops around your location
          </p>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Loading */}
          {loading && (
            <div className="bg-card border border-border p-4 rounded-lg text-muted-foreground">
              Searching nearby stops...
            </div>
          )}

          {/* Empty state */}
          {!loading && stops.length === 0 && (
            <div className="bg-card border border-border p-4 rounded-lg text-muted-foreground">
              No nearby stops found.
            </div>
          )}

          {/* Stops list */}
            {stops.map((s) => (
              <div
                key={s.id}
                className="bg-card border border-border rounded-xl p-4 py-8 shadow-sm hover:shadow-md transition flex items-center justify-between"
              >
                {/* Left side */}
                <div>
                  <h3 className="font-semibold text-foreground">{s.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Accessible transport point nearby
                  </p>
                </div>

                {/* Right side */}
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {s.distance}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
