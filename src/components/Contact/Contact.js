import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ContactSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.backgroundSecondary};
  margin-top: 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${theme.colors.gradients.healthcare};
    opacity: 0.02;
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    padding: 0 ${theme.spacing.lg};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  animation: ${fadeInUp} 1s ease-out;
  
  h1 {
    font-size: ${theme.fontSize['4xl']};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.lg};
    background: ${theme.colors.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize['3xl']};
    }
  }
  
  p {
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.textSecondary};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSize.lg};
    }
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const ContactInfo = styled.div`
  animation: ${slideInLeft} 1s ease-out;
  
  h2 {
    font-size: ${theme.fontSize['2xl']};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.lg};
    font-weight: 600;
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.xl};
    line-height: 1.6;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
  
  .icon {
    width: 50px;
    height: 50px;
    background: ${theme.colors.gradients.primary};
    border-radius: ${theme.borderRadius.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    flex-shrink: 0;
  }
  
  .content {
    flex: 1;
    
    h3 {
      font-size: ${theme.fontSize.lg};
      color: ${theme.colors.textPrimary};
      margin-bottom: ${theme.spacing.xs};
      font-weight: 600;
    }
    
    p {
      color: ${theme.colors.textSecondary};
      margin: 0;
      line-height: 1.5;
    }
    
    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${theme.colors.primaryDark};
      }
    }
  }
`;

const ContactForm = styled.form`
  background: ${theme.colors.white};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  animation: ${slideInRight} 1s ease-out;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  label {
    display: block;
    margin-bottom: ${theme.spacing.sm};
    font-weight: 500;
    color: ${theme.colors.textPrimary};
    font-size: ${theme.fontSize.sm};
  }
  
  input, textarea, select {
    width: 100%;
    padding: ${theme.spacing.md};
    border: 1px solid ${theme.colors.gray[300]};
    border-radius: ${theme.borderRadius.md};
    font-size: ${theme.fontSize.base};
    transition: all 0.3s ease;
    font-family: inherit;
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primary}20;
    }
    
    &::placeholder {
      color: ${theme.colors.gray[400]};
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
  
  .error {
    color: ${theme.colors.error};
    font-size: ${theme.fontSize.sm};
    margin-top: ${theme.spacing.xs};
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.gradients.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.fontSize.lg};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: ${theme.spacing.lg};
  
  &:hover {
    background: ${theme.colors.gradients.secondary};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background: ${theme.colors.success}20;
  color: ${theme.colors.success};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.success}40;
  margin-top: ${theme.spacing.lg};
  text-align: center;
  font-weight: 500;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    facilityType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        facilityType: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <ContactSection>
      <Container>
        <SectionHeader>
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team to learn more about our patient identification solutions 
            and how we can help improve your healthcare facility's efficiency and safety.
          </p>
        </SectionHeader>

        <ContactContent>
          <ContactInfo>
            <h2>Get in Touch</h2>
            <p>
              Our team is here to help you find the perfect patient identification solution 
              for your healthcare facility. Reach out to us for personalized support and expert guidance.
            </p>
            
            <ContactItem>
              <div className="icon">📍</div>
              <div className="content">
                <h3>Address</h3>
                <p>
                  18 King Street East, Suite 1400<br />
                  Toronto, ON, Canada M5C 1C4
                </p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">📞</div>
              <div className="content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:4163639313">416.363.9313</a><br />
                  <a href="tel:18003879848">1.800.387.9848</a>
                </p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">✉️</div>
              <div className="content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@medirex.com">info@medirex.com</a>
                </p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <div className="icon">🕒</div>
              <div className="content">
                <h3>Support Hours</h3>
                <p>24/7 Support Available</p>
              </div>
            </ContactItem>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            
            <FormRow>
              <FormGroup>
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <div className="error">{errors.firstName}</div>}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <div className="error">{errors.lastName}</div>}
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="facilityType">Facility Type</label>
                <select
                  id="facilityType"
                  name="facilityType"
                  value={formData.facilityType}
                  onChange={handleChange}
                >
                  <option value="">Select facility type</option>
                  <option value="hospital">Hospital</option>
                  <option value="clinic">Clinic</option>
                  <option value="nursing-home">Nursing Home</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="laboratory">Laboratory</option>
                  <option value="other">Other</option>
                </select>
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your needs and how we can help..."
              />
              {errors.message && <div className="error">{errors.message}</div>}
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage>
                Thank you for your message! We'll get back to you within 24 hours.
              </SuccessMessage>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
