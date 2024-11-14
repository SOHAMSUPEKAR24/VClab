function filterExperiments() {
    let input = document.getElementById("searchInput");
    let filter = input.value.toLowerCase();
    let ul = document.getElementById("experimentList");
    let li = ul.getElementsByTagName("li");
  
    // Loop through all list items and hide those that don't match the search query
    for (let i = 0; i < li.length; i++) {
      let a = li[i].getElementsByTagName("a")[0];
      let txtValue = a.textContent || a.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  