import React, { useState } from 'react';
import styles from './styles.module.css';

interface ConfigDetailsDropdownProps {
  children: React.ReactNode;
}

export default function ConfigDetailsDropdown({ children }: ConfigDetailsDropdownProps): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleConfigDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.configDetailsDropdown}>
      <div 
        className={`${styles.dropdownHeader} ${isExpanded ? styles.expanded : ''}`}
        onClick={toggleConfigDetails}
      >
        <div className={styles.dropdownIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span>View Detailed Configuration Information</span>
        <div className={styles.dropdownArrow}>
          {isExpanded ? '▼' : '▶'}
        </div>
      </div>
      
      <div className={`${styles.dropdownContent} ${isExpanded ? styles.expanded : ''}`}>
        {children}
      </div>
    </div>
  );
} 