---
sidebar_position: 3
---

# Release Notes

## Version 1.3.0

**Current Version** - Latest release

### Added
- **Web Search Metrics**: Comprehensive tracking for web search operations across OpenAI, Gemini, Claude, and Perplexity
  - Sources count, citations count, Search queries
- **Web Search Cost Tracking**: Separate cost calculation with provider-specific pricing models
- **Enhanced Cost Reporting**: Separate `token_cost` field and updated `cost` field that includes web search costs

### Fixed
- **Model Name Matching**: Improved logic to correctly identify specific model versions for accurate pricing

---

## Version 1.2.5

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Fixed
- Token usage recovery and defensive metrics updates

---

## Version 1.2.4

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Fixed
- SDK API key validation errors
- Duplicate project records during agent tracing

---

## Version 1.2.3

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Fixed
- Bug fixes and stability improvements

---

## Version 1.2.2

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Added
- Agent monitoring and distributed tracing capabilities

---

## Version 1.2.1

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Fixed
- Claude cost calculation issues
- Bug fixes and performance improvements

---

## Version 1.2.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Changed
- Enhanced security measures and data protection

---

## Version 1.1.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Changed
- Complete database storage architecture overhaul

---

## Version 1.0.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

### Added
- RAG and embedding monitoring
- Content quality assessment
- GPT-5 model support

---

## Version 0.1.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.3.0 or later.

</div>

**Internal Release**

### Added
- LLM and OCR monitoring capabilities
- Foundation for ElsaiARMS SaaS platform

---

<style>{`
  .deprecated-notice {
    background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
    border-left: 4px solid #f39c12;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(243, 156, 18, 0.15);
  }

  .deprecated-notice strong {
    color: #d68910;
    font-weight: 600;
  }

  /* Dark theme adjustments */
  [data-theme='dark'] .deprecated-notice {
    background: linear-gradient(135deg, #3d2817 0%, #4a2c0f 100%);
    border-left-color: #f39c12;
  }

  [data-theme='dark'] .deprecated-notice strong {
    color: #f39c12;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .deprecated-notice {
      padding: 0.875rem 1.25rem;
      font-size: 0.9rem;
    }
  }
`}</style>
