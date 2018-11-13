console.log('Hello, Sheet!');

// update on dom load
window.onload = requestJSON;

// update every 10 seconds
setInterval(requestJSON, 10000);

// request data from google sheets
function requestJSON() {
    fetch('https://spreadsheets.google.com/feeds/list/14PpYj9_NYZNmxKJ-Y4jSVmt0_2Ct4_q9i0jBUztdhDg/default/public/values?alt=json')
        .then(response => response.json())
        .then(gotJSON);
}

// recieve response from google sheets
function gotJSON(json) {
    console.log('Update Data');
    const entries = json.feed.entry;

    console.log(json);
    const date = document.getElementById('date');
    // clear existing items
    date.innerHTML = '';
    // add new items from JSON
    for (const entry of entries) {
        // alias data
        const d = entry.gsx$date.$t;
        // build li w/ template
        const newP = document.createElement('p');
        newP.innerHTML = `${d}`;
        date.appendChild(newP);
    }


    // get the list
    const dearMorgan = document.getElementById('dearMorgan');
    // clear existing items
    dearMorgan.innerHTML = '';

    // add new items from JSON
    for (const entry of entries) {
        // alias data
        const dM = entry.gsx$dearmorgan.$t;
        // build li w/ template
        const newP = document.createElement('p');
        newP.innerHTML = `${dM}`;
        dearMorgan.appendChild(newP);
    }
    // const todayI = document.getElementById('todayI');
    // // clear existing items
    // todayI.innerHTML = '';

    // // add new items from JSON
    // for (const entry of entries) {
    //     // alias data
    //     const tI = entry.gsx$todayi.$t;
    //     // build li w/ template
    //     const newP = document.createElement('p');
    //     newP.innerHTML = `${tI}`;
    //     todayI.appendChild(newP);
    // }

    const iWantedToPunch = document.getElementById('iWantedToPunch');
    // clear existing items
    iWantedToPunch.innerHTML = '';
    // add new items from JSON
    for (const entry of entries) {
        // alias data
        const wP = entry.gsx$iwantedtopunch.$t;
        // build li w/ template
        const newP = document.createElement('p');
        newP.innerHTML = `${wP}`;
        iWantedToPunch.appendChild(newP);
    }
    const pissedYourself = document.getElementById('pissedYourself');
    // clear existing items
    pissedYourself.innerHTML = '';
    // add new items from JSON
    for (const entry of entries) {
        // alias data
        const pY = entry.gsx$youwouldhavepissedyourselfat.$t;
        // build li w/ template
        const newP = document.createElement('p');
        newP.innerHTML = `${pY}`;
        pissedYourself.appendChild(newP);
    }
    const apparently = document.getElementById('apparently');
    // clear existing items
    apparently.innerHTML = '';
    // add new items from JSON
    for (const entry of entries) {
        // alias data
        const a = entry.gsx$apparently.$t;
        // build li w/ template
        const newP = document.createElement('p');
        newP.innerHTML = `<div class = apparentlyjs>${a} </div>`;
        apparently.appendChild(newP);
    }

    const song = document.getElementById('song');
    // clear existing items
    song.innerHTML = '';
    // add new items from JSON
    for (const entry of entries) {
        // alias data
        const songTitle = entry.gsx$songname.$t;
        const link = entry.gsx$songlink.$t;
        // build li w/ template
        const newP = document.createElement('p');
        newP.innerHTML = `<a href="${link}">${songTitle}</a>`;
        song.appendChild(newP);
    }



}