---
sidebar_position: 3
---

# Release Notes

## Version 1.2.5

**Current Version** - Latest release

### Fixed
- **Smart Token Usage Recovery**: Implemented a robust recovery mechanism for missing `token_usage` fields in older projects. The system now automatically recalculates token usage from historical run data instead of defaulting to zero, preventing data loss and `KeyError` crashes.
- **Defensive Metrics Update**: Added safety checks in `_update_llm_metrics` to initialize missing token usage data from the current run if needed.

---

## Version 1.2.4

**Current Version** - Latest release

### Fixed
- **API Key Validation**: Fixed SDK API key validation errors
- **Project Information Loading**: Fixed duplicate project records created during agent tracing

---

## Version 1.2.3

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.2.4 or later.

</div>

### Fixed
- Various bug fixes and stability improvements
- Resolved issues reported in previous versions

---

## Version 1.2.2

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.2.4 or later.

</div>

### Added
- **Agent Monitoring**: Comprehensive monitoring capabilities for AI agents
- Enhanced tracking and observability for agent-based workflows

---

## Version 1.2.1

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.2.4 or later.

</div>

### Fixed
- Fixed Claude cost calculation issues
- Resolved various bugs and performance issues

---

## Version 1.2.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.2.4 or later.

</div>

### Changed
- **Improved Security**: Enhanced security measures and protocols
- Better data protection and access controls

---

## Version 1.1.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.2.4 or later.

</div>

### Changed
- **Restructured Database Storage**: Complete overhaul of database storage architecture
- Improved data organization and retrieval performance
- Enhanced scalability and efficiency

---

## Version 1.0.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.2.4 or later.

</div>

### Added
- **RAG Monitoring**: Comprehensive monitoring for Retrieval-Augmented Generation operations
- **Embedding Monitoring**: Full tracking and analysis of embedding generation
- **Basic Content Quality Assessment**: Initial content quality evaluation features
- **GPT-5 Support**: Added support for GPT-5 models

---

## Version 0.1.0

<div className="deprecated-notice">

⚠️ **Deprecated** - This version is no longer supported. Please upgrade to version 1.2.4 or later.

</div>

**Internal Release**

### Added
- **LLM Monitoring**: Initial LLM (Large Language Model) monitoring capabilities
- **OCR Monitoring**: Optical Character Recognition monitoring and tracking
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
