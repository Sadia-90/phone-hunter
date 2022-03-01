const AllPhones = () => {
  const searchText = document.getElementById("search-box").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then((data) => displayPhones(data.data));


}

const displayPhones = (data) => {

  data.forEach((phoneItem) => {
    console.log(phoneItem)

    const parent = document.getElementById("Phone-container");
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
    `;
    parent.appendChild(div);
  });
}