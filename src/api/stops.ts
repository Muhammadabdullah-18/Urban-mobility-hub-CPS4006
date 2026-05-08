export const getNearbyStops = () => {
  return Promise.resolve({
    data: [
      { id: 1, name: "Central Bus Stop", distance: "200m" },
      { id: 2, name: "City Rail Station", distance: "500m" },
      { id: 3, name: "Metro Plaza Stop", distance: "350m" },
      { id: 4, name: "University Gate Stop", distance: "800m" },
      { id: 5, name: "Mall Road Bus Stop", distance: "1.2km" },
      { id: 6, name: "Airport Shuttle Terminal", distance: "3.5km" },
      { id: 7, name: "Hospital Junction Stop", distance: "600m" },
      { id: 8, name: "Downtown Metro Station", distance: "1.0km" },
      { id: 9, name: "Old City Terminal", distance: "1.8km" },
      { id: 10, name: "Harbor Ferry Point", distance: "2.5km" },
      { id: 11, name: "Stadium Express Stop", distance: "900m" },
      { id: 12, name: "Tech Park Bus Stop", distance: "1.4km" },
      { id: 13, name: "Library Junction", distance: "750m" },
      { id: 14, name: "Shopping District Stop", distance: "1.1km" },
      { id: 15, name: "Industrial Area Stop", distance: "2.0km" }
    ],
  });
};