import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Layout, Head } from '@components';
import styled from 'styled-components';

const StyledProjectPage = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 50px;

  @media (max-width: 768px) {
    padding: 80px 25px;
  }

  .project-header {
    margin-bottom: 50px;

    h1 {
      font-size: clamp(40px, 5vw, 60px);
      margin-bottom: 10px;
      color: var(--lightest-slate);
    }

    .project-image {
      margin: 40px 0;
      border-radius: var(--border-radius);
      overflow: hidden;
      ${({ theme }) => theme.mixins.boxShadow};

      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }

    .project-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin-top: 20px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 30px;

      span {
        padding: 5px 12px;
        background-color: var(--light-navy);
        border-radius: var(--border-radius);
        color: var(--green);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
      }
    }
  }

  .project-content {
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.6;

    h2 {
      color: var(--lightest-slate);
      font-size: clamp(24px, 5vw, 32px);
      margin-top: 50px;
      margin-bottom: 20px;
    }

    h3 {
      color: var(--lightest-slate);
      font-size: clamp(20px, 4vw, 24px);
      margin-top: 40px;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 20px;
    }

    ul {
      ${({ theme }) => theme.mixins.fancyList};
      margin: 20px 0;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 30px 0;

      .feature-card {
        padding: 20px;
        background-color: var(--light-navy);
        border-radius: var(--border-radius);
        border: 1px solid transparent;
        transition: var(--transition);

        &:hover {
          border-color: var(--green);
          transform: translateY(-5px);
        }

        h4 {
          color: var(--green);
          font-family: var(--font-mono);
          font-size: var(--fz-sm);
          margin-bottom: 10px;
        }

        p {
          margin: 0;
          font-size: var(--fz-md);
        }
      }
    }

    .architecture-diagram {
      margin: 40px 0;
      padding: 30px;
      background-color: var(--light-navy);
      border-radius: var(--border-radius);
      border-left: 3px solid var(--green);

      h4 {
        color: var(--green);
        font-family: var(--font-mono);
        margin-bottom: 15px;
      }

      .flow {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
        justify-content: center;

        .step {
          padding: 10px 15px;
          background-color: var(--navy);
          border-radius: var(--border-radius);
          color: var(--lightest-slate);
          font-size: var(--fz-sm);
        }

        .arrow {
          color: var(--green);
          font-size: 20px;
        }
      }
    }
  }

  .back-link {
    ${({ theme }) => theme.mixins.button};
    display: inline-block;
    margin-top: 50px;
  }
