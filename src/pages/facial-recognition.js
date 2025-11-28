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

const FacialRecognitionPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "projects/images/facial-recog.png" }) {
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
        title="Factory Face-Recognition Check-In System"
        description="A secure, touch-free check-in system where factory employees register and verify their identity using facial recognition."
      />
      <StyledProjectPage>
        <div className="project-header">
          <h1>Factory Face-Recognition Check-In System</h1>
          <p style={{ fontSize: 'var(--fz-xl)', color: 'var(--green)', marginTop: '10px' }}>
            Touch-Free Employee Authentication & Attendance Tracking
          </p>
          {image && (
            <div className="project-image">
              <GatsbyImage image={image} alt="Facial Recognition Check-In System" />
            </div>
          )}
          <div className="project-meta">
            <span>Date: November 2022</span>
            <span>Company: ThingTrax</span>
            <span>Type: Enterprise Application</span>
            <span>Status: Production</span>
          </div>
          <div className="tech-stack">
            <span>Azure Face API</span>
            <span>Azure Functions</span>
            <span>Azure Blob Storage</span>
            <span>React / React Native</span>
            <span>REST APIs</span>
            <span>TypeScript</span>
          </div>
        </div>

        <div className="project-content">
          <h2>Overview</h2>
          <p>
            The Factory Face-Recognition Check-In System is a secure, touch-free authentication
            solution designed for factory environments. The system enables employees to register and
            verify their identity using facial recognition technology, eliminating the need for
            physical contact or manual attendance tracking. Built with Azure Face API and cloud
            storage, the system provides reliable authentication, real-time attendance recording,
            and streamlined workforce management.
          </p>

          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Touch-Free Authentication</h4>
              <p>
                Employees can check in without any physical contact, improving hygiene and reducing
                the spread of germs in factory environments.
              </p>
            </div>
            <div className="feature-card">
              <h4>Azure Face API Integration</h4>
              <p>
                Leverages Microsoft's Azure Face API for high-accuracy facial recognition, ensuring
                reliable identity verification even in varying lighting conditions.
              </p>
            </div>
            <div className="feature-card">
              <h4>Real-Time Attendance Tracking</h4>
              <p>
                Automatically records employee check-in times in real-time, providing immediate
                visibility into workforce attendance.
              </p>
            </div>
            <div className="feature-card">
              <h4>Cross-Platform Support</h4>
              <p>
                Built with React and React Native, supporting both web and mobile interfaces for
                flexible deployment options.
              </p>
            </div>
            <div className="feature-card">
              <h4>Secure Cloud Storage</h4>
              <p>
                Employee facial data and attendance records are securely stored in Azure Blob
                Storage with proper encryption and access controls.
              </p>
            </div>
            <div className="feature-card">
              <h4>Serverless Architecture</h4>
              <p>
                Uses Azure Functions for scalable, cost-effective backend processing that
                automatically scales with demand.
              </p>
            </div>
          </div>

          <h2>System Architecture</h2>
          <div className="architecture-diagram">
            <h4>Authentication Flow</h4>
            <div className="flow">
              <div className="step">Employee Registration</div>
              <div className="arrow">→</div>
              <div className="step">Face Capture</div>
              <div className="arrow">→</div>
              <div className="step">Azure Face API</div>
              <div className="arrow">→</div>
              <div className="step">Azure Functions</div>
              <div className="arrow">→</div>
              <div className="step">Blob Storage</div>
              <div className="arrow">→</div>
              <div className="step">Attendance Recorded</div>
            </div>
          </div>

          <h3>Technology Stack</h3>
          <ul>
            <li>
              <strong>Azure Face API:</strong> Microsoft's cloud-based facial recognition service
              providing accurate face detection, verification, and identification capabilities
            </li>
            <li>
              <strong>Azure Functions:</strong> Serverless compute service handling authentication
              logic, data processing, and API endpoints
            </li>
            <li>
              <strong>Azure Blob Storage:</strong> Scalable cloud storage for employee facial data,
              attendance records, and system logs
            </li>
            <li>
              <strong>React / React Native:</strong> Cross-platform frontend framework enabling both
              web and mobile applications with shared codebase
            </li>
            <li>
              <strong>TypeScript:</strong> Type-safe programming language ensuring code quality and
              maintainability
            </li>
            <li>
              <strong>REST APIs:</strong> Standardized API architecture for seamless communication
              between frontend and backend services
            </li>
          </ul>

          <h2>Use Cases</h2>
          <ul>
            <li>
              <strong>Employee Check-In:</strong> Quick and secure employee authentication at the
              start of shifts
            </li>
            <li>
              <strong>Attendance Tracking:</strong> Automated recording of employee attendance
              without manual intervention
            </li>
            <li>
              <strong>Access Control:</strong> Integration with factory access systems for secure
              area entry
            </li>
            <li>
              <strong>Workforce Analytics:</strong> Real-time visibility into employee attendance
              patterns and trends
            </li>
            <li>
              <strong>Compliance Reporting:</strong> Automated generation of attendance reports for
              regulatory compliance
            </li>
          </ul>

          <a href="/" className="back-link">
            ← Back to Home
          </a>
        </div>
      </StyledProjectPage>
    </Layout>
  );
};

FacialRecognitionPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default FacialRecognitionPage;
