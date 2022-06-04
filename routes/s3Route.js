const express = require('express');
const router = express.Router();
const { uploadFile, downloadFile, deleteFile, listFiles } = require('../services/s3');

//List all files from S3
router.get('/list', async (req, res) => {
    const { success, data } = await listFiles()
    if (success) {
        return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error Occured !!!' })
});

// Upload File to S3
router.post('/upload', uploadFile.single('file'), async (req, res) => {
    if (req.file) {
        return res.json({ success: true, data: req.file })
    }
    return res.status(500).json({ success: false, message: 'Error Occured !!!' })
});

// Download File from S3
router.get('/download/:filename', async (req, res) => {
    const { success, data } = await downloadFile(req.params.filename)
    if (success) {
        return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error Occured !!!' })
});

// Delete File from S3
router.get('/delete/:filename', async (req, res) => {
    const { success, data } = await deleteFile(req.params.filename)
    if (success) {
        return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error Occured !!!' })
});

module.exports = router;
