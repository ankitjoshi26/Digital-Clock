const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

document.addEventListener("DOMContentLoaded", () => {   //jaise hamara html css load hoga uske baad ye chlega.
    setInterval(showTime, 1000);    //showTime=(),1000ms == 1sec , setInterval 2 parameter leta hai first hota hai handler (mtlb kya krwana hai), and jo second hota hai wo hota h time (li ye kitne time baad run hota rhe).
})

// to ab hum fatt arrow function bnayenge showTime ke naam se=>

const showTime = () => {
    //to phle variable banayenge date naam se=>

        let date = new Date();  // ye hame corrent date lake dega but isme week day, date ,time but hmne hour,minutes and second hi chahiye

        let hr = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        
        hr = hr<10 ? `0${hr}` : hr;

        time.innerHTML = `${hr} : ${mins} : ${secs}`;

        timeformat.innerHTML = hr> 12 ? "PM": "AM";
        
}