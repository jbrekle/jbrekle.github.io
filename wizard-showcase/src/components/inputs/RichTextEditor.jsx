import React, { useRef, useEffect } from 'react';

// A basic rich text editor using a contenteditable div.
// NOTE: In a production app you might use a full-featured editor.
function RichTextEditor({ value, onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    // Update innerHTML if value has changed externally.
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  // When the editor loses focus, send the innerHTML value.
  const handleBlur = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  return (
    <div 
      ref={editorRef}
      contentEditable
      onBlur={handleBlur}
      className="border rounded p-2 min-h-[100px]"
      suppressContentEditableWarning={true}
    ></div>
  );
}

export default RichTextEditor;
  
