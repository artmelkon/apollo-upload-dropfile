import React from "react";
import { useMutation } from "@apollo/client";

import {UPLOAD_FILE} from '../queries'

export default function Upload() {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log('upload data ', data),
  });

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file.length < -1) return;

    uploadFile({ variables: { file } });
  };
  return (
    <div>
      <h1>Upload File</h1>
      <input type="file" name="file" onChange={handleChange} />
    </div>
  );
}
