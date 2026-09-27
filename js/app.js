const endDate = "10 October 2026 11:59 PM"
document.getElementById("end_Date").innerText = endDate;

const inputs = document.querySelectorAll("input");

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const difference_ = end - now; // here we will get result in seconds 
    // now in next line we are converting that difference into mili-seconds 
    const milsec = difference_ / 1000;
    console.log(end,now);

    // converting to DAYS !!
    // const days = Math.floor(milsec/3600/24);

    inputs[0].value = Math.floor(milsec/3600/24); // DAYS

    inputs[1].value = Math.floor((milsec/3600)%24); // HOURS

    inputs[2].value = Math.floor((milsec/60)%60); // MINUTES

    inputs[3].value = Math.floor((milsec)%60); // SECONDS

}
        // initial call !! 
clock();

setInterval(clock())


