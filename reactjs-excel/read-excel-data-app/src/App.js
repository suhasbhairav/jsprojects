import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import * as XLSX from 'xlsx';

import './App.css';

function App() {

  const onDrop = useCallback(acceptedFiles =>{
    //do something with files
    acceptedFiles.forEach((file)=> {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading aborted')
      reader.onerror = () => console.log('file reading failed')
      reader.onload = () => {
        const bstr = reader.result;
        const wb = XLSX.read(bstr, {type: 'binary'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname]
        const data = XLSX.utils.sheet_to_json(ws, {header:1});
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          console.log(element);
        }
      }
      reader.readAsBinaryString(file);
      //console.log(text);
    })
  }, []);

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});



  return (
    <div {...getRootProps()}>
      <input {...getInputProps} />
      {
        isDragActive ? <p> Drop files </p> : <p> Drag and Drop or click select to upload  </p>
      }
    </div>
  );
}

export default App;
