import styled from "styled-components";
import { CardMenu } from "./Card";
import { SmallImage } from "./PlaylistItem";

export const EditScreenArea = styled.div`
  border-radius: 5px;
  width: -webkit-fill-available;
  max-width: calc(100vw - 73px);
  max-height: calc(100vh - 78px);
  height: calc(100vh - 78px);
  background-color: #f9f9f9;
  display: flex;
  align-items: flex-start;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export const PlaylistDetailsArea = styled.div`
  height: 100%;
  width: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #2425600a;
  border-radius: 5px;
  @media (max-width: 930px) {
    width: 100%;
    height: auto;
  }
`;

export const PlaylistThumb = styled.img.attrs({ alt: "x" })`
  width: 100%;
  border-radius: 5px;
  @media (max-width: 930px) {
    display: none;
  }
`;

export const EditTitleBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const TitleText = styled.p`
  color: #979797;
  font-size: 1.5vw;
  font-family: Poppins, sans-serif;
  display: -webkit-box;
  height: min-content;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 930px) {
    font-size: 18px;
  }
`;

export const EditInputBlock = styled(EditTitleBlock)`
  flex-direction: column;
`;

export const EditInput = styled.input`
  width: 100%;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  border: none;
  border-bottom: 2px solid #7e7e7e;
  outline: none;
  background: transparent;
  color: #979797;
  padding: 6px;
`;

export const ButtonBlock = styled.div`
  width: auto;
  gap: 10px;
  display: flex;
  align-self: end;
`;

export const BottomBlock = styled.div`
  margin-top: 6px;
  font-family: "Poppins", sans-serif;
  color: #979797;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BottomChild = styled(BottomBlock)`
  justify-content: center;
  width: auto;
`;

export const EditMenu = styled(CardMenu).attrs({
  id: "edit_menu",
  MenuListProps: {
    "aria-labelledby": "edit_menu_btn",
  },
})``;

export const ItemsBlock = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding: 11px 0px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 930px) {
    width: 100%;
    height: auto;
    gap: 2px;
  }
  @media (max-width: 790px) {
    padding-bottom: 50px;
  }
`;

export const ChildImage = styled(SmallImage)`
  @media (min-width: 930px) {
    width: 16%;
  }
`;
