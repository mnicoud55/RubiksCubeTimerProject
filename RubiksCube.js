class RubiksCube {
    //Timer
    //Best of calculator
    //Fastest Time
    //Calculate Average
    #times;
    //Scrambles Algorithm


    while (sessionrunning) {
        getTime
        if (#times.length >= 5) {
            showBestOf5
        }
        if (this.#times.length >= 12) {
            showBestOf12
        }
    }

    }

    constructor() {
        this.#times = []
    }

    function getTime()

    function calculateAverage(times) {
        let temp = times
        temp.sort()
        var sum = 0
        for(let i = 1; i < times.length - 1; i++) {
            sum += temp[i]
        }
        var average = sum / (times.length - 2)
        print(average)
        return average
    }
    function bestTime(mostRecentTime)  {
        if (mostRecentTime < bestTime)  {
            bestTime = mostRecentTime
        }
    }

}
