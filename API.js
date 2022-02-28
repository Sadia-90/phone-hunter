const Allphones = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then((data) => displayPhones(data.status));

    console.log(searchValue);
}


const displayPhones = (status) => {
    data.forEach((phoneItem) => {


        const parent = document.getElementById("Phone-container");
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
    `;
        parent.appendChild(div);
    });
}