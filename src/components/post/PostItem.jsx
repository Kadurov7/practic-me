import React from "react";
import styled from "styled-components";

const PostItem = ({ item }) => {
  return (
    <Containar>
      <Post>
        <div>
          <h3>{item.id}</h3>
        </div>
        <div>
          <h3>{item.title}</h3>
        </div>
        <div>
          <h3>{item.body}</h3>
        </div>
      </Post>
      <div>
        <button>Delete</button>
      </div>
    </Containar>
  );
};

export default PostItem;

const Containar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 4px solid #0781b2;
  border-radius: 8px;
  padding: 0.3rem 0.6rem;
  margin-top: 2rem;
  button{
    color: white;
    font-size: 17px;
    padding: 0.3rem 0.6rem;
    border: none;
    border-radius: 3px;
    background-color: #0b5470;
    &:active{
        margin-bottom: 0.4rem;
    }
  }
`;
const Post = styled.div`
  display: flex;
  gap: 1rem;
`;
