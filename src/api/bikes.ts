export const getBikes = () => {
  return Promise.resolve({
    data: [
      { id: 1, station: "Park Lane", bikes: 5 },
      { id: 2, station: "Main Square", bikes: 2 },
      { id: 3, station: "City Center Hub", bikes: 8 },
      { id: 4, station: "University Gate", bikes: 3 },
      { id: 5, station: "Metro Station East", bikes: 6 },
      { id: 6, station: "Mall Road Stand", bikes: 1 },
      { id: 7, station: "Airport Terminal", bikes: 4 },
      { id: 8, station: "Riverfront Park", bikes: 7 },
      { id: 9, station: "Old Town Square", bikes: 2 },
      { id: 10, station: "Tech Park Station", bikes: 9 },
      { id: 11, station: "Hospital Junction", bikes: 3 },
      { id: 12, station: "Stadium Gate", bikes: 6 }
    ],
  });
};