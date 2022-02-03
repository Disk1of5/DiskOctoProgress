var HTTP_OPT = {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'User-Agent' : 'DiskFetch',
        'Accept': '*/*',
     },
}

const UpdateProgress=async()=>{
    const response = await fetch(URL,HTTP_OPT);
    const result = await response.json();
    data[0]["value"]= result["progress"]["completion"];
    if(GUAGE_TITLE_GCODE_NAME==false){
        data[0]["title"]["text"]=GUAGE_TITLE;
    }else{
        data[0]["title"]["text"]=result["job"]["file"]["display"];
    }
    Plotly.redraw('PrintProgress');
};

var prototype_data = [{
      domain: { x: [0, 1], y: [0, 1] },
      value: 0,
      title: { text: "LOADING.." },
      hover: false,
      type: "indicator",
      mode: "gauge+number",
      number:{
          suffix:"%"
      }
    }
  ];
var data=[{...prototype_data[0],gauge}];
console.log(data[0]);
Plotly.newPlot('PrintProgress', data, LAYOUT);
UpdateProgress();
setInterval(()=>{
    UpdateProgress();
  }, 1000 *UPDATE_INTERVAL_SECONDS);

  
