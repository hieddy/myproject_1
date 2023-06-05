const { locationRepository } = require("../db/locationRepository");

class StationsService {
  constructor(locationRepository) {
    this.locationRepository = locationRepository;
  }

  async findAllStations() {
    const result = await this.locationRepository.findAllStations();
    return result;
  }

  async findStationsWithNoHoliday() {
    const result = await this.locationRepository.findStationsWithNoHoliday();
    return result;
  }
  async findStationsByQuery(queryData) {
    const queryDto = {};
    Object.entries(queryData)
      .filter(([key, value]) => value !== "")
      .forEach(([key, value]) => (queryDto[key] = value));
    // console.log(queryDto);
    // queryDto.parkingFee = "Y";
    // console.log(queryDto);
    // if (queryDto.parkingFee ==="N"){}
    const result = await this.locationRepository.findStationsByQuery(queryDto);
    result.map((x) => (x.distance = parseInt(x.distance)));
    // console.log(result);
    return result;
  }
}

const stationsService = new StationsService(locationRepository);

module.exports = {
  stationsService,
};
