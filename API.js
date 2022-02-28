const Allphones = () => {
    const searchValue = document.getElementById("search-box").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then((data) => console.log(data));

    console.log(searchValue);
}


// fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)