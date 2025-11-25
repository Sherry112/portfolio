import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }
`;

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 50px;
  display: inline-block;
  cursor: pointer;
`;

const StyledForm = styled.form`
  margin-top: 50px;
  text-align: left;
  animation: fadeInUp 0.5s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
  }

  input,
  textarea {
    width: 100%;
    background-color: var(--light-navy);
    color: var(--lightest-slate);
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    padding: 12px 16px;
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.5;
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--green);
      box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
    }

    &::placeholder {
      color: var(--slate);
      opacity: 0.5;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  .honeypot {
    position: absolute;
    left: -9999px;
    opacity: 0;
    pointer-events: none;
  }

  .submit-button {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 20px;
    width: 100%;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  .form-message {
    margin-top: 20px;
    padding: 12px 16px;
    border-radius: var(--border-radius);
    text-align: center;
    font-size: var(--fz-sm);

    &.success {
      background-color: rgba(100, 255, 218, 0.1);
      color: var(--green);
      border: 1px solid var(--green);
    }

    &.error {
      background-color: rgba(255, 0, 0, 0.1);
      color: #ff6b6b;
      border: 1px solid #ff6b6b;
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status message when user starts typing
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thanks! I\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
        // Hide form after successful submission (optional - you can remove this if you want to keep it open)
        setTimeout(() => {
          setShowForm(false);
          setStatus({ type: '', message: '' });
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Oops! There was an error. Please try again or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What's Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        My inbox is always open. Whether you have a question or just want to say hi, I'll try my
        best to get back to you!
      </p>

      {!showForm ? (
        <StyledButton onClick={() => setShowForm(true)}>Say Hello</StyledButton>
      ) : (
        <StyledForm
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}>
          {/* Hidden form name for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field for spam protection */}
          <div className="honeypot">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="name">
              Name <span style={{ color: 'var(--green)' }}>*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email <span style={{ color: 'var(--green)' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message <span style={{ color: 'var(--green)' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status.message && <div className={`form-message ${status.type}`}>{status.message}</div>}
        </StyledForm>
      )}
    </StyledContactSection>
  );
};

export default Contact;
