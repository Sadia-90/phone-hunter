const AllPhones = () => {
  // document.getElementById('Phone-container').innerHTML = "";
  const searchText = document.getElementById("search-box").value;



  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then((data) => displayPhones(data.data));


}

const displayPhones = (data) => {
  // console.log(data);
  const parent = document.getElementById("Phone-container");
  const limit = data.slice(0, 20)
  console.log(limit)
  // error

  if (data.length == 0) {
    parent.innerHTML ='no result found'
  }
  else {
    parent.textContent =""
    limit.forEach((phoneItem) => {
      // console.log(phoneItem)
      // const parent = document.getElementById("Phone-container");
      const div = document.createElement("div");
      div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${phoneItem.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title">${phoneItem.phone_name}</h3>
         <h5>Category: ${phoneItem.brand}</h5>
   
    <button onclick="information('${phoneItem.slug}')" type="button" id="info-btn" class="btn btn-primary">See Details</button>
</div>
</div>
    `;
      parent.appendChild(div);
      // console.log(phoneItem)
    })
  }
};
// info detail

const information = (id) => {
  // const detailsDiv = document.getElementById('details-div');
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then((data) => displayId(data.data));
}

const displayId = (data) => {
  // console.log(data);
  // releaseDate

  let releaseEvent = "";
  if (data.releaseDate == "") {
    releaseEvent = "No release date found"
  }
  else {
    releaseEvent = data.releaseDate;
  }
  document.getElementById('details-div').innerHTML = `
    <div>
   <img src="${data.image}" alt="...">
   <h1>Name:${data.name} </h1>
   <h3>release date:${releaseEvent} </h3>
   <p class="card-text">${data.mainFeatures.storage}</p>
   <p class="card-text">${data.mainFeatures.chipSet}</p>
   <p class="card-text">${data.mainFeatures.memory}</p>
   <p class="card-text">${data.mainFeatures.sensors}</p>
     </div>
    `
  //   const div = document.createElement("div")
  //  detailsDiv.appendChild(div);


}