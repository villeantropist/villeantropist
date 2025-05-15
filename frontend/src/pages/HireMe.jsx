import React, { useState } from "react";
import Header from "../components/Header";
// import { PortfolioContext } from "../context/PortfolioContext";
import { usePortfolioContext } from "../context/PortfolioContext";
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  FormControl,
  Autocomplete,
  MenuItem,
} from "@mui/material";
import Title from "../components/Title";

const HireMe = () => {
  // const { stacks, urls, tags, projectStacks } = useContext(PortfolioContext);
  const { stacks, allTechStacks, urls, tags, projectStacks } =
    usePortfolioContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    stacks: [],
  });

  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState({});
  const [snackOpen, setSnackOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    setTimeout(() => {
      setSnack({ message: "Message sent!", severity: "success" });
      setSnackOpen(true);
      setLoading(false);
      setFormData({ name: "", email: "", message: "", stacks: [] });
    }, 15000);
  };

  return (
    <div className="text-center">
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={() => setSnackOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackOpen(false)}
          severity={snack.severity || "success"}
          sx={{ width: "100%" }}
        >
          {snack.message}
        </Alert>
      </Snackbar>
      <Title title="I'M Delighted To Offer Support! 😊" />
      <p>Fill the form below let's get started</p>
      <div className="min-h-screen py-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="max-w-4xl mx-auto shadow-custom bg-white p-6 sm:p-10 rounded-2xl">
          <div className="mb-8 text-center">
            <Header heading="Hire Me" />
            <p className="text-sm text-gray-600 mt-2">
              I’d love to work with you. Fill out the form below and I’ll get
              back to you shortly.
            </p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Full Name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              label="Your Email Address (Max. 35)"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              variant="outlined"
              required
            />

            <TextField
              fullWidth
              label="Company/Organization (Max. 30)"
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Type of Service"
              variant="outlined"
              select
              defaultValue=""
              required
            >
              <MenuItem value="web">Web Development</MenuItem>
              <MenuItem value="automation">Automation</MenuItem>
              <MenuItem value="data">Data Analysis</MenuItem>
              <MenuItem value="consulting">Consultation</MenuItem>
            </TextField>

            <FormControl fullWidth>
              <Autocomplete
                multiple
                options={allTechStacks.sort()}
                limitTags={5}
                value={formData.stacks}
                onChange={(e, value) =>
                  setFormData({ ...formData, stacks: value })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Tech Stacks"
                    placeholder="Type or select stacks..."
                  />
                )}
              />
            </FormControl>

            <TextField
              fullWidth
              label="Tell Me More About Your Project (Max. 200)"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              variant="outlined"
              multiline
              rows={4}
              required
            />

            <Button
              variant="contained"
              type="submit"
              className="!bg-green-700 hover:!bg-green-800"
              sx={{
                borderRadius: "12px",
                padding: "0.75rem 1.5rem",
                fontWeight: 600,
              }}
              disabled={loading}
              endIcon={
                loading && <CircularProgress size={20} sx={{ color: "#fff" }} />
              }
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
