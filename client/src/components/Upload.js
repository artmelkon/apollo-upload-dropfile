import React from "react";
import { Mutation } from "@apollo/client/react/components";

import { UPLOAD_FILE } from "../queries";

class Upload extends React.Component {
// export default function Upload() {
  // const [uploadFile] = useMutation(UPLOAD_FILE, {
  //   onCompleted: (data) => console.log('upload data ', data),
  // });

  handleChange = (e, uploadFile) => {
    const file = e.target.files[0];
    if (file.length < -1) return;

    console.log('file ', file)

    // this.setState({ variables: { file } });

    uploadFile({ variables: { file } });
  };

  render() {
    return (
      <Mutation
        mutation={UPLOAD_FILE}
        onCompleted={(data) => console.log("upload data", data)}
      >
        {(uploadFile, { loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!!</p>;
          return (
            <div>
              <h1>Upload File</h1>
              <form>
              <input type="file" name="file" onChange={e => this.handleChange(e, uploadFile)} />
              </form>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default Upload;
