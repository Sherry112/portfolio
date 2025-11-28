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

    .publication-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 15px 20px;
      background-color: var(--light-navy);
      border-radius: var(--border-radius);
      border: 1px solid var(--green);
      margin: 20px 0;
      color: var(--light-slate);
      font-size: var(--fz-md);

      a {
        color: var(--green);
        text-decoration: none;
        font-weight: 600;

        &:hover {
          text-decoration: underline;
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

const IoTHelmetPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "featured/IoTHelmet/helmet.png" }) {
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
        title="IoT Crash Helmet"
        description="A compact IoT device designed to automatically detect motorcycle accidents and alert emergency contacts with real-time location data."
      />
      <StyledProjectPage>
        <div className="project-header">
          <h1>IoT Crash Helmet</h1>
          <p style={{ fontSize: 'var(--fz-xl)', color: 'var(--green)', marginTop: '10px' }}>
            Smart Safety System for Motorcyclists
          </p>
          {image && (
            <div className="project-image">
              <GatsbyImage image={image} alt="IoT Crash Helmet Device" />
            </div>
          )}
          <div className="project-meta">
            <span>Date: April 2022</span>
            <span>Type: Hardware & Embedded Systems</span>
            <span>Status: Research Project</span>
          </div>
          <div className="tech-stack">
            <span>Arduino</span>
            <span>MPU-6050</span>
            <span>GSM (SIM800L)</span>
            <span>SPI / UART</span>
            <span>Thinger.io</span>
            <span>Embedded C</span>
            <span>3D Printing</span>
            <span>PCB Design</span>
          </div>
        </div>

        <div className="project-content">
          <h2>Overview</h2>
          <p>
            The IoT Crash Helmet is a compact, intelligent safety device designed to automatically
            detect motorcycle accidents and immediately alert emergency contacts with real-time
            location data. This innovative system combines MEMS (Micro-Electro-Mechanical Systems)
            tilt sensing, GSM communication, and cloud integration to provide life-saving
            functionality for motorcyclists.
          </p>

          <div className="publication-badge">
            <span>
              <span role="img" aria-label="Document">
                📄
              </span>{' '}
              Published Research:
            </span>
            <a
              href="https://ieeexplore.ieee.org/document/9466055"
              target="_blank"
              rel="noopener noreferrer">
              IEEE Conference Paper
            </a>
          </div>

          <h2>Why was this needed?</h2>
          <p>
            Motorcycle accidents often occur in remote locations where immediate help may not be
            available. In critical situations, every second counts, and delayed emergency response
            can be life-threatening. Traditional safety measures rely on manual intervention, which
            may not be possible if the rider is unconscious or unable to call for help.
          </p>

          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>Automatic Crash Detection</h4>
              <p>
                Uses MPU-6050 MEMS accelerometer and gyroscope to detect sudden impacts and abnormal
                orientation changes indicative of an accident.
              </p>
            </div>
            <div className="feature-card">
              <h4>Real-Time Location Tracking</h4>
              <p>
                Integrates GPS functionality to provide precise location coordinates, enabling
                emergency services to quickly locate the accident site.
              </p>
            </div>
            <div className="feature-card">
              <h4>GSM Emergency Alerts</h4>
              <p>
                Automatically sends SMS alerts to pre-configured emergency contacts via SIM800L GSM
                module, ensuring immediate notification even without internet connectivity.
              </p>
            </div>
            <div className="feature-card">
              <h4>Cloud Integration</h4>
              <p>
                Connects to Thinger.io IoT platform for remote monitoring, data logging, and
                real-time status updates accessible via web dashboard.
              </p>
            </div>
            <div className="feature-card">
              <h4>Compact Design</h4>
              <p>
                Custom 3D-printed enclosure and PCB design ensure the device is lightweight and
                seamlessly integrates into standard motorcycle helmets.
              </p>
            </div>
            <div className="feature-card">
              <h4>Low Power Consumption</h4>
              <p>
                Optimized embedded C firmware ensures efficient power management, allowing extended
                operation on battery power.
              </p>
            </div>
          </div>

          <h2>System Architecture</h2>
          <div className="architecture-diagram">
            <h4>Device Flow</h4>
            <div className="flow">
              <div className="step">MPU-6050 Sensor</div>
              <div className="arrow">→</div>
              <div className="step">Arduino Processing</div>
              <div className="arrow">→</div>
              <div className="step">Crash Detection Algorithm</div>
              <div className="arrow">→</div>
              <div className="step">GSM Alert + Cloud Upload</div>
              <div className="arrow">→</div>
              <div className="step">Emergency Response</div>
            </div>
          </div>

          <h3>Hardware Components</h3>
          <ul>
            <li>
              <strong>Arduino Microcontroller:</strong> Central processing unit running embedded C
              firmware for sensor data processing and system control
            </li>
            <li>
              <strong>MPU-6050:</strong> 6-axis MEMS sensor (3-axis accelerometer + 3-axis
              gyroscope) for detecting orientation changes and impacts
            </li>
            <li>
              <strong>SIM800L GSM Module:</strong> Provides cellular connectivity for SMS alerts and
              GPS location transmission via SPI/UART communication
            </li>
            <li>
              <strong>Custom PCB:</strong> Compact printed circuit board designed to integrate all
              components efficiently
            </li>
            <li>
              <strong>3D-Printed Enclosure:</strong> Custom housing designed to fit securely within
              motorcycle helmets without compromising safety
            </li>
          </ul>

          <h3>Software & Communication</h3>
          <ul>
            <li>
              <strong>Embedded C Firmware:</strong> Low-level programming for efficient sensor data
              processing and crash detection algorithms
            </li>
            <li>
              <strong>SPI/UART Protocols:</strong> Serial communication interfaces for sensor and
              GSM module integration
            </li>
            <li>
              <strong>Thinger.io Platform:</strong> Cloud-based IoT platform for remote monitoring,
              data visualization, and device management
            </li>
            <li>
              <strong>Crash Detection Algorithm:</strong> Intelligent algorithm analyzing
              accelerometer and gyroscope data to distinguish between normal riding and accident
              scenarios
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

IoTHelmetPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IoTHelmetPage;
