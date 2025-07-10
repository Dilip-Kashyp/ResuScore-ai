"use client";
import React, { useRef, useState } from "react";
import { Stack, Typography, Container, LoadingButton } from "@/components";
import { Paper, Box, IconButton } from "@mui/material";
import { CloudUpload, Close } from "@mui/icons-material";
import { useNotification } from "@/helper";

const ResumeUploader = () => {
  const fileInputRef = useRef(null);
  const { showNotification } = useNotification();

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      showNotification({
        type: "error",
        message: "Only PDF files are allowed.",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      showNotification({
        type: "error",
        message: "File size should be less than 5MB.",
      });
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileName("");
    fileInputRef.current.value = "";
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("resume", selectedFile);
    console.log("Uploading", selectedFile);
    showNotification({
      type: "success",
      message: "Resume uploaded successfully.",
    });

    setSelectedFile(null);
    setFileName("");
    fileInputRef.current.value = "";
  };

  return (
    <Container containerProps={{ maxWidth: "sm", sx: { my: 6 } }}>
      <Stack stackProps={{ gap: 4 }}>
        <Typography
          typographyProps={{
            variant: "h5",
            fontWeight: 600,
            textAlign: "center",
            children: "Upload Your Resume (PDF Only)",
          }}
        />

        <Paper
          elevation={0}
          className="border-2 border-dashed border-purple-300 rounded-lg p-6 cursor-pointer hover:border-purple-400 transition-colors relative text-center"
          onClick={handleUploadClick}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />

          {fileName ? (
            <Box className="relative flex justify-between items-center">
              <Typography
                typographyProps={{
                  children: fileName,
                  variant: "body1",
                  className: "text-purple-700 font-medium truncate",
                }}
              />
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveFile();
                }}
                className="ml-2"
              >
                <Close />
              </IconButton>
            </Box>
          ) : (
            <>
              <CloudUpload
                className="text-purple-400 mx-auto mb-2"
                fontSize="large"
              />
              <Typography
                typographyProps={{
                  children: "Click to upload resume",
                  variant: "body2",
                  className: "text-purple-600 font-medium mb-1",
                }}
              />
              <Typography
                typographyProps={{
                  children: "PDF only (max. 5MB)",
                  variant: "caption",
                  className: "text-gray-500",
                }}
              />
            </>
          )}
        </Paper>

        <LoadingButton
          buttonProps={{
            children: "Submit Resume",
            variant: "contained",
            size: "medium",
            disabled: !selectedFile,
            sx: {
              backgroundColor: "#7C30F7",
              color: "#fff",
              borderRadius: "62px",
            },
          }}
          onClick={ handleUpload}
        />
      </Stack>
    </Container>
  );
};

export default ResumeUploader;
