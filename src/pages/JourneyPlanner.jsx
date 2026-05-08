import { useState } from "react";
import { fetchJourney } from "../services/api";

export default function JourneyPlanner() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!from || !to) return;

    setLoading(true);
    try {
      const res = await fetchJourney(from, to);
      setRoutes(res.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-primary">
            Journey Planner
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Find the fastest, cheapest, and most convenient routes between destinations
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
          <div className="flex flex-col md:flex-row gap-3">

            <input
              placeholder="From "
              onChange={(e) => setFrom(e.target.value)}
              className="flex-1 p-3 rounded-lg border border-border bg-background text-foreground outline-none"
            />

            <input
              placeholder="To "
              onChange={(e) => setTo(e.target.value)}
              className="flex-1 p-3 rounded-lg border border-border bg-background text-foreground outline-none"
            />

            <button
              onClick={handleSearch}
              className="bg-primary text-primary-foreground px-5 py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Search
            </button>
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            Tip: Try major landmarks for better route suggestions
          </p>
        </div>

        {/* Results */}
        <div className="mt-6 space-y-3">

          {loading && (
            <div className="bg-card border border-border p-4 rounded-lg text-muted-foreground">
              Searching best routes...
            </div>
          )}

          {!loading && routes.length === 0 && (
            <div className="bg-card border border-border p-4 rounded-lg text-muted-foreground">
              No routes found yet. Enter locations to start planning your journey.
            </div>
          )}

          {routes.map((r) => (
            <div
              key={r.id}
              className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">
                  {r.mode} Route
                </h3>

                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  Recommended
                </span>
              </div>

              <div className="mt-2 text-sm text-muted-foreground space-y-1">
                <p>⏱ Duration: {r.duration}</p>
                <p>💰 Cost: {r.cost}</p>
              </div>

              <div className="mt-3 text-xs text-muted-foreground">
                Best suited for daily commuters and budget travelers
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}