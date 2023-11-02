document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const gifsContainer = document.getElementById("gifs");
    const removeButton = document.getElementById("removeButton"); 
  
 
    function removeAllGIFs() {
      gifsContainer.innerHTML = "";
    }
  
  
    removeButton.addEventListener("click", removeAllGIFs);
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const searchTerm = document.getElementById("searchBar").value;
      if (searchTerm) {
        const apiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
        const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
        const searchBar = document.getElementById('searchBar');
  
        axios.get(apiUrl)
          .then(function (response) {
            if (response.data.data.length > 0) {
              const gifUrl = response.data.data[0].images.original.url;
              const img = document.createElement('img');
              img.src = gifUrl;
              gifsContainer.appendChild(img);
            } else {
              alert("No GIFs found for the given search term.");
            }
          })
          .catch(function (error) {
            alert("Something went wrong while fetching GIFs");
          });
  
        searchBar.value = "";
      }
    });
  });
  
