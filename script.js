setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


setInterval(() => {

    let d=new Date();
    let hrr=d.getHours();
    let minn=d.getMinutes();
    let seco=d.getSeconds();

    document.getElementById("hr").innerHTML=hrr;
    document.getElementById("min").innerHTML=minn;
    document.getElementById("sec").innerHTML=seco;

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let days = weekday[d.getDay()];
    document.getElementById("day").innerHTML = days;

}, 1000);
