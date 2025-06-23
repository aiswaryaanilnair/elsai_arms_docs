---
sidebar_position: 1
---

# Installation

Installation guide for Elsai ARMS. ElsaiARMS can be installed using the following methods:

## Prerequisites

Before installing ElsaiARMS, ensure you have:
- Python 3.12 or higher
- pip package manager
- Git (for GitHub installation method)

## Installation Methods

### 1. Install via pip

```bash
pip install --extra-index-url http://100.27.208.107:3141/root/elsai-arms/+simple/ --trusted-host 100.27.208.107 elsai-arms==0.1.0
```

This installs the latest version of the `elsai-arms` package from your private PyPI repository.

### 2. Install from GitHub

Clone the repository and install locally:

```bash
git clone https://github.com/Scanflow-ai/elsai-arms.git
cd elsai-arms
pip install -e .
```

## Verify Installation

After installation, verify that ElsaiARMS is installed correctly:

```bash
python -c "import elsai_arms; print(elsai_arms.__version__)"
```

## Next Steps

Once installation is complete, proceed to the [Configuration](./configuration.md) guide to set up ElsaiARMS for your environment.