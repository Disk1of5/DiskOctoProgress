//step 1 is to go into OCTOPRINT s/ettings -> API -> Allow CORS (restart required).
// replace URL with your octoprint API url
var URL = "http://YOUR_URL/api/job";
//generate a API key under User Settings and Application Keys
var API_KEY = "YOUR_API_KEY";

// Update every X seconds Default is 10
var UPDATE_INTERVAL_SECONDS = 10;

// Guage Title
    //Setting GUAGE_TITLE_GCODE_NAME set to true will Override the 
    //GUAGE_TITLE value to octoprints project display name
var GUAGE_TITLE_GCODE_NAME = true;
//OR
var GUAGE_TITLE = "Progress %";  // SET GUAGE_TITLE_GCODE_NAME = false for this value to overide.

// Guage Size and Layout
var LAYOUT = { width: 400, height: 300,
    margin: { t: 25, r: 25, l: 25, b: 25 },
    paper_bgcolor: "0000ff",  // you will want to chroma BLUE out in OBS and adjust as needed
    plot_bgcolor:"#ffffff",
    font: { color: "black", family: "Arial" }
};
//guage style please refer to plotly documentation
var gauge= {
	bar: { color: "green" },  // Changes the guage bar color
	axis: { range: [null, 100]},
// you can comment these two ranges out or add your own
	steps: [
	        { range: [0, 89], color: "lightgray" },  
	        { range: [90, 100], color: "gray" }
      ],
      //  red marker at 100%
      threshold: {
        line: { color: "red", width: 4 },
        thickness: 0.75,
        value: 100
      }

    };
