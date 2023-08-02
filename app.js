const jsonField = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const convertedValue = document.getElementById("converted-value");

submitBtn.addEventListener("click", () => {
  try {
    let csv = "";
    const parsedJSON = JSON.parse(jsonField.value);
    const jsonKeys = Object.keys(parsedJSON);
    const jsonValues = Object.values(parsedJSON);

    let index = 0;
    jsonKeys.forEach((key) => {
      index++;
      if (index === jsonKeys.length) {
        csv += key + `\n`;
      } else {
        csv += key + ", ";
      }
    });

    index = 0;
    jsonValues.forEach((value) => {
      index++;
      if (index === jsonValues.length) {
        csv += value + `\n`;
      } else {
        csv += value + ", ";
      }
    });
    console.log(csv);
  } catch (error) {
    console.log(error);
    console.log("Error. Please enter a correct JSON string.");
  }
});
