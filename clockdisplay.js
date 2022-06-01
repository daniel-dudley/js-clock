class ClockDisplay{
    constructor(textColor, clockType, showLeadingZeroes){
        this.textColor = textColor;
        this.clockType = clockType;
        this.showLeadingZeroes = showLeadingZeroes;
    }

    set(textColor, clockType, showLeadingZeroes){
        this.textColor = textColor;
        this.clockType = clockType;
        this.showLeadingZeroes = showLeadingZeroes;
    }
        
    changeTextColor(){
        document.getElementById("MyClockDisplay").style.color = this.textColor;
    };

    showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        
        if (this.clockType === "12h") {
            var session = h > 12 ? "PM" : "AM";
            h = h % 12; 
            h = h || 12;
        } 

        if (this.showLeadingZeroes) {
            h = (h < 10) ? "0" + h : h;
        }

        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = `${h}:${m}:${s}`;
        time = this.clockType === '12h' ? `${time} ${session}` : time;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
    }
} 
 
let clock = new ClockDisplay("green", "12h", false);
//let clock2 = new ClockDisplay("green", "12h", false);
//clock.set("red", "24h", true);

clock.changeTextColor();
setInterval(() => {
    clock.showTime()
}, 1000);