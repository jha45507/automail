import { useEffect, useState } from "react";
export default function Home() {
  // let arr = ['Timestamp', 'Name', 'Email', 'Description', 'Contact'];
  // const [jsonData, setJsonData] = useState();
  // async function fetchData() {
  //   try {
  //     const res = await fetch('https://script.google.com/macros/s/AKfycbzVViYi_Y7Knw9dJmksUBhMK16YPSkSvI6Ovq0-7MVFOpDUwQ4Ytk9Wf0PFV_2Z7-_AkA/exec');
  //     let result = await res.json();
  //     result = result.content;
  //     result.unshift(arr)
  //     let formattedData = [];
  //     for (let i = 1; i < result.length; i++) {
  //       let obj = {};
  //       let currentRow = result[i];
  //       for (let j = 0; j < currentRow.length; j++) {
  //         obj[result[0][j]] = currentRow[j];
  //       }
  //       formattedData.push(obj);
  //     } 
  //     setJsonData(formattedData);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // function filterData(filter) {
  //   if (localStorage.length === 0) {
  //     localStorage.setItem('data', JSON.stringify(filter))
  //   } else {
  //     const uniqueObjects = filter.reduce((acc, current) => {
  //       const existingObject = acc.find(obj => obj.Email === current.Email);
  //       if (!existingObject) {
  //         return acc.concat(current);
  //       }
  //       return acc;
  //     }, []);
  //     localStorage.setItem('data', JSON.stringify(uniqueObjects))
  //   }
  //   let myData = JSON.parse(localStorage.getItem('data'));
  //   for (let k in myData) {
  //     const postData = myData[k];
  //     fetch('/api/mail', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(postData),
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log('Response from backend:', data);
  //       })
  //       .catch(error => {
  //         console.error('Error:', error);
  //       });
  //   }
  // }
  // useEffect(() => {
  //   // setInterval(() => {
  //   fetchData();
  //   // }, 900000);
  // }, []);

  // useEffect(() => {
  //   if (jsonData) {
  //     filterData(jsonData);
  //   }
  // }, [jsonData]);

  return (
    <div className="w-full h-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfBARGUR-bl7HrCNj5vCOj93kyDTJG2SgUwc3O05RAMAtR7Qg/viewform?embedded=true"
        width="100%"
        height="912">
        Loading…
      </iframe>
    </div>
  );
}


// let getData = localStorage.getItem('data');
// let json = JSON.parse(getData)
// let local = json.map(i => i)
// let diffData = filter.map(item => local.filter(i => item.Email !== i.Email))
// let sameData = filter.map(item => local.filter(i => item.Email === i.Email))
// console.log(sameData)
// console.log(diffData)
// diffData[0].push(sameData[0][0])