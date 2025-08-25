import React, { useState } from 'react';
import styles from './styles.module.css';

interface MetricsRow {
  field: string;
  description: string;
}

interface CollapsibleMetricsProps {
  title: string;
  metrics: MetricsRow[];
}

export default function CollapsibleMetrics({ title, metrics }: CollapsibleMetricsProps): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMetrics = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.metricsSection}>
      <div className={styles.metricsHeader} onClick={toggleMetrics}>
        <span className={`${styles.metricsArrow} ${isExpanded ? styles.expanded : ''}`}>
          ▶
        </span>
        <h3>{title}</h3>
      </div>
      <div className={`${styles.metricsContent} ${isExpanded ? styles.expanded : ''}`}>
        <table className={styles.metricsTable}>
          <thead>
            <tr>
              <th>Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric, index) => (
              <tr key={index}>
                <td><strong>{metric.field}</strong></td>
                <td>{metric.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 