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
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    const phoneWithoutCountryCode = value.replace(/\D/g, "");
    const newErrors = { ...errors };

    if (!phoneWithoutCountryCode) {
      newErrors.phone = "Phone number is required";
    } else if (phoneWithoutCountryCode.length < 10 || phoneWithoutCountryCode.length > 15) {
      newErrors.phone = "Phone number must be between 10 and 15 digits";
    } else {
      newErrors.phone = "";
    }
    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 2 || formData.firstName.length > 50) {
      newErrors.firstName = "First name must be between 2 and 50 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2 || formData.lastName.length > 50) {
      newErrors.lastName = "Last name must be between 2 and 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const phoneWithoutCountryCode = formData.phone.replace(/\D/g, "");
    if (!phoneWithoutCountryCode) {
      newErrors.phone = "Phone number is required";
    } else if (phoneWithoutCountryCode.length < 10 || phoneWithoutCountryCode.length > 15) {
      newErrors.phone = "Phone number must be between 10 and 15 digits";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 250) {
      newErrors.message = "Message cannot exceed 250 characters";
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
        .catch(() => {
          setLoading(false);
          toast.error("Failed to submit the form. Please try again later.");
        });
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Divider sx={{ borderColor: "#000", borderStyle: "dashed" }} />
      <form onSubmit={handleSubmit}>
        <Grid container mt={1} columnSpacing={2}>
          {[
            { label: "First Name*", name: "firstName" },
            { label: "Last Name*", name: "lastName" },
            { label: "Email*", name: "email", type: "email" },
            { label: "Subject*", name: "subject" },
          ].map(({ label, name, type = "text" }) => (
            <Grid item lg={6} xs={12} key={name} mt={1}>
              <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>{label}</InputLabel>
              <TextField
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                error={!!errors[name]}
                helperText={errors[name] || ""}
                sx={{ mt: 1 }}
                fullWidth
              />
            </Grid>
          ))}

          <Grid item lg={12} xs={12} mt={1}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>Phone Number*</InputLabel>
            <MuiTelInput
              fullWidth
              defaultCountry="IN"
              sx={{ mt: 1 }}
              value={formData.phone}
              onChange={handlePhoneChange}
              error={!!errors.phone}
              helperText={errors.phone || ""}
            />
          </Grid>

          <Grid item lg={12} xs={12} mt={1}>
            <InputLabel sx={{ fontWeight: 550, fontSize: 15 }}>Message*</InputLabel>
            <TextareaAutosize
              name="message"
              style={{
                resize: "none",
                width: "100%",
                height: "100px",
                borderColor: errors.message ? "red" : "#ccc",
                padding: "8px",
                borderRadius: "4px",
              }}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
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
                    wrapperStyle={{ display: "flex", justifyContent: "center" }}
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
