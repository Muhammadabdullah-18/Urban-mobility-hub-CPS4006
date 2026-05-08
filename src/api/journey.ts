export const getJourney = (from: string, to: string) => {
  return Promise.resolve({
    data: [
      {
        id: 1,
        mode: "Bus",
        duration: "25 mins",
        cost: "£2.50",
      },
      {
        id: 2,
        mode: "Train",
        duration: "15 mins",
        cost: "£4.00",
      },
      {
        id: 2,
        mode: "Rail",
        duration: "40 mins",
        cost: "£3.00",
      },
      
    ],
  });
};