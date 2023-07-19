const express = require('express');

const router = express.Router();

const multer = require('multer');

const multerStorage = multer.diskStorage({
 
    destination: (req, file, cb) => {
      // Get the type of file.

        cb(null, "tmp/csv/");
    },
    filename: (req, file, cb) => {
      // Combine the Date in milliseconds and original name and pass as filename
      cb(null, `${Date.now()}.${file.originalname}`);
    },
  });

  const fs = require('fs');
  const testFolder = './tmp/csv/';
const csv = require('fast-csv');
const upload = multer({ storage: multerStorage });

const path = require('path');


router.get('/home',async (req , res)=>{
    let Csvs =[];
    
     fs.readdirSync(testFolder).forEach(file => {
        let obj ={};
        let date  = parseInt( file.split(".")[0].trim());
         let  time = new Date(date);
            
        // getdate in a defined format
       
            
        obj.date =  time.getDate() +"/"+ time.getMonth()+"/"+time.getFullYear();
        obj.time = time.getHours() +":"+ time.getMinutes();   
        obj.file= file;
        obj.filename =  file.split(".")[1];
        Csvs.push(obj);
      });

      console.log(Csvs);
      return res.render('home',{'csvs':Csvs});
});


router.post('/',upload.single('file') , function (req, res) {
    let fileRows = [];
    
    console.log('inside route');
    console.log(req.file);
    // open uploaded file
    //  csv.parseFile(req.file.path,{objectMode:true})
    //  .on('error', error => console.error(error))
    //  .on('data', row => fileRows.push(row))
    //  .on('end', (rowCount) =>res.status(200).json({fileRows, rowCount })) ;
        return res.redirect('back');
  });
  
  
  router.get('/view/csv/:csvfile',(req , res)=>{
  
      console.log(req.params.csvfile);
      let fileRows=[];

       fs.readdirSync(testFolder).forEach(file => {

          if(file == req.params.csvfile){
              console.log(file);
              csv.parseFile(path.join(testFolder,file),{objectMode:true})
              .on('error', error => console.error(error))
              .on('data', row => fileRows.push(row))
              .on('end', (rowCount) =>{return  res.render('viewCsv',{fileRows})}) ;
              }
        });
  
        
  })


module.exports = router;