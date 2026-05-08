import axios from "axios";
import { getServiceUpdates } from "../api/serviceUpdates";
import { getJourney } from "../api/journey";
import { getNearbyStops } from "../api/stops";
import { getBikes } from "../api/bikes";

export const fetchServiceUpdates = async () => {
  return await getServiceUpdates();
};

export const fetchJourney = async (from, to) => {
  return await getJourney(from, to);
};

export const fetchStops = async () => {
  return await getNearbyStops();
};

export const fetchBikes = async () => {
  return await getBikes();
};