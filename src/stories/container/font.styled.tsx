import { createGlobalStyle } from "styled-components"

import Poppins_Bold from "../assets/fonts/Poppins/Poppins-Bold.ttf"
import Poppins_Italic from "../assets/fonts/Poppins/Poppins-Italic.ttf"
import Poppins_Light from "../assets/fonts/Poppins/Poppins-Light.ttf"
import Poppins_Medium from "../assets/fonts/Poppins/Poppins-Medium.ttf"
import Poppins_Regular from "../assets/fonts/Poppins/Poppins-Regular.ttf"
import Poppins_SemiBold from "../assets/fonts/Poppins/Poppins-SemiBold.ttf"
import Poppins_Thin from "../assets/fonts/Poppins/Poppins-Thin.ttf"

import BaiJamjuree_Bold from "../assets/fonts/BaiJamjuree/BaiJamjuree-Bold.ttf"
import BaiJamjuree_Italic from "../assets/fonts/BaiJamjuree/BaiJamjuree-Italic.ttf"
import BaiJamjuree_Light from "../assets/fonts/BaiJamjuree/BaiJamjuree-Light.ttf"
import BaiJamjuree_Medium from "../assets/fonts/BaiJamjuree/BaiJamjuree-Medium.ttf"
import BaiJamjuree_Regular from "../assets/fonts/BaiJamjuree/BaiJamjuree-Regular.ttf"
import BaiJamjuree_SemiBold from "../assets/fonts/BaiJamjuree/BaiJamjuree-SemiBold.ttf"

import Mitr_Bold from "../assets/fonts/Mitr/Mitr-Bold.ttf"
import Mitr_Light from "../assets/fonts/Mitr/Mitr-Light.ttf"
import Mitr_Medium from "../assets/fonts/Mitr/Mitr-Medium.ttf"
import Mitr_Regular from "../assets/fonts/Mitr/Mitr-Regular.ttf"
import Mitr_SemiBold from "../assets/fonts/Mitr/Mitr-SemiBold.ttf"

export const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    src: url(${Poppins_Italic}) format("truetype");
    font-style: italic;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${Poppins_Thin}) format("truetype");
    font-weight: 100;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${Poppins_Light}) format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${Poppins_Regular}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${Poppins_Medium}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${Poppins_SemiBold}) format("truetype");
    font-weight: 600;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${Poppins_Bold}) format("truetype");
    font-weight: bold;
  }


  @font-face {
    font-family: "Bai Jamjuree";
    src: url(${BaiJamjuree_Italic}) format("truetype");
    font-style: italic;
  }
  
  @font-face {
    font-family: "Bai Jamjuree";
    src: url(${BaiJamjuree_Light}) format("truetype");
    font-weight: 300;
  }
  
  @font-face {
    font-family: "Bai Jamjuree";
    src: url(${BaiJamjuree_Regular}) format("truetype");
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Bai Jamjuree";
    src: url(${BaiJamjuree_Medium}) format("truetype");
    font-weight: 500;
  }
  
  @font-face {
    font-family: "Bai Jamjuree";
    src: url(${BaiJamjuree_SemiBold}) format("truetype");
    font-weight: 600;
  }
  
  @font-face {
    font-family: "Bai Jamjuree";
    src: url(${BaiJamjuree_Bold}) format("truetype");
    font-weight: bold;
  }
  
  
  @font-face {
    font-family: "Mitr";
    src: url(${Mitr_Light}) format("truetype");
    font-weight: 300;
  }
  
  @font-face {
    font-family: "Mitr";
    src: url(${Mitr_Regular}) format("truetype");
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Mitr";
    src: url(${Mitr_Medium}) format("truetype");
    font-weight: 500;
  }
  
  @font-face {
    font-family: "Mitr";
    src: url(${Mitr_SemiBold}) format("truetype");
    font-weight: 600;
  }
  
  @font-face {
    font-family: "Mitr";
    src: url(${Mitr_Bold}) format("truetype");
    font-weight: bold;
  }
`