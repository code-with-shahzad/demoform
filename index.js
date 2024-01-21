let isShowError = false;
const input_1 = document.getElementById("input_1");
const input_2 = document.getElementById("input_2");
const input_3 = document.getElementById("input_3");
const selectedValue = input_3.getAttribute("data-value");
const tooltip_1 = document.getElementById("tooltip_1");
const tooltip_2 = document.getElementById("tooltip_2");
const tooltip_3 = document.getElementById("tooltip_3");

const numberValidataion = () => {};
const handleSubmit = (e) => {
  e.preventDefault();
  const selectInput = document.getElementById("input_3");
  tooltip_1.style.visibility =
    input_1.value.trim() === "" ? "visible" : "hidden";
  tooltip_2.style.visibility = input_2.value.match(/^05\d{8}$/)
    ? "hidden"
    : "visible";
  tooltip_3.style.visibility =
    selectInput.getAttribute("data-value") == "" ? "visible" : "hidden";
  isShowError = true;

  if (
    input_1.value &&
    input_2.value.match(/^05\d{8}$/) &&
    selectInput.getAttribute("data-value")
  ) {
    const url = "https://danydin.github.io/landpage_23/ajax-contact.php";
    const data = {
      fullname: input_1.value,
      phone: input_2.value,
      branch: selectInput.getAttribute("data-value"),
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error("Error:", error));
  }
};
const handleChange = () => {
  if (!input_2.value.match(/^05\d{8}$/) && input_2.value != "") {
    tooltip_2.innerText = "מספר הטלפון אינו תקין";
  } else {
    tooltip_2.innerText = "יש למלא את השדה";
  }
  if (isShowError) {
    tooltip_1.style.visibility =
      input_1.value.trim() === "" ? "visible" : "hidden";
    tooltip_2.style.visibility = input_2.value.match(/^05\d{8}$/)
      ? "hidden"
      : "visible";
  }
};

const toggleDropdown = () => {
  var dropdown = document.getElementById("scrollbar-inner");
  var btn = document.getElementById("btn");
  dropdown.style.visibility =
    dropdown.style.visibility === "visible" ? "hidden" : "visible";
  btn.style.zIndex = dropdown.style.visibility === "hidden" ? "100" : "0";
};

function selectOption(option) {
  const dataValue = option.getAttribute("data-value");
  input_3.setAttribute("data-value", dataValue);
  tooltip_3.style.visibility = selectedValue != "" ? "visible" : "hidden";
  input_3.innerText = option.innerText;
  toggleDropdown();
}
