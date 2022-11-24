import styled from "styled-components";
import ReactPlayer from "react-player";

export const VideoPlayerArea = styled.div`
  border-radius: 5px;
  width: -webkit-fill-available;
  max-width: calc(100vw - 73px);
  max-height: calc(100vh - 78px);
  height: calc(100vh - 78px);
  background-color: #f9f9f9;
  padding: 3% 3%;
  display: flex;
  align-items: flex-start;
  gap: 2%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 930px) {
    gap: 12px;
    flex-direction: column;
    max-height: none;
    height: auto;
  }
  @media (max-width: 530px) {
    padding: 0;
  }
`;

export const NormalBlock = styled.div`
  font-family: "Poppins", sans-serif;
  width: auto;
  height: auto;
  margin-top: 15px;
  gap: 5px;
  button,
  span {
    cursor: pointer;
  }
`;

export const VideoPlayerBlock = styled.div`
  width: 73%;
  height: auto;
  @media (min-width: 930px) {
    margin-bottom: 15px;
  }
  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const PlaylistViewBlock = styled.div`
  width: 27%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 930px) {
    width: 100%;
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-bottom: 15px;
`;

export const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Tools = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const PlayListTitleArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5px;
`;

export const PlayListTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.5vw;
  cursor: default;
  @media (max-width: 930px) {
    font-size: 15px;
  }
`;

export const TitleBottomtexts = styled.div`
  color: #8d8d8d;
  font-family: "Poppins", sans-serif;
  font-size: 0.9vw;
  display: flex;
  align-items: center;
  gap: 5px;
  img {
    position: relative;
    top: -0.1vw;
    width: 1vw;
    @media (max-width: 930px) {
      width: 11px;
    }
  }
  li span {
    position: relative;
    left: -11px;
    @media (max-width: 1350px) {
      left: -8px;
    }
  }
  @media (max-width: 930px) {
    font-size: 10px;
  }
`;

export const VideoList = styled.div`
  padding: 1.1vw 2%;
  margin-top: 0.7vw;
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 930px) {
    align-items: flex-start;
    padding: 3.1vw 2%;
    height: 57vh;
  }
  @media (max-width: 768px) {
    padding-bottom: 73px;
  }
  @media (max-width: 530px) {
    border: none;
    background-color: #fff;
  }
`;
