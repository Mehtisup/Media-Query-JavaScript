<script>
function mediaFunction(z) {
  if (z.matches) {
    document.getElementById("body").style.backgroundColor = "yellow";
    document.getElementById("body").style.color = "black";
  } else {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
  }
}

var z = window.matchMedia("(max-width:500px)");

mediaFunction(z);

z.addListener(mediaFunction);
</script>
