$(document).ready(() => {
  $("#searchbtn").on("click", () => {
    const value = $("#searchbar")
      .val()
      .trim();
    window.location.assign(`/search/${value}`);
  });
});
