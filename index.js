
window.onkeyup = keyup;
let inputTextValue;

let dropdown = document.getElementById('Name');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Customer';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = './Guests.json';

fetch(url)
  .then(
    function (response) {
      if (response.status !== 200) {
        console.warn('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response  
      response.json().then(function (data) {
        let option;
      // console.log(data[0])
        for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
          option.text = data[i].firstName;
          option.value = data[i].firstName;
          dropdown.add(option);
        }
      });
    }
  )
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });
let dropdown1 = document.getElementById('Property');
dropdown1.length = 0;

let defaultOption1 = document.createElement('option');
defaultOption1.text = 'Property';

dropdown1.add(defaultOption1);
dropdown1.selectedIndex = 0;

const url1 = './Companies.json';

fetch(url1)
  .then(
    function (response) {
      if (response.status !== 200) {
        console.warn('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response  
      response.json().then(function (data) {
        let option1;

        for (let i = 0; i < data.length; i++) {
          option1 = document.createElement('option');
          option1.text = data[i].company;
          option1.value = data[i].company;
          dropdown1.add(option1);
        }
      });
    }
  )
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });

function GetSelectedValue() {
  // var e = document.getElementById("option");
  // var result = e.options[e.selectedIndex].value;
  // document.getElementById("output").innerHTML = result;
     let values = [];
      for(let i =0; i < dropdown.options.length; i++){
          if(dropdown.options[i].selected){
              values.push(dropdown.options[i].value);
          }
      }
      let props = [];
      for(let i =0; i < dropdown1.options.length; i++){
          if(dropdown1.options[i].selected){
              props.push(dropdown1.options[i].value);
          }
      }

      let rooms = [];
      fetch(url).then(
        function (response) {
          response.json().then(function (data) {
            let obj;

            for( let i = 0; i < data.length; i++){
              

              if(values[0] === data[i].firstName){
                obj = data[i];
                rooms.push(obj.reservation.roomNumber);
                 console.log(rooms)
              }
            }
          })
        }
      )
    // let messageTemplate = {
    //     table: []
    // };
    
    // fs.writeFile('Message.json', json, 'utf8')
    
    
   document.getElementById("output").innerHTML = values + ", Your room " + rooms + " at " + props + " is ready!";
  
};  

function keyup(e) {
  inputTextValue = e.target.value;
}

// let textArea = JSON.parse(document.getElementById('customMessage').value);

function GetInputValue() {
  document.getElementById("output").innerHTML = inputTextValue;
  console.log(inputTextValue)
}