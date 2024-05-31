import { format as prettyFormat } from "pretty-format";
import { mocks } from "./mock"; // defaults to index.js
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  //console.log(prettyFormat(mocks[location]));
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
const restaurantsTransform = ({ results = [] }) => {
  const newResults = camelize(results);
  const mappedResults = newResults.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
    };
  });
  console.log(prettyFormat(mappedResults));
  return mappedResults;
};

/*
restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(prettyFormat(transformedResponse));
  })
  .catch((err) => {
    console.log("error");
  });
*/