let isShowError = false;

const handleSubmit = () => {
  const input_1 = document.getElementById("input_1");
  const input_2 = document.getElementById("input_2");
  const input_3 = document.getElementById("input_3");

  const tooltip_1 = document.getElementById("tooltip_1");
  const tooltip_2 = document.getElementById("tooltip_2");
  const tooltip_3 = document.getElementById("tooltip_3");

  tooltip_1.style.visibility =
    input_1.value.trim() === "" ? "visible" : "hidden";
  tooltip_2.style.visibility =
    input_2.value.trim() === "" ? "visible" : "hidden";
  tooltip_3.style.visibility = input_3.value === "" ? "visible" : "hidden";
  isShowError = true;
};
const handleChange = (e) => {
  const input_1 = document.getElementById("input_1");
  const input_2 = document.getElementById("input_2");
  const input_3 = document.getElementById("input_3");

  const tooltip_1 = document.getElementById("tooltip_1");
  const tooltip_2 = document.getElementById("tooltip_2");
  const tooltip_3 = document.getElementById("tooltip_3");
  if (isShowError) {
    tooltip_1.style.visibility =
      input_1.value.trim() === "" ? "visible" : "hidden";
    tooltip_2.style.visibility =
      input_2.value.trim() === "" ? "visible" : "hidden";
    tooltip_3.style.visibility = input_3.value === "" ? "visible" : "hidden";
  }
};
