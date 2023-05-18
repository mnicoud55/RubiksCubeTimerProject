class RubiksCube {
    //Timer
    //Best of calculator
    //Fastest Time
    //Calculate Average
    times;
    //Scrambles Algorithm

    constructor() {
        this.times = []
        main()
    }

    main() {
        var fastestTime = 100000000000000000
        var bestBO5 = 1000000000000000000
        var bestBO12 = 1000000000000000000
        var bestBO50 = 1000000000000000000

        while (sessionrunning) {
            time = getTime()
            if (time < fastestTime) {
                fastestTime = time
            }
            this.times.push(time)
            if (times.length >= 5) {
                currBO5 = bestof5average
                if (currBO5 < bestBO5) {
                    bestBO5 = curr
                }
            }
            if (this.times.length >= 12) {
                //showBestOf12
                if (curr < bestBO12) {
                    bestBO12 = curr
                }
            }

            if (this.times.length >= 50) {
                //showBestOf50
                if (curr < bestBO50) {
                    bestBO50 = curr
                }
            }
        }
    }

    getTime()

    calculateAverage(times) {
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

}