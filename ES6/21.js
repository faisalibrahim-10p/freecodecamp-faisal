// Only change code below this line

class Thermostat{
    constructor(temp) {
        this.temp = ((temp - 32) * 5) / 9;
    }

    get temperature() {
        return this.temp;
    }

    set temperature(temp) {
        this.temp = temp;
    }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius