import { useEffect, useState } from "react";
import { fetchBikes } from "../services/api";

export default function Bikes() {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBikes()
      .then((res) => setBikes(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Bike Availability
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Check real-time bike availability at nearby stations
          </p>
        </div>

        {/* Content */}
        <div className="space-y-3">

          {/* Loading */}
          {loading && (
            <div className="bg-card border border-border p-4 rounded-lg text-muted-foreground">
              Loading bike stations...
            </div>
          )}

          {/* Empty */}
          {!loading && bikes.length === 0 && (
            <div className="bg-card border border-border p-4 rounded-lg text-muted-foreground">
              No bike stations available right now.
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 gap-3">
            {bikes.map((b) => (
              <div
                key={b.id}
                className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">
                    {b.station}
                  </h3>

                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    Live
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {b.bikes} bikes available for instant pickup
                </p>

                <p className="text-xs text-muted-foreground mt-2">
                  Updated in real-time from station sensors
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}