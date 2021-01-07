$(document).ready(() => {
  $("#searchbtn").on("click", () => {
    const value = $("#searchbar")
      .val()
      .trim();
    window.open(`/search/${value}`);
  });
});