`;

const DocExtractorPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "featured/DocExtractor/doc-extractor.png" }) {
        childImageSharp {
          gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.image);

  return (
    <Layout location={location}>
      <Head
        title="Document Extractor"
        description="A web app that processes emails and PDF attachments across multiple Microsoft 365 mailboxes with AI-powered structured data extraction."
      />
      <StyledProjectPage>
        <div className="project-header">
          <h1>Document Extractor</h1>
          <p style={{ fontSize: 'var(--fz-xl)', color: 'var(--green)', marginTop: '10px' }}>
            AI-Powered Document Processing System
          </p>
          {image && (
            <div className="project-image">
              <GatsbyImage image={image} alt="Document Extractor Application Screenshot" />
            </div>
          )}
          <div className="project-meta">
            <span>Date: December 2024</span>
            <span>Role: Full-Stack Engineer</span>
            <span>Status: Production</span>
          </div>
          <div className="tech-stack">
            <span>React</span>
            <span>Express</span>
            <span>Azure Logic Apps</span>
            <span>Microsoft Graph API</span>
            <span>OpenAI GPT</span>
            <span>Azure AI Document Intelligence</span>
            <span>CI/CD</span>
          </div>
        </div>

        <div className="project-content">
          <h2>Overview</h2>
          <p>
            Document Extractor is a comprehensive web application designed to process large volumes
            of documents with minimal effort. The system automatically extracts clean, structured
            data directly from incoming emails and PDF attachments across multiple Microsoft 365
            mailboxes, transforming unstructured documents into actionable JSON data using
            AI-powered processing.
          </p>

          <h2>Problem Statement</h2>
          <p>
            Organizations receive hundreds of documents daily through email, requiring manual
            processing and data entry. This process is time-consuming, error-prone, and doesn't
            scale. Document Extractor automates this entire workflow, enabling businesses to process
            documents at scale with high accuracy.
          </p>

          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Multi-Mailbox Processing</h4>
              <p>
                Monitors and processes emails from multiple Microsoft 365 mailboxes simultaneously,
                ensuring no document is missed.
              </p>
            </div>
            <div className="feature-card">
              <h4>Intelligent Extraction</h4>
              <p>
                Uses OpenAI GPT and Azure Document Intelligence to extract structured data from
                unstructured documents with enforced JSON schemas.
              </p>
            </div>
            <div className="feature-card">
              <h4>High-Accuracy OCR</h4>
              <p>
                Leverages Azure AI Document Intelligence for advanced OCR capabilities, ensuring
                accurate text extraction from scanned documents and images.
              </p>
            </div>
            <div className="feature-card">
              <h4>Scalable Architecture</h4>
              <p>
                Built with Azure Logic Apps and direct file handling for scalability, processing
                thousands of documents efficiently.
              </p>
            </div>
            <div className="feature-card">
              <h4>Secure Storage</h4>
              <p>
                All attachments are securely stored in Azure Blob Storage with proper access
                controls and encryption.
              </p>
            </div>
            <div className="feature-card">
              <h4>Automated Workflow</h4>
              <p>
                End-to-end automation from email receipt to structured data output, reducing manual
                intervention to zero.
              </p>
            </div>
          </div>

          <h2>Architecture</h2>
          <div className="architecture-diagram">
            <h4>Processing Flow</h4>
            <div className="flow">
              <div className="step">Microsoft 365 Mailboxes</div>
              <div className="arrow">→</div>
              <div className="step">Azure Logic Apps</div>
              <div className="arrow">→</div>
              <div className="step">Azure Blob Storage</div>
              <div className="arrow">→</div>
              <div className="step">OpenAI GPT + Document Intelligence</div>
              <div className="arrow">→</div>
              <div className="step">Structured JSON Output</div>
            </div>
          </div>

          <h3>Technology Stack</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> React-based web interface for monitoring and managing
              document processing workflows
            </li>
            <li>
              <strong>Backend:</strong> Express.js API server handling business logic and
              orchestration
            </li>
            <li>
              <strong>Integration:</strong> Azure Logic Apps for workflow automation and Microsoft
              Graph API for email and mailbox access
            </li>
            <li>
              <strong>AI Processing:</strong> OpenAI GPT for intelligent data extraction and Azure
              AI Document Intelligence for OCR
            </li>
            <li>
              <strong>Storage:</strong> Azure Blob Storage for secure document storage
            </li>
            <li>
              <strong>DevOps:</strong> CI/CD pipelines for automated deployment and updates
            </li>
          </ul>

          <h2>Technical Highlights</h2>
          <h3>Enforced JSON Schema</h3>
          <p>
            The system uses enforced JSON schemas to ensure consistent data extraction across
            different document types. This guarantees that all extracted data follows a predefined
            structure, making it easy to integrate with downstream systems and databases.
          </p>

          <h3>Scalable Processing</h3>
          <p>
            Built with Azure Logic Apps and direct file handling, the system can process thousands
            of documents concurrently without performance degradation. The architecture is designed
            to scale horizontally as document volume increases.
          </p>

          <h3>High-Accuracy OCR</h3>
          <p>
            By combining Azure AI Document Intelligence's advanced OCR capabilities with OpenAI
            GPT's natural language understanding, the system achieves high accuracy in extracting
            structured data from both typed and handwritten documents.
          </p>

          <h2>Impact</h2>
          <p>
            Document Extractor has transformed how organizations handle document processing,
            reducing manual effort by over 90% and improving data accuracy significantly. The system
            processes documents 24/7, ensuring that critical information is extracted and made
            available in real-time.
          </p>

          <a href="/" className="back-link">
            ← Back to Home
          </a>
        </div>
      </StyledProjectPage>
    </Layout>
  );
};

DocExtractorPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default DocExtractorPage;
