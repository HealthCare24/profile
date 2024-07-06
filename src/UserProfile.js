import React, { useState } from 'react';
import {
  Container, TextField, Button, Grid, Typography, FormControl, InputLabel, MenuItem, Select, FormControlLabel, Checkbox, Paper, Box, Divider
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    emailAddress: '',
    emergencyContact: '',
    residentialAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    bloodType: '',
    allergies: '',
    chronicConditions: '',
    medications: '',
    primaryCarePhysician: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    smokingStatus: '',
    alcoholConsumption: '',
    exerciseHabits: '',
    dietaryPreferences: '',
    pastMedicalConditions: '',
    surgeries: '',
    familyMedicalHistory: '',
    vaccinationRecords: '',
    preferredLanguage: '',
    accessibilityNeeds: '',
    consentDataSharing: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Company Name</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Basic Information */}
            <Grid item xs={12}>
              <Typography variant="h6">Basic Information</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="fullName"
                label="Full Name"
                fullWidth
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="dateOfBirth"
                label="Date of Birth"
                type="date"
                fullWidth
                value={formData.dateOfBirth}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phoneNumber"
                label="Phone Number"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="emailAddress"
                label="Email Address"
                type="email"
                fullWidth
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="emergencyContact"
                label="Emergency Contact Information"
                fullWidth
                value={formData.emergencyContact}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <Typography variant="h6">Address</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="residentialAddress"
                label="Residential Address"
                fullWidth
                value={formData.residentialAddress}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                label="City"
                fullWidth
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="state"
                label="State"
                fullWidth
                value={formData.state}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="zipCode"
                label="Zip Code"
                fullWidth
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="country"
                label="Country"
                fullWidth
                value={formData.country}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Medical Information */}
            <Grid item xs={12}>
              <Typography variant="h6">Medical Information</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="bloodType"
                label="Blood Type"
                fullWidth
                value={formData.bloodType}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="allergies"
                label="Allergies"
                fullWidth
                value={formData.allergies}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="chronicConditions"
                label="Chronic Conditions"
                fullWidth
                value={formData.chronicConditions}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="medications"
                label="Medications"
                fullWidth
                value={formData.medications}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="primaryCarePhysician"
                label="Primary Care Physician"
                fullWidth
                value={formData.primaryCarePhysician}
                onChange={handleChange}
                required
              />
            </Grid>
            
            {/* Insurance Information */}
            <Grid item xs={12}>
              <Typography variant="h6">Insurance Information</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="insuranceProvider"
                label="Insurance Provider"
                fullWidth
                value={formData.insuranceProvider}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="policyNumber"
                label="Policy Number"
                fullWidth
                value={formData.policyNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="groupNumber"
                label="Group Number"
                fullWidth
                value={formData.groupNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            
            {/* Optional Information */}
            <Grid item xs={12}>
              {/* <Typography variant="h6">Optional Information</Typography> */}
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="smokingStatus"
                label="Smoking Status"
                fullWidth
                value={formData.smokingStatus}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="alcoholConsumption"
                label="Alcohol Consumption"
                fullWidth
                value={formData.alcoholConsumption}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="exerciseHabits"
                label="Exercise Habits"
                fullWidth
                value={formData.exerciseHabits}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="dietaryPreferences"
                label="Dietary Preferences"
                fullWidth
                value={formData.dietaryPreferences}
                onChange={handleChange}
                required
              />
            </Grid>
            
            {/* Additional Information */}
            <Grid item xs={12}>
              <Typography variant="h6">Additional Information</Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="preferredLanguage"
                label="Preferred Language"
                fullWidth
                value={formData.preferredLanguage}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="accessibilityNeeds"
                label="Accessibility Needs"
                fullWidth
                value={formData.accessibilityNeeds}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.consentDataSharing}
                    onChange={handleChange}
                    name="consentDataSharing"
                    color="primary"
                  />
                }
                label="Consent for Data Sharing (for research, third-party applications, etc.)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="pastMedicalConditions"
                label="Past Medical Conditions"
                fullWidth
                value={formData.pastMedicalConditions}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="surgeries"
                label="Surgeries"
                fullWidth
                value={formData.surgeries}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="familyMedicalHistory"
                label="Family Medical History"
                fullWidth
                value={formData.familyMedicalHistory}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="vaccinationRecords"
                label="Vaccination Records"
                fullWidth
                value={formData.vaccinationRecords}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box mt={2}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<SaveIcon />}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default UserProfile;
