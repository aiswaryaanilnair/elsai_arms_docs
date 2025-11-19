---
sidebar_position: 1
---

# Getting Started

<div className="content-section">
  <div className="content-card">
    <div className="card-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <p className="feature-text">
      ElsaiARMS transforms AI operations from reactive management to proactive governance. Organizations implementing ARMS typically see immediate improvements in cost visibility, compliance posture, and operational efficiency.
    </p>
  </div>

  <div className="content-card">
    <div className="card-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 3V9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <p className="feature-text">
      The system's modular architecture allows for phased implementation, starting with core monitoring and expanding to full governance capabilities as your AI maturity grows.
    </p>
  </div>

  <div className="content-card highlight">
    <div className="card-icon">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <p className="feature-text">
      <em>Ready to bring order to your AI ecosystem? <a href="mailto:elsai.support@optisolbusiness.com?subject=ElsaiARMS%20On-Prem%20Request" className="cta-link">Contact us</a> to schedule a demonstration of how ElsaiARMS can transform your AI governance and monitoring capabilities.</em>
    </p>
  </div>
</div>

<style>{`
  .getting-started-hero {
    background: linear-gradient(135deg, var(--ifm-color-primary) 0%, var(--ifm-color-primary-light) 100%);
    color: white;
    padding: 3rem 2rem;
    margin: -2rem -2rem 2rem -2rem;
    border-radius: 0 0 1rem 1rem;
    text-align: center;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .main-title {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: white;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    font-weight: 300;
  }

  .content-section {
    max-width: 900px;
    margin: 0 auto;
  }

  .content-card {
    background: white;
    border: 1px solid #e1e5e9;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;
    position: relative;
  }

  .content-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--ifm-color-primary-light);
  }

  .content-card.highlight {
    background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
    border-color: var(--ifm-color-primary);
    box-shadow: 0 4px 20px rgba(6, 23, 95, 0.1);
  }

  .card-icon {
    color: var(--ifm-color-primary);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-icon svg {
    transition: transform 0.3s ease;
  }

  .content-card:hover .card-icon svg {
    transform: scale(1.1);
  }

  .feature-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #2c3e50;
    margin: 0;
    font-weight: 400;
  }

  .cta-link {
    color: var(--ifm-color-primary);
    text-decoration: none;
    font-weight: 600;
    border-bottom: 2px solid var(--ifm-color-primary);
    transition: all 0.3s ease;
  }

  .cta-link:hover {
    color: var(--ifm-color-primary-dark);
    border-bottom-color: var(--ifm-color-primary-dark);
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .content-card {
    background: #1a1a1a;
    border-color: #333;
    color: #e1e1e1;
  }

  [data-theme='dark'] .content-card.highlight {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border-color: var(--ifm-color-primary-light);
  }

  [data-theme='dark'] .feature-text {
    color: #e1e1e1;
  }

  [data-theme='dark'] .getting-started-hero {
    background: linear-gradient(135deg, var(--ifm-color-primary-dark) 0%, var(--ifm-color-primary) 100%);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .getting-started-hero {
      padding: 2rem 1rem;
      margin: -1rem -1rem 1.5rem -1rem;
    }

    .main-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .content-card {
      padding: 1.5rem;
      margin-bottom: 1rem;
    }

    .card-icon {
      margin-bottom: 1rem;
    }

    .card-icon svg {
      width: 40px;
      height: 40px;
    }
  }
`}</style>