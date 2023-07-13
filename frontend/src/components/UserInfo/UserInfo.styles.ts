import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  // border: 1px solid green;
`;

export const Header = styled.header`
  display: flex;
  margin-top: 18px;
`;

export const ImageSection = styled.section`
  display: flex;
  justify-content: center;
  width: 40%;
`;

export const UserProfileImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const IntroductionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`;

export const Section1 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 110px;
`;

export const UserNickname= styled.span`
  font-size: 24px;
`;

export const EditProfileButton= styled.button`
  width: 80px;
  height: 30px;
  background: ;
  border: none;
  border-radius: 4px;
`;

export const FollowButton = styled.button`
  width: 80px;
  height: 30px;
  background: #0583F2;
  color: white;
  border: none;
  border-radius: 4px;
`;

export const UserIntroduction = styled.p`

`;


export const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const Info = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const InfoValue = styled.span`

`;


export const UserContributions = styled.div`
  margin-top: 12px;
  width: 600px;
  height: 300px;
`;