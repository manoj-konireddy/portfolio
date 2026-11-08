# Konireddy Manoj Kumar Reddy — Personal Portfolio

<p align="center">
  <strong>Software Developer | Cloud Computing | Cyber Security</strong><br>
  A responsive portfolio showcasing selected software projects, technical skills, architecture decisions, certifications, and learning outcomes.
</p>

<p align="center">
  <a href="https://github.com/manoj-konireddy">GitHub</a> ·
  <a href="https://www.linkedin.com/in/manoj-konireddy/">LinkedIn</a>
</p>

---

## About This Portfolio

This repository contains the source code for my personal portfolio. It brings together my technical background and a curated selection of five projects spanning cloud-based applications, backend development, automation, AI-assisted data workflows, and web security.

Each featured project has a dedicated case-study page describing its purpose, problem statement, proposed solution, implementation, features, technical architecture, workflow, challenges, and learning outcomes. Architecture diagrams and relevant application screenshots are included where available.

> **Hosting status:** The previous AWS-hosted portfolio and project demonstrations are no longer active. This repository is intended for reviewing the portfolio source code and project documentation. Project links point to their GitHub repositories; they should not be interpreted as currently running live demonstrations.

## Portfolio at a Glance

- Responsive personal portfolio built with HTML, CSS, and JavaScript.
- Professional introduction, technical skills, certifications, and contact links.
- Five selected project case studies with dedicated detail pages.
- Architecture diagrams and project screenshots.
- Resume available from the portfolio website.
- Links to individual project repositories and my wider GitHub profile.

## Featured Projects

The projects below are the five projects selected for this portfolio. They are not intended to represent every repository or experiment on my GitHub profile.

### 1. AWS File Sharing Platform

A cloud-based file-sharing application built with Python and FastAPI. The documented implementation includes user registration and login, file handling through Amazon S3, and MySQL metadata storage using Amazon RDS. The project also documents its earlier EC2, Nginx, and CloudFront deployment setup; that hosted demonstration is no longer active.

- **Technology:** Python, FastAPI, MySQL, Amazon S3, Amazon RDS, EC2, Nginx, CloudFront
- **Case study:** [View Case Study](projects/aws-file-sharing-platform.html)
- **Repository:** [aws-file-sharing-platform](https://github.com/manoj-konireddy/aws-file-sharing-platform)

**Architecture Diagram**

![AWS File Sharing Platform Architecture](architecture/file-sharing-architecture.png)

### 2. AWS Image Compression Pipeline

A serverless image-processing project that uses Python and AWS services to process and optimize uploaded images. The case study explains the S3- and Lambda-based workflow, architecture, implementation choices, and validation of generated output.

- **Technology:** Python, AWS Lambda, Amazon S3, API Gateway, CloudFront
- **Case study:** [View Case Study](projects/image-compressor.html)
- **Repository:** [AWS-Image-Compression-Pipeline](https://github.com/manoj-konireddy/AWS-Image-Compression-Pipeline)

**Architecture Diagram**

![AWS Image Compression Pipeline Architecture](architecture/image-compression-architecture.png)

### 3. Web Security Analyzer

A Python web application for reviewing website security-related signals. Its documented scan areas include security headers, SSL/TLS information, cookie settings, and generated scan results.

- **Technology:** Python, Flask, HTML, CSS, JavaScript, HTTP, SSL/TLS
- **Case study:** [View Case Study](projects/web-security-analyzer.html)
- **Repository:** [Web-Security-Analyzer](https://github.com/manoj-konireddy/Web-Security-Analyzer)

**Architecture Diagram**

![Web Security Analyzer Architecture](architecture/web-security-architecture.png)

### 4. Forward Deployed Engineer — Context Graph QA

An AI-assisted question-answering application designed to work with contextual business information. The project documentation describes its API, data flow, example business questions, engineering decisions, and integration with an LLM provider.

- **Technology:** Python, FastAPI, SQLite, OpenRouter, JavaScript
- **Case study:** [View Case Study](projects/forward-deployed-engineer.html)
- **Repository:** [Forward-Deployed-Engineer](https://github.com/manoj-konireddy/Forward-Deployed-Engineer)

**Architecture Diagram**

![Forward Deployed Engineer Architecture](architecture/forward-deployed-architecture.png)

### 5. Play-to-Payout Engine

A payout-management application documenting a merchant payout processing workflow. Its case study covers the payout lifecycle, backend components, engineering decisions, and the role of asynchronous processing in the application design.

- **Technology:** Python, Django REST Framework, PostgreSQL, Celery, Redis, React
- **Case study:** [View Case Study](projects/playto-payout-engine.html)
- **Repository:** [playto-payout-engine](https://github.com/manoj-konireddy/playto-payout-engine)

**Architecture Diagram**

![Play-to-Payout Engine Architecture](architecture/payout-management-architecture.png)

### Explore More Projects

These five projects are a curated portfolio selection. Visit [my GitHub profile](https://github.com/manoj-konireddy) to explore my other public repositories.

---

## Technical Skills Represented

The following technologies appear across the portfolio and its featured project documentation. They describe the tools and concepts represented in the projects, not a claim that every technology is used by the portfolio website itself.

| Area | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript, responsive web design, React |
| Backend | Python, FastAPI, Flask, Django REST Framework |
| Databases and storage | MySQL, PostgreSQL, SQLite, Amazon S3, Amazon RDS |
| Cloud and serverless | AWS EC2, AWS Lambda, Amazon CloudFront, API Gateway, IAM |
| Background processing | Celery, Redis |
| AI integration | OpenRouter |
| Development tools | Git, GitHub, VS Code, Linux, Nginx |
| Security topics | HTTP security headers, SSL/TLS analysis, cookie security review |

## Architecture and Screenshots

Architecture diagrams are maintained in the `architecture/` directory and displayed above in their respective project sections. Application screenshots are stored in `screenshots/` and are used by the relevant project pages.

## Repository Structure

```text
portfolio/
├── index.html                   # Main portfolio page
├── certifications.html          # Certifications and learning achievements
├── style.css                    # Shared website styling
├── gallery.js                   # Gallery interactions
├── manoj_resume.pdf             # Resume displayed by the portfolio
├── projects/                    # Five individual project case studies
├── architecture/                # Project architecture diagrams
├── screenshots/                 # Project application screenshots
├── images/                      # Profile and certification images
└── README.md                    # Repository documentation
```

## Run the Portfolio Locally

The portfolio is a static website and does not require a backend service for its main pages.

1. Clone the repository:

   ```bash
   git clone https://github.com/manoj-konireddy/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in a browser.

3. Alternatively, start a simple local server from the repository root:

   ```bash
   python -m http.server 8000
   ```

4. Visit `http://localhost:8000` in your browser.

## Learning and Development

Building and documenting these projects has provided practical exposure to:

- Structuring responsive web pages with HTML, CSS, and JavaScript.
- Building backend applications and REST API workflows with Python frameworks.
- Working with relational databases and object storage.
- Understanding cloud-based and serverless application architectures.
- Documenting application workflows, technical decisions, and trade-offs.
- Reviewing web security signals and presenting scan results.
- Organizing project source code, documentation, and version control with Git and GitHub.

## Certifications

The portfolio's [Certifications page](certifications.html) presents the certificates and learning achievements included in the website. Certificate images are retained in the `images/` directory.

## Contact

**Konireddy Manoj Kumar Reddy**

- GitHub: [github.com/manoj-konireddy](https://github.com/manoj-konireddy)
- LinkedIn: [linkedin.com/in/manoj-konireddy](https://www.linkedin.com/in/manoj-konireddy/)

---

If you would like to discuss a project or opportunity, feel free to connect through GitHub or LinkedIn.
