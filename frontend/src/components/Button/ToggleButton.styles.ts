import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: absolute;
  top: 35%;
  right: -67px;
  tranform: translateY(-50%);
`;

export const ToggleSwitch = styled.label`
  display: block;
  width: 50px;
  height: 25px;
  background: #fff;
  position: relative;
  border: 1px solid rgba(0 0 0 / 15%);
  // box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  border-radius: 30px;

  transition: all 0.2s ease-in;
`;

export const ToggleButton = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 2.5px;
  transform: translateY(-50%);
  background: #f2bb13;
  border-radius: 50%;

  transition: all 0.2s ease-in;
`;

export const ToggleCheckBox = styled.input`
  :checked ~ ${ToggleSwitch} {
    background: #f2bb13;
  }

  :checked ~ ${ToggleSwitch} ${ToggleButton} {
    left: calc(100% - 22.5px);
    background: #fff;
  }
`;
