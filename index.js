import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};
const reverseAndCapitalize = (sentence) => {
    const reversed = sentence.split('').reverse().join('');
    const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);
    return capitalized;
};

const reversedSentence = reverseAndCapitalize('type markdown here');
console.log(reversedSentence);

export default MarkdownEditor;

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];    

const names = data.flatMap(group => group.map(person => person.name));
console.log(names);
const ages = data.flatMap(group => group.map(person => person.age));
console.log(ages);