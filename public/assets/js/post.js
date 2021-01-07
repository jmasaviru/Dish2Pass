$(document).ready(() => {
  $("#post").on("click", event => {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("click");

    const newRecipe = {
      spoonacularId: 12345,
      name: $("#name").data("id"),
      imageUrl: $("#image").data("id"),
      summary: $("#summary").data("id"),
      type: "favorite"
    };

    // Send the POST request.
    $.ajax("/api/recipes", {
      type: "POST",
      data: newRecipe
    }).then(() => {
      console.log("added a new suggested/favorited recipe");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
