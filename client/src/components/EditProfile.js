import { useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import Resizer from "react-image-file-resizer";
import axios from "axios";

const EditProfile = () => {
  const [profileImg, setProfileImg] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  const photoHandler = (event) => {
    let fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          150,
          150,
          "png",
          90,
          0,
          (uri) => {
            setProfileImg(uri);
            alert("서버에 등록이 완료되었습니다. ");
          },
          "base64",
          180,
          180
        );
      } catch (err) {
        alert(err);
      }
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const inputData = { profileImg, displayName, location, title, aboutMe };

    try {
      const response = await axios.post(
        //patch 적용 전
        "http://localhost:3001/editProfile",
        JSON.stringify(inputData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <EditProfileform>
      <form onSubmit={submitHandler}>
        <h2>Public information</h2>
        <div className='edit_color_container'>
          <div className='edit_main_item'>
            <label htmlFor='profileImg'>Profile image</label>
            <img src={profileImg} alt=''></img>
            <input type='file' onChange={photoHandler}></input>
          </div>
          <div className='edit_main_item'>
            <label htmlFor='displayName'>Display name</label>
            <input
              type='text'
              id='displayName'
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            ></input>
          </div>
          <div className='edit_main_item'>
            <label htmlFor='location'>Location</label>
            <input
              type='text'
              id='location'
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            ></input>
          </div>
          <div className='edit_main_item'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></input>
          </div>
          <div className='edit_main_item'>
            <label htmlFor='aboutMe'>About me</label>
            <textarea
              id='aboutMe'
              onChange={(e) => setAboutMe(e.target.value)}
              value={aboutMe}
            ></textarea>
          </div>
        </div>
        <Button text={"Save profile"}></Button>
      </form>
    </EditProfileform>
  );
};
export default EditProfile;

const EditProfileform = styled.div`
  display: flex;
  flex-direction: column;

  .edit_color_container {
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 22.5%);
    padding: 20px;
  }
  .edit_main_item {
    font-weight: 800;
    margin-bottom: 10px;
  }
  label {
    display: flex;
    text-align: left;
    margin-bottom: 5px;
  }
  input {
    width: 50%;
    height: 40px;
    margin-top: 7px;
    background-color: transparent;
    border: 1px solid gray;
    color: #e7e9eb;
    font-size: 20px;
  }
  textarea {
    width: 100%;
    height: 200px;
    margin-top: 7px;
    background-color: transparent;
    border: 1px solid gray;
    color: #e7e9eb;
    font-size: 20px;
  }

  Button {
    margin-left: 0px;
    margin-top: 10px;
  }
`;
