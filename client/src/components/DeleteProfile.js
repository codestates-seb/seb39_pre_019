import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DeleteProfile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();

  const deleteHandler = (e) => {
    localStorage.removeItem("login-token");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.delete("http://localhost:3001/user", { data }).then((response) => {
      //console.log(response);
      navigate("/");
    });
  };

  return (
    <DeleteProfileContainer>
      <div className='para'>
        <p className='p1'>
          Before confirming that you would like your profile deleted, we'd like
          to take a moment to explain the implications of deletion:
        </p>
        <ul>
          <li>
            Deletion is irreversible, and you will have no way to regain any of
            your original content, should this deletion be carried out and you
            change your mind later on.
          </li>
          <li>
            Your questions and answers will remain on the site, but will be
            disassociated and anonymized (the author will be listed as
            "user18801342") and will not indicate your authorship even if you
            later return to the site.
          </li>
        </ul>
        <p>
          Confirming deletion will only delete your profile on Stack Overflow -
          it will not affect any of your other profiles on the Stack Exchange
          network. If you want to delete multiple profiles, you'll need to visit
          each site separately and request deletion of those individual
          profiles.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className='checkbox'>
          <input id='delete' type='checkbox'></input>
          <label htmlFor='delete'>
            I have read the information stated above and understand the
            implications of having my profile deleted. I wish to proceed with
            the deletion of my profile.
          </label>
        </div>
        <Link to='/'>
          <Button
            type={"delete"}
            text={"Delete profile"}
            onClick={() => deleteHandler()}
          ></Button>
        </Link>
      </form>
    </DeleteProfileContainer>
  );
};
export default DeleteProfile;

const DeleteProfileContainer = styled.div`
  font-weight: 600;
  .para {
    margin: 10px;
    & p {
      padding-bottom: 16px;
    }
    & ul {
      & li {
        list-style: circle;
        margin-bottom: 20px;
      }
    }
  }

  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-bottom: 20px;
    margin-left: 9px;
  }
`;
