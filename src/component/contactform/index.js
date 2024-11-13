import {
  Box,
  Divider,
  Grid,
  InputLabel,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import React, { useState } from "react";
import { Bars } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the specific field error as the user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    const phoneWithoutCountryCode = value.replace(/\D/g, "");
    const newErrors = { ...errors };
    if (!phoneWithoutCountryCode) {
      newErrors.phone = "Phone number is required";
    } else if (
      phoneWithoutCountryCode.length < 10 ||
      phoneWithoutCountryCode.length > 15
    ) {
      newErrors.phone = "Phone number must be between 10 and 15 digits";
    } else {
      newErrors.phone = "";
    }
    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (
      formData.firstName.length < 2 ||
      formData.firstName.length > 50
    ) {
      newErrors.firstName = "First name must be between 2 and 50 characters";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2 || formData.lastName.length > 50) {
      newErrors.lastName = "Last name must be between 2 and 50 characters";
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Invalid email format. Please provide a valid email address.";
    }
    const phoneWithoutCountryCode = formData.phone.replace(/\D/g, "");
    if (!phoneWithoutCountryCode) {
      newErrors.phone = "Phone number is required";
    } else if (
      phoneWithoutCountryCode.length < 10 ||
      phoneWithoutCountryCode.length > 15
    ) {
      newErrors.phone =
        "Phone number must be between 10 and 15 digits (excluding country code)";
    }
    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      const url = "https://api.web3forms.com/submit";
      const accessKey = "26cc9ba3-3838-4e33-bfbf-5de20864a633";

      const submissionData = {
        access_key: accessKey,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.success) {
            toast.success("Form submitted successfully!");
            window.location.href = "/thank-you";
          } else {
            toast.error("Failed to submit the form. Please try again later.");
          }
        })
        .catch((error) => {
          setLoading(false);
          toast.error("Failed to submit the form. Please try again later.");
        });
    }
  };

  return (
    <Box
      sx={{
        width: { lg: "100%", xs: "100%" },
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Divider sx={{ borderColor: "#000", borderStyle: "dashed" }} />
      <form onSubmit={handleSubmit}>
        <Grid container mt={1} columnSpacing={2}>
          <Grid item lg={6} xs={12}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>
              First Name*
            </InputLabel>
            <TextField
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              sx={{ mt: 1 }}
              fullWidth
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>{errors.firstName}</span>
            )}
          </Grid>
          <Grid item lg={6} xs={12}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>
              Last Name*
            </InputLabel>
            <TextField
              name="lastName"
              sx={{ mt: 1 }}
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
            />
            {errors.lastName && (
              <span style={{ color: "red" }}>{errors.lastName}</span>
            )}
          </Grid>
          <Grid item lg={12} xs={12} mt={1}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>
              Email*
            </InputLabel>
            <TextField
              name="email"
              type="email"
              sx={{ mt: 1 }}
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </Grid>
          <Grid item lg={12} xs={12} mt={1}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>
              Phone Number*
            </InputLabel>
            <MuiTelInput
              fullWidth
              defaultCountry="IN"
              sx={{ mt: 1 }}
              value={formData.phone}
              onChange={handlePhoneChange}
              error={!!errors.phone}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone}</span>
            )}
          </Grid>
          <Grid item lg={12} xs={12} mt={1}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>
              Subject*
            </InputLabel>
            <TextField
              name="subject"
              sx={{ mt: 1 }}
              fullWidth
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
            />
            {errors.subject && (
              <span style={{ color: "red" }}>{errors.subject}</span>
            )}
          </Grid>
          <Grid item lg={12} xs={12} mt={1}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>
              Message*
            </InputLabel>
            <TextareaAutosize
              name="message"
              style={{
                resize: "none",
                width: "100%",
                height: "100px",
              }}
              fullWidth
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message}</span>
            )}
          </Grid>
          <Grid item lg={12} mt={1} xs={12}>
            <div className="buttonparnt">
              <button
                type="submit"
                style={{ width: "100%" }}
                className="allbutton"
                disabled={loading}
              >
                {loading ? (
                  <Bars
                    height="30"
                    width="100"
                    color="#031C32"
                    ariaLabel="loading"
                    wrapperStyle={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                    wrapperClass
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
      <ToastContainer />
    </Box>
  );
};

export default ContactForm;
