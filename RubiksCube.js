class RubiksCubeProject {
    Timer
    Best of calculator
    Fastest Time
    Calculate Average
    Array of times
    Scrambles Algorithm

    function calculateAverage(times) {
        let temp = times
        temp.sort()
        var sum = 0
        for(let i = 1; i < times.length - 1; i++) {
            sum += temp[i]
        }
        var average = sum / (times.length - 2)
        return average
    }

}