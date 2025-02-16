import React from 'react';

// A file upload input.
function FileUpload({ onChange }) {
  // When a file is selected, send the file object.
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
  };

  return (
    <input 
      type="file"
      onChange={handleFileChange}
      className="border rounded p-2"
    />
  );
}

export default FileUpload;
  
