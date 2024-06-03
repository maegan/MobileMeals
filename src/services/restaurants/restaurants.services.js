import { format as prettyFormat } from "pretty-format";
import { mocks, mockImages } from "./mock"; // defaults to index.js
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
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
    };
  });
  console.log(prettyFormat(mappedResults));
  return camelize(mappedResults);
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
