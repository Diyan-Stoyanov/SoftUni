function timeToWalk(steps,footprint,speedKm){
    let meters = steps * footprint;
    let speed = speedKm * 1000 / 3600;
    
    let rest = Math.floor(meters/500)*60;
    let time = meters/speed + rest;

    let hours = Math.floor(time/60/60).toFixed(0).padStart(2,'0');
    let minutes = Math.floor((time-hours*3600)/60).toFixed(0).padStart(2,'0');
    let seconds = (time-hours*60*60 - minutes*60).toFixed(0).padStart(2,'0');

    console.log(`${hours}:${minutes}:${seconds}`);
    


}

timeToWalk(4000, 0.60, 5)
