const Location = require("./locationSchema");
const csv = require("csvtojson");

const loadData = {
  async load() {
    const dataArray = await csv().fromFile("infoEng.csv");
    await dataArray.forEach((data) => {
      let { latitude, longitude } = data;
      latitude = Number(latitude);
      longitude = Number(longitude);
      const geoCoordinates = {
        type: "Point",
        coordinates: [longitude, latitude],
      };

      data = { ...data, latitude, longitude, geoCoordinates };

      Location.insertMany(data);
    });

    // .then((csvData) => {
    //   // console.log(csvData);
    //   Location.insertMany(csvData);
    // });
    // return await Location.insertMany();
  },
};

class LocationRepository {
  async findAllStations() {
    const result = await Location.find().limit(10);
    return result;
  }

  async findStationsWithNoHoliday() {
    const result = await Location.find({ off: "연중무휴" });
    return result;
  }

  async findStationsByQuery(queryDto) {
    // const result = await Location.find({
    //   geoCoordinates: {
    //     $nearSphere: {
    //       $geometry: {
    //         type: "Point",
    //         coordinates: [127.0519, 37.2886],
    //       },
    //     },
    //   },
    // }).limit(10);
    const result = await Location.aggregate([
      {
        $geoNear: {
          spherical: true,
          near: {
            type: "Point",
            coordinates: [127.0519, 37.2886],
          },
          distanceField: "distance",
          key: "geoCoordinates",
        },
      },
      { $match: queryDto },
    ]).limit(10);
    console.log(result);
    return result;
  }
}

const locationRepository = new LocationRepository();
module.exports = { loadData, locationRepository };
