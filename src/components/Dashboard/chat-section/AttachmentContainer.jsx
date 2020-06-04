import React from "react";
import { ReactComponent as Attachment } from "../../../build/images/attachment.svg";

const AttachmentContainer = ({clickFile,inputFile,handleselectedFile}) => {

  return (
      <button class="mini-chat__footer__btns attachment" onClick={clickFile}>
      <Attachment />
      <input
      style={{ display: "none" }}
      type="file"
      name="upload"
      ref={inputFile}
      id="file-input"
      onChange={event => handleselectedFile(event)}
    />
    </button>
  );
};

export default AttachmentContainer;
