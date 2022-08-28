window.addEventListener("load", function() {
  let body = document.querySelector("body");
  const ol = document.createElement("ol");
  ol.setAttribute("id", "favorite-flavors")
  body.append(ol);
  let flavorsILike = "I like...";
  const arrayOfFlavorsILike = ['Vanilla', 'Chocolate', 'Sherbert'];

  arrayOfFlavorsILike.forEach(function(thing) {
    const li = document.createElement("li");
    li.append(flavorsILike + thing + "!");
    ol.append(li);
  });
});


/*window.addEventListener("load", function() {
  const firstHeader = document.querySelector("h1");
  firstHeader.remove();
})*/
