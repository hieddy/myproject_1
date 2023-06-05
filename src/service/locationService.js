const { loadData } = require("../db/locationRepository");

class LocationService {
  constructor(loadData) {
    this.loadData = loadData;
  }

  async load() {
    return await this.loadData.load();
  }
}

const locationService = new LocationService(loadData);
module.exports = { locationService };
