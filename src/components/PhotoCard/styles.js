import styled, { keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
 from {
     filter:blur(5px);
     opacity:0;
 }

 to {
     filter:blur(0);
     opacity:1;
 }
`

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 000;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    animation:1s ${fadeInKeyframes} ease;
    box-shadow: 010px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    display: flex; 
    align-items: center;
    padding-top: 8px;    
    & svg {
        margin-right: 4px;

    }
    background-color: transparent;
    border: 0px;
`
