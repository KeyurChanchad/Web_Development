getAndUpdate = ()=>{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var genders = document.getElementsByName("gender");
    var gender;
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
            break;
        }
    }
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;

    let obj = {name, email, mobile, gender, city, address};
    console.log(obj);

    if (localStorage.getItem("data") === null) {
        jsonArray = [];
        jsonArray.push([obj]);
        localStorage.setItem('data', JSON.stringify(jsonArray));
    }
    else{
        jsonArrayStr = localStorage.getItem('data');
        jsonArray = JSON.parse(jsonArrayStr);
        jsonArray.push([obj]);
        localStorage.setItem('data', JSON.stringify(jsonArray));
    }
    update();
}

function update(){
    if (localStorage.getItem('data')==null){
        jsonArray = []; 
        localStorage.setItem('data', JSON.stringify(jsonArray));
    } 
    else{
        jsonArrayStr = localStorage.getItem('data');
        jsonArray = JSON.parse(jsonArrayStr); 
    }

     // Populate the table
     let tableBody = document.getElementById("tableBody");
     let str = "";
     let counter = 1;
     jsonArray.forEach((element, index) => {
         str += `
        <tr>
            <td> ${counter++}    </td>
            <td> ${element[0].name} </td>
            <td> ${element[0].email} </td>
            <td> ${element[0].mobile} </td>
            <td> ${element[0].gender} </td>
            <td> ${element[0].city} </td>
            <td> ${element[0].address} </td>
            <td> <button onclick=deleted(${index})> Delete </button> </td>
        </tr>`;
    });
    html = str;
    tableBody.innerHTML = html;
}

//calling update first so all data loaded first
update();


function deleted(index) {
    jsonArrayStr = localStorage.getItem('data');
    jsonArray = JSON.parse(jsonArrayStr);
    jsonArray.splice(index, 1);
    localStorage.setItem('data', JSON.stringify(jsonArray))
    update();
}

