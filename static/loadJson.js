let firstCall = true;

function showMovies(data) {
    let ParentElement = document.getElementById("movieTable");
    let howMany = (firstCall? 11 : data.length);
    for (let i=data.length-(firstCall?1:12); i>=data.length-howMany; --i) {
        let tr = document.createElement("tr");
        let tdname = document.createElement("td");
        tdname.textContent = data[i].title;
        tr.appendChild(tdname);

        let tdyear = document.createElement("td");
        tdyear.textContent = data[i].year;
        tr.appendChild(tdyear);

        let tdcast = document.createElement("td");
        if(data[i].cast.length) {
            tdcast.textContent = data[i].cast[0];
            for(let j=1; j<data[i].cast.length; ++j) {
                tdcast.textContent+=(", "+data[i].cast[j]);
            }
        }
        tr.appendChild(tdcast);

        let tdgenres = document.createElement("td");
        if(data[i].genres.length) {
            tdgenres.textContent = data[i].genres[0];
            for (let j=1; j<data[i].genres.length; ++j) {
                tdgenres.textContent+=(", "+data[i].genres[j]);
            }
        }
        tr.appendChild(tdgenres);

        ParentElement.appendChild(tr);
    }
    let button = document.getElementById("firstButton");
    if(firstCall) {
        button.textContent = "View ALL Movies";
        firstCall = false;
    }
    else {
        button.parentElement.removeChild(button);
    }
}

// function first10Movies(data) {
//
//
//     console.log(data[0]);
//
//
//     showMovies(data, false);
//     let button = document.getElementById("firstButton");
//     button.textContent = "View ALL Movies";
//     button.onclick(AllMovies({{MOVIES}}));
// }
//
// function AllMovies(data) {
//     showMovies(data, true);
//
// }