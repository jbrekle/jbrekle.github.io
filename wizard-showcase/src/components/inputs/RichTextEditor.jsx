import React, { useState } from 'react';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';

// A rich text editor using react-mde which produces markdown.
// This provides formatting controls and outputs markdown on submit.
function RichTextEditor({ value, onChange }) {
  const [selectedTab, setSelectedTab] = useState('write');

  return (
    <div>
      <ReactMde
        value={value}
        onChange={onChange}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(markdown)
        }
      />
    </div>
  );
}

export default RichTextEditor;
