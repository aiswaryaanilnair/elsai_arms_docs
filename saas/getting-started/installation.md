---
sidebar_position: 1
---

# Installation

Installation guide for Elsai ARMS. ElsaiARMS can be installed using the following methods:

## Prerequisites

Before installing ElsaiARMS, ensure you have:

<div className="prerequisites-container">
  <div className="prerequisites-box">
    <div className="prerequisites-content">
      <div className="prerequisites-list">
        <div className="prerequisite-item">
          <div className="prerequisite-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Python 3.10-3.12</span>
        </div>
        <div className="prerequisite-item">
          <div className="prerequisite-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>pip package manager</span>
        </div>
      </div>
    </div>
  </div>
</div>

## Installation Methods

import InstallationTabs from '@site/src/components/InstallationTabs';

<InstallationTabs 
  command="pip install --index-url https://arms-packages.elsaifoundry.ai/root/elsai-arms-sass/ elsai-arms==1.0.0"
/>

This installs the latest version of the `elsai-arms` package from your private PyPI repository.

## Verify Installation

After installation, verify that ElsaiARMS is installed correctly:

import StyledCodeBlock from '@site/src/components/StyledCodeBlock';

<StyledCodeBlock code="pip show elsai-arms" />

## Upgrade to latest version

To upgrade to latest version of ElsaiARMS:

<StyledCodeBlock code="pip install --index-url https://arms-packages.elsaifoundry.ai/root/elsai-arms-sass/ elsai-arms --upgrade" />

## Next Steps

Once installation is complete, proceed to the [Configuration](./configuration) guide to set up ElsaiARMS for your environment.

<style>{`
  .prerequisites-container {
    margin: 1.5rem 0;
  }

  .prerequisites-box {
    background: linear-gradient(135deg, #f5f9ff 0%, #e8f4fd 100%);
    border-left: 4px solid #1976d2;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.08);
    overflow: hidden;
  }

  .prerequisites-content {
    padding: 1.5rem;
  }

  .prerequisites-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .prerequisite-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #1565c0;
    font-weight: 500;
  }

  .prerequisite-icon {
    color: #1976d2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .prerequisites-box {
    background: linear-gradient(135deg, #1e2a4a 0%, #16213e 100%);
    border-left-color: #64b5f6;
  }

  [data-theme='dark'] .prerequisite-item {
    color: #e3f2fd;
  }

  [data-theme='dark'] .prerequisite-icon {
    color: #90caf9;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .prerequisites-content {
      padding: 1.25rem;
    }
    
    .prerequisites-list {
      gap: 0.625rem;
    }
  }
`}</style>
