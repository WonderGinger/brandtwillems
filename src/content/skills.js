import jsLogo from "./static/logos/js-logo.svg";
import cppLogo from "./static/logos/cpp-logo.svg";
import html5Logo from "./static/logos/html5-logo.svg";
import javaLogo from "./static/logos/java-logo.svg";
import pyLogo from "./static/logos/py-logo.svg";
import reactLogo from "./static/logos/react-logo.svg";
import reduxLogo from "./static/logos/redux-logo.svg";
import nodeLogo from "./static/logos/node-logo.png";
import nginxLogo from "./static/logos/nginx-logo.png";
import mysqlLogo from "./static/logos/mysql-logo.png";
import electronLogo from "./static/logos/electron-logo.svg";

export const skills = [
  {
    group: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: jsLogo
      },
      {
        name: "HTML5",
        icon: html5Logo
      },
      {
        name: "C/C++",
        icon: cppLogo
      },
      {
        name: "Java",
        icon: javaLogo
      },
      {
        name: "Python",
        icon: pyLogo
      }
    ]
  },
  {
    group: "Frontend",
    skills: [
      {
        name: "React",
        icon:
          reactLogo,
        to: "https://reactjs.org"
      },
      {
        name: "Redux",
        icon: reduxLogo,
        to: "https://react-redux.js.org/"
      },
      {
        name: "Electron",
        icon: electronLogo,
        to: "https://electronjs.org"
      }
    ]
  },
  {
    group: "Server",
    skills: [
      {
        name: "Node.js",
        icon: nodeLogo,
        to: "https://nodejs.org/en/about"
      },
      {
        name: "NGINX",
        icon: nginxLogo,
        to: "https://nginx.com"
      },
      {
        name: "MySQL",
        icon: mysqlLogo,
      }
    ]
  }
];
