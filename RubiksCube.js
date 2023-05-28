class RubiksCube {
    //Timer
    //Best of calculator
    //Fastest Time
    //Calculate Average
    times;
    fastestTime;
    bestBO5;
    bestBO12;
    bestBO50;
    //Scrambles Algorithm

    constructor() {
        this.times = []
        this.fastestTime = 100000000000000000
        this.bestBO5 = 1000000000000000000
        this.bestBO12 = 1000000000000000000
        this.bestBO50 = 1000000000000000000
    }

    updateTimes(time) {
        this.times.push(time)
        if (time < this.fastestTime) {
            this.fastestTime = time
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

    calculateAverage(times) {
        let temp = times.map((x) => (x))
        temp.sort()
        var sum = temp[0]
        var average = sum
        for(let i = 1; i < times.length; i++) {
            sum += temp[i]
        }
        var average = sum / (times.length)
        
        console.log("Average: " + average)
        return average
    }

}

let cube = new RubiksCube()

let timeElement = document.getElementById('time')
let averageElement = document.getElementById('average')

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
            averageElement.innerHTML = "Average Time: " + cube.calculateAverage(cube.times)  + " ms"        }
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