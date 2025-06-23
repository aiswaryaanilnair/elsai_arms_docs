import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

// Simple inline SVG components as placeholders
const MonitoringSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" fill="none"/>
    <path d="M60 100 L80 120 L120 80 L140 100" stroke="currentColor" strokeWidth="3" fill="none"/>
    <circle cx="100" cy="100" r="8" fill="#667eea"/>
  </svg>
);

const FinancialSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="100" height="100" rx="10" stroke="currentColor" strokeWidth="4" fill="none"/>
    <text x="100" y="105" textAnchor="middle" fill="#667eea" fontSize="24" fontWeight="bold">$</text>
    <circle cx="70" cy="70" r="4" fill="#667eea"/>
    <circle cx="130" cy="70" r="4" fill="#667eea"/>
    <circle cx="70" cy="130" r="4" fill="#667eea"/>
    <circle cx="130" cy="130" r="4" fill="#667eea"/>
  </svg>
);

const GovernanceSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,40 140,80 140,140 60,140 60,80" stroke="currentColor" strokeWidth="4" fill="none"/>
    <rect x="80" y="100" width="40" height="40" stroke="currentColor" strokeWidth="3" fill="none"/>
    <circle cx="100" cy="120" r="8" fill="#667eea"/>
  </svg>
);

const DatabaseSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="70" rx="50" ry="15" stroke="currentColor" strokeWidth="4" fill="none"/>
    <ellipse cx="100" cy="100" rx="50" ry="15" stroke="currentColor" strokeWidth="4" fill="none"/>
    <ellipse cx="100" cy="130" rx="50" ry="15" stroke="currentColor" strokeWidth="4" fill="none"/>
    <line x1="50" y1="70" x2="50" y2="130" stroke="currentColor" strokeWidth="4"/>
    <line x1="150" y1="70" x2="150" y2="130" stroke="currentColor" strokeWidth="4"/>
  </svg>
);

const ControlSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="60" width="100" height="80" rx="10" stroke="currentColor" strokeWidth="4" fill="none"/>
    <rect x="70" y="80" width="60" height="8" fill="#667eea"/>
    <rect x="70" y="100" width="40" height="8" fill="#667eea"/>
    <rect x="70" y="120" width="50" height="8" fill="#667eea"/>
    <circle cx="130" cy="45" r="8" fill="#667eea"/>
    <line x1="130" y1="45" x2="100" y2="60" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

const IntegrationSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="70" cy="70" r="20" stroke="currentColor" strokeWidth="4" fill="none"/>
    <circle cx="130" cy="70" r="20" stroke="currentColor" strokeWidth="4" fill="none"/>
    <circle cx="70" cy="130" r="20" stroke="currentColor" strokeWidth="4" fill="none"/>
    <circle cx="130" cy="130" r="20" stroke="currentColor" strokeWidth="4" fill="none"/>
    <line x1="90" y1="70" x2="110" y2="70" stroke="currentColor" strokeWidth="3"/>
    <line x1="70" y1="90" x2="70" y2="110" stroke="currentColor" strokeWidth="3"/>
    <line x1="130" y1="90" x2="130" y2="110" stroke="currentColor" strokeWidth="3"/>
    <line x1="90" y1="130" x2="110" y2="130" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Comprehensive Monitoring & Telemetry',
    Svg: MonitoringSvg,
    description: (
      <>
        Real-time tracking of all AI agent activities with automated logging of interactions, decisions, and outcomes. 
        Custom metrics collection provides deep performance analysis across your entire AI ecosystem.
      </>
    ),
  },
  {
    title: 'Financial Control & Cost Management',
    Svg: FinancialSvg,
    description: (
      <>
        Granular token usage tracking per project and department with real-time cost monitoring and budget alerts. 
        Achieve 20-30% cost savings through better resource allocation and detailed expense reporting.
      </>
    ),
  },
  {
    title: 'AI Governance & Policy Enforcement',
    Svg: GovernanceSvg,
    description: (
      <>
        Built-in governance frameworks ensure responsible AI usage with policy enforcement mechanisms. 
        Comprehensive audit trails support regulatory compliance and internal reviews.
      </>
    ),
  },
  {
    title: 'Centralized Data Architecture',
    Svg: DatabaseSvg,
    description: (
      <>
        MongoDB backend ensures scalable, secure data storage with JSON export capabilities. 
        Structured data management enables seamless integration with visualization and BI tools.
      </>
    ),
  },
  {
    title: 'Enhanced Operational Control',
    Svg: ControlSvg,
    description: (
      <>
        Unified interface manages your entire AI ecosystem from project initiation to performance analysis. 
        Complete visibility into AI operations through a single, comprehensive dashboard.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: IntegrationSvg,
    description: (
      <>
        API-first architecture integrates into existing technology stacks with automated session lifecycle management. 
        Reduces implementation overhead while ensuring consistent governance across deployments.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-label={`${title} feature illustration`} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HeroSection(): ReactNode {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className="text--center">
          <Heading as="h1" className={styles.heroTitle}>
            ElsaiARMS: Agent Resource Management System
          </Heading>
          <p className={styles.heroSubtitle}>
            Comprehensive AI Governance and Monitoring for Modern Organizations
          </p>
          <p className={styles.heroDescription}>
            In today's rapidly evolving AI landscape, organizations are deploying multiple AI agents across various projects and departments. 
            Just as Human Resource Management Systems (HRMS) revolutionized workforce management, <strong>Agent Resource Management System (ARMS)</strong> provides 
            the same level of oversight and control for your AI workforce.
          </p>
          <div className={styles.heroButtons}>
            <a
              className="button button--secondary button--lg"
              href="/docs/intro">
              Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChallengesSection(): ReactNode {
  const challenges = [
    'Lack of visibility into AI agent activities and resource consumption',
    'Uncontrolled costs from token usage across multiple projects',
    'Compliance risks without proper governance frameworks',
    'Data fragmentation across different AI implementations',
    'Difficulty in measuring ROI and performance metrics'
  ];

  return (
    <section className={styles.challengesSection}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2">Why Your Organization Needs ARMS</Heading>
          <p className={styles.sectionDescription}>
            As AI adoption accelerates, organizations face critical challenges:
          </p>
        </div>
        <div className="row">
          <div className="col col--8 col--offset-2">
            <ul className={styles.challengesList}>
              {challenges.map((challenge, idx) => (
                <li key={idx} className={styles.challengeItem}>
                  <strong>{challenge.split(' ')[0]} {challenge.split(' ')[1]}</strong> {challenge.split(' ').slice(2).join(' ')}
                </li>
              ))}
            </ul>
            <p className={styles.solutionText}>
              ElsaiARMS addresses these challenges by providing a centralized command center for all your AI operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <>
      <HeroSection />
      <ChallengesSection />
      <section className={styles.features}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">Core Capabilities</Heading>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}