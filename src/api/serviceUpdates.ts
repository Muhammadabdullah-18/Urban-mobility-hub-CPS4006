export const getServiceUpdates = () => {
  return Promise.resolve({
    data: [
      { id: 1, type: "Delay", message: "Bus 24 delayed by 10 mins" },
      { id: 2, type: "Closure", message: "Rail line A closed today" },
      { id: 3, type: "Alert", message: "Heavy traffic in city center" },
      { id: 4, type: "Maintenance", message: "Metro track inspection ongoing" },
      { id: 5, type: "Update", message: "Route 12 schedule adjusted" },
      { id: 6, type: "Delay", message: "Train 7 running 15 mins late" },
      {
        id: 7,
        type: "Alert",
        message: "Accident reported near Highway exit 3",
      },
      { id: 8, type: "Closure", message: "Bridge closed for repair work" },
      { id: 9, type: "Info", message: "New bus stops added on Route 18" },
      {
        id: 10,
        type: "Delay",
        message: "Ferry service delayed due to weather",
      },
      {
        id: 11,
        type: "Alert",
        message: "Power outage affecting station lights",
      },
      { id: 12, type: "Update", message: "Real-time tracking now enabled" },
      { id: 13, type: "Info", message: "Extra buses added during peak hours" },
      {
        id: 14,
        type: "Maintenance",
        message: "Signal upgrade work tonight 11PM–3AM",
      },
      { id: 15, type: "Alert", message: "Crowd congestion at central station" },
    ],
  });
};
