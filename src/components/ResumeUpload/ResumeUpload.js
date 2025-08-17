import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
`;

const ResumeSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.backgroundSecondary};
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
  animation: ${fadeInUp} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  h2 {
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

const ResumeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const ResumeInfo = styled.div`
  animation: ${slideInLeft} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  h3 {
    font-size: ${theme.fontSize['2xl']};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.lg};
    font-weight: 600;
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin-bottom: ${theme.spacing.lg};
    line-height: 1.6;
  }
`;

const InfoCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  margin-bottom: ${theme.spacing.lg};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &:hover {
    transform: translateY(-4px);
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: ${theme.shadows.lg};
  }
  
  .card-header {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.md};
    margin-bottom: ${theme.spacing.md};
    
    .icon {
      width: 40px;
      height: 40px;
      background: ${theme.colors.gradients.primary};
      border-radius: ${theme.borderRadius.lg};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: ${theme.colors.white};
    }
    
    h4 {
      font-size: ${theme.fontSize.lg};
      color: ${theme.colors.textPrimary};
      margin: 0;
      font-weight: 600;
    }
  }
  
  p {
    color: ${theme.colors.textSecondary};
    margin: 0;
    line-height: 1.5;
  }
`;

const ResumeForm = styled.form`
  background: ${theme.colors.white};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  animation: ${slideInRight} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
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
  
  input, select {
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
  
  select {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
    background-position: right ${theme.spacing.sm} center;
    background-repeat: no-repeat;
    background-size: 16px 12px;
    appearance: none;
    cursor: pointer;
    
    &:hover {
      border-color: ${theme.colors.gray[400]};
    }
    
    &:focus {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 3px ${theme.colors.primary}20;
    }
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

const FileUpload = styled.div`
  border: 2px dashed ${theme.colors.gray[300]};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  text-align: center;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;
  
  &:hover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.primary}05;
  }
  
  &.dragover {
    border-color: ${theme.colors.primary};
    background: ${theme.colors.primary}10;
  }
  
  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  
  .upload-icon {
    font-size: 3rem;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
    animation: ${pulse} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  }
  
  .upload-text {
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.textPrimary};
    margin-bottom: ${theme.spacing.sm};
    font-weight: 500;
  }
  
  .upload-hint {
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.textSecondary};
  }
  
  .file-info {
    margin-top: ${theme.spacing.md};
    padding: ${theme.spacing.md};
    background: ${theme.colors.success}10;
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.colors.success}30;
    
    .file-name {
      font-weight: 500;
      color: ${theme.colors.success};
      margin-bottom: ${theme.spacing.xs};
    }
    
    .file-size {
      font-size: ${theme.fontSize.sm};
      color: ${theme.colors.textSecondary};
    }
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
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  margin-top: ${theme.spacing.lg};
  
  &:hover {
    background: ${theme.colors.gradients.secondary};
    transform: translateY(-2px);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

const ResumeUpload = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    facilityType: '',
    position: '',
    experience: ''
  });
  
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload a PDF or Word document (.pdf, .doc, .docx)');
      return;
    }
    
    if (file.size > maxSize) {
      alert('File size must be less than 5MB');
      return;
    }
    
    setSelectedFile(file);
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
    
    if (!formData.position.trim()) {
      newErrors.position = 'Desired position is required';
    }
    
    if (!selectedFile) {
      newErrors.resume = 'Please upload your resume';
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
        position: '',
        experience: ''
      });
      setSelectedFile(null);
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <ResumeSection>
      <Container>
        <SectionHeader>
          <h2>Join Our Team</h2>
          <p>
            Share your resume with us and take the first step towards joining our mission 
            to improve healthcare through innovative patient identification solutions.
          </p>
        </SectionHeader>

        <ResumeContent>
          <ResumeInfo>
            <h3>Why Work With Us?</h3>
            <p>
              Join a team that's passionate about making a difference in healthcare. 
              We offer competitive benefits, professional growth opportunities, and a 
              supportive work environment.
            </p>
            
            <InfoCard>
              <div className="card-header">
                <div className="icon">💼</div>
                <h4>Career Growth</h4>
              </div>
              <p>
                Continuous learning opportunities, mentorship programs, and clear career 
                progression paths to help you advance in your professional journey.
              </p>
            </InfoCard>
            
            <InfoCard>
              <div className="card-header">
                <div className="icon">🏥</div>
                <h4>Healthcare Impact</h4>
              </div>
              <p>
                Be part of a team that directly improves patient safety and healthcare 
                efficiency through innovative technology solutions.
              </p>
            </InfoCard>
            
            <InfoCard>
              <div className="card-header">
                <div className="icon">🤝</div>
                <h4>Collaborative Culture</h4>
              </div>
              <p>
                Work in an environment that values teamwork, creativity, and mutual 
                respect. We believe in supporting each other's success.
              </p>
            </InfoCard>
          </ResumeInfo>

          <ResumeForm onSubmit={handleSubmit}>
            <h3>Submit Your Resume</h3>
            
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
            
            <FormRow>
              <FormGroup>
                <label htmlFor="position">Desired Position *</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="e.g., Software Engineer, Sales Manager"
                />
                {errors.position && <div className="error">{errors.position}</div>}
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="experience">Years of Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <label>Resume Upload *</label>
              <FileUpload
                className={isDragOver ? 'dragover' : ''}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                />
                
                {!selectedFile ? (
                  <>
                    <div className="upload-icon">📄</div>
                    <div className="upload-text">Upload your resume</div>
                    <div className="upload-hint">
                      Drag and drop your file here, or click to browse<br />
                      Supported formats: PDF, DOC, DOCX (Max 5MB)
                    </div>
                  </>
                ) : (
                  <div className="file-info">
                    <div className="file-name">✓ {selectedFile.name}</div>
                    <div className="file-size">{formatFileSize(selectedFile.size)}</div>
                  </div>
                )}
              </FileUpload>
              {errors.resume && <div className="error">{errors.resume}</div>}
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage>
                Thank you for your application! We'll review your resume and get back to you within 5-7 business days.
              </SuccessMessage>
            )}
          </ResumeForm>
        </ResumeContent>
      </Container>
    </ResumeSection>
  );
};

export default ResumeUpload;
