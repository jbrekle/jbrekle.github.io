import React from 'react';
import ReactMarkdown from 'react-markdown';

interface BigTileChoiceProps {
  options: Array<{ id: string; label: string; explaination?: string; image?: string }>;
  value: string;
  onChange: (value: string) => void;
}

const BigTileChoice: React.FC<BigTileChoiceProps> = ({ options, value, onChange }) => {
  return (
    <div className="flex space-x-2 my-4 custom-bigtile-container">
      {options.map(option => {
        const isSelected = value === option.id;
        return (
          <div
            key={option.id}
            className={`border rounded p-4 flex-1 cursor-pointer hover:shadow-lg transition-shadow custom-bigtile-tile ${isSelected ? 'bg-gray-300' : 'bg-white'} mx-2`}
            onClick={() => onChange(option.id)}
          >
            <div className="text-lg font-bold mb-2">{option.label}</div>
            {option.image && (
              <img src={option.image} alt={option.label} className="w-full h-32 object-cover mb-2" />
            )}
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => <p {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal ml-6" {...props} />
              }}
            >
              {option.explaination || ""}
            </ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
};

export default BigTileChoice;
  
