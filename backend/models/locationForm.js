const lake_list = [];

class Location {
    constructor (city,area,lake,bbqFlag,parkingFlag) {
        this.city = city,
        this.area = area,
        this.lake = lake,
        this.bbqFlag = bbqFlag,
        this.parkingFlag = parkingFlag
    }

    save() {
        lake_list.push(this)
    }

    static fetchAll() {
        return console.log(lake_list)
    }
}

export default Location