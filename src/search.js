function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityInput");
  let mainCity = document.querySelector("#main-city");
  let searchForm = document.querySelector("#searchForm");
  mainCity.innerHTML = `${cityInput.value}`;
  searchForm.addEventListener("submit", search);
}
