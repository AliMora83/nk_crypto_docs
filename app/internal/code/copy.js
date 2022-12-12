<script>
  function copyCode() {
    // get the text inside the code container
    var text = document.getElementById("code-container").innerText;

    // create a temporary element to hold the text
    var tempInput = document.createElement("input");
    tempInput.value = text;

    // add the element to the page and select the text
    document.body.appendChild(tempInput);
    tempInput.select();

    // copy the text to the clipboard
    document.execCommand("copy");

    // remove the temporary element
    document.body.removeChild(tempInput);
  }
</script>