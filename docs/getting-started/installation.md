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
pip install --index-url https://arms-packages.elsaifoundry.ai/root/elsai-arms/ elsai-arms==0.1.1
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
pip show elsai-arms
```

## Upgrade to latest version

To upgrade to latest version of ElsaiARMS:

```bash
pip install --index-url https://arms-packages.elsaifoundry.ai/root/elsai-arms/ elsai-arms --upgrade
```

## Next Steps

Once installation is complete, proceed to the [Configuration](./configuration.md) guide to set up ElsaiARMS for your environment.
