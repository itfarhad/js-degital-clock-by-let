function showTime() {
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let sesstion = "Am";
    
    if(h == 0){
        h = 12 ;
    }
    if (h > 12){
        h = h -12;
      sesstion = "Pm";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + ":" + sesstion;

    document.getElementById('mycomputerjs').innerText = time;
    document.getElementById('mycomputerjs').textContent = time;

    setTimeout(showTime, 1000);
};
showTime();