import React, { useState } from 'react';
import styles from './styles.module.css';

interface StyledCodeBlockProps {
  code: string;
}

export default function StyledCodeBlock({ code }: StyledCodeBlockProps): React.JSX.Element {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={styles.styledCodeBlock}>
      <div className={styles.codeContent}>
        <code>{code}</code>
        <button
          className={styles.copyButton}
          onClick={() => copyToClipboard(code)}
          title="Copy to clipboard"
        >
          {copySuccess ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4V2C8 1.44772 8.44772 1 9 1H19C19.5523 1 20 1.44772 20 2V16C20 16.5523 19.5523 17 19 17H17M8 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H16C16.5523 20 17 19.5523 17 19V17M8 4H9C9.55228 4 10 4.44772 10 5V7C10 7.55228 9.55228 8 9 8H8V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
} 