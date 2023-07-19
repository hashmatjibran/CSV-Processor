
const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");
var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;

$(document).ready(function () {
    $('#checkCsv').show();
    $('#submitCsv').hide();

    $('#checkCsv').click(function (e) { 
        e.preventDefault();
        if (regex.test(csvFile.value.toLowerCase())) {
            console.log(csvFile.files[0]);
            csvFile.nextElementSibling.innerHTML = "";
    
    
          // SANITY CHECKS - MODIFY AS NEEDED
          var fil = document.getElementById('csvFile');
          if (fil.files[0].size > 5048) {
            alert('File size cannot be bigger than 5K');
            return false;
          }
          
          $('#checkCsv').hide();
          $('#submitCsv').show();
        }
        else{
            console.log('file rejected');
            csvFile.nextElementSibling.innerHTML = "please select a Csv file only";
                   
        }
    });


});
















// myForm.addEventListener("submit", async function (e) {
//    e.preventDefault();
       

//             let formData = new FormData();
//             formData.append('file',csvFile.files[0]);

//             console.log(formData)


//            await $.ajax({
//                 type: "post",
//                 url: "/",
//                 data: formData,
//                 processData:false,
//                 success: function (response) {
//                     console.log(success);
//                 },
//                 error : function (err) { console.log(err) },
//                 crossDomain:true
//             });


//         }
   

// });