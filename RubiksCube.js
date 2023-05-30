class RubiksCube {
    //Timer
    //Best of calculator
    //Fastest Time
    //Calculate Average
    times;
    fastestTime;
    slowestTime;
    bestBO5;
    bestBO12;
    bestBO50;
    //Scrambles Algorithm

    constructor() {
        this.times = []
        this.fastestTime = 100000000000000000
        this.slowestTime = 100000000000000000
        this.bestBO5 = 1000000000000000000
        this.bestBO12 = 1000000000000000000
        this.bestBO50 = 1000000000000000000
    }

    updateTimes(time) {
        this.times.push(time)
        if (time < this.fastestTime) {
            this.fastestTime = time
        }
        if (time > this.slowestTime) {
            this.slowestTime = time
        }
        if (this.times.length >= 5) {
            //showBestOf5
            if (time < this.bestBO5) {
                this.bestBO5 = time
            }
        }
        if (this.times.length >= 12) {
            //showBestOf12
            if (time < this.bestBO12) {
                this.bestBO12 = time
            }
        }
        if (this.times.length >= 50) {
            //showBestOf50
            if (time < this.bestBO50) {
                this.bestBO50 = time
            }
        }
    }

    calculateAverage(times, numTimes) {
        let temp = times.map((x) => (x))
        let sum = 0
        let average = 0
        let lowestIndex = times.length-numTimes
        let highestIndex = times.length-numTimes

        for(let i = times.length-numTimes; i < times.length; i++) {
            if (temp[i] < temp[lowestIndex])
                lowestIndex = i
            if (temp[i] > temp[highestIndex])
                highestIndex = i
            sum += temp[i]
        }

        sum -= temp[lowestIndex]
        sum -= temp[highestIndex]
        average = sum / (numTimes-2)
        return average
    }

    calculateMean(times, numTimes) {
        let temp = times.map((x) => (x))
        let sum = 0
        let average = 0
        for(let i = times.length-numTimes; i < times.length; i++) {
            sum += temp[i]
        }
        average = sum / (numTimes)
        return average
    }
}

let cube = new RubiksCube()

let timeElement = document.getElementById('time')
let averageElement = document.getElementById('average')
let meanElement = document.getElementById('mean')

let isRecordingTime = false
let start, end
window.addEventListener('keydown', function(e) {
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
        if (!isRecordingTime) {
            start = new Date()
            isRecordingTime = true
            timeElement.style = "border:red; border-width:2px; padding:5px; display:inline; border-style:outset;"
            displayRunningTime()
        } else {
            end = new Date()
            let totalTime = end.getTime() - start.getTime()
            isRecordingTime = false
            timeElement.style="border:azure; border-width:2px; padding:5px; display:inline; border-style:outset;"
            displayRunningTime()
            cube.updateTimes(totalTime)
            averageElement.innerHTML = "Session Average (" + cube.times.length + " Times): Min 3 Attempts"  
            if (cube.times.length >= 3)
                averageElement.innerHTML = "Session Average (" + cube.times.length + " Times): " + cube.calculateAverage(cube.times, cube.times.length) + " ms"  
            meanElement.innerHTML = "Session Mean (" + cube.times.length + " Times): " + cube.calculateMean(cube.times, cube.times.length) + " ms"              
        }

    }
})
function displayRunningTime() {
    if (isRecordingTime) {
        let today = new Date()
        let runningTime = (today.getTime() - start.getTime())
        let timeString = runningTime.toString()
        if (Math.trunc(runningTime / 1000) > 0) 
            timeElement.innerHTML = "Current Time: " + Math.trunc(runningTime / 1000) + "." + timeString.substring(timeString.length-3) + " s"
        else if (Math.trunc(runningTime / 100) > 0) 
            timeElement.innerHTML = "Current Time: 0." + runningTime  + " s"
        else if (Math.trunc(runningTime / 10) > 0) 
            timeElement.innerHTML = "Current Time: 0.0" + runningTime  + " s"
        else 
            timeElement.innerHTML = "Current Time: 0.00" + runningTime  + " s"
        setTimeout(displayRunningTime.bind(null, isRecordingTime), 1)
    } else {
        let runningTime = (end.getTime() - start.getTime())
        let timeString = runningTime.toString()
        if (Math.trunc(runningTime / 1000) > 0) 
            timeElement.innerHTML = "Current Time: " + Math.trunc(runningTime / 1000) + "." + timeString.substring(timeString.length-3) + " s"
        else if (Math.trunc(runningTime / 100) > 0) 
            timeElement.innerHTML = "Current Time: 0." + runningTime  + " s"
        else if (Math.trunc(runningTime / 10) > 0) 
            timeElement.innerHTML = "Current Time: 0.0" + runningTime  + " s"
        else 
            timeElement.innerHTML = "Current Time: 0.00" + runningTime  + " s"
    }
}