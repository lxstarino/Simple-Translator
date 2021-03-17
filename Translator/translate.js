const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");

textInput.addEventListener("keyup", (e) => {
  const input = e.target.value.toLowerCase();
  const output = input
    .split(" ")
    .map((word) => 
    {
        switch(word)
        {
            case "one":
                word = "eins";
                break;
            case "two":
                word = "zwei";
                break;
            case "three":
                word = "drei";
                break;
            case "hello":
                word = "hallo";
                break;
        }
        return (word);
    })
    .join(" ");
     textOutput.value = output;
});
