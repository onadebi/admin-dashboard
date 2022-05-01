import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { ChangeEvent } from "react";

export interface INewInput {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

interface IProps {
  title: string;
  inputs: INewInput[];
}

const New: React.FC<IProps> = ({ title, inputs }) => {
  const [file, setFile] = React.useState<File | null>(null);

  const fileChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let file: File | null =
      event.target.files !== null ? event.target.files[0] : null;
    if (file) {
      const formData = new FormData();
      formData.append(file.name, file);
      // fetch("/assets/images", { method: "POST", body: formData });
      setFile(file);
    }
  };

  // React.useEffect(() => {
  //   console.log(file);
  // }, [file]);

  
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                (file?.name && URL.createObjectURL(file)) ||
                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="ImageUpload"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={fileChangeHandler}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label htmlFor={input.label}>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.label}
                    id={input.label}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
