setInterval(() => {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();

    let hror = ((30*h) + (m/2));
    let mror = (6*m);
    let sror = (6*s);

    hour.style.transform = `rotate(${hror}deg)`;
    minute.style.transform = `rotate(${mror}deg)`;
    second.style.transform = `rotate(${sror}deg)`;

}, 1000);