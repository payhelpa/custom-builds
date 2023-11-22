const axios = require('axios');
const fs = require('fs');

const downloadServiceAccountKey = async () => {
  const keyFileUrl = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  const response = await axios.get(keyFileUrl);
  const keyFileData = response.data;

  const tmpDir = process.env.TMPDIR || '/tmp';
  const keyFilePath = `${tmpDir}/service-account-key.json`;
  fs.writeFileSync(keyFilePath, keyFileData);

  process.env.GOOGLE_APPLICATION_CREDENTIALS = keyFilePath;
};

downloadServiceAccountKey();
