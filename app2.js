async function fetchData() {
  try {
    const response = await fetch(`/js.json`);
    const dataObj = await response.json();
    console.log(dataObj[0]);
    // let c = dataObj.map((ele, index, array) => {
    //   console.log(ele.name);
    // });
  } catch (error) {
    console.log(Error(error));
  }
}
fetchData();
