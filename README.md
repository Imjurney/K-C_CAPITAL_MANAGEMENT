# K-C_CAPITAL_MANAGEMENT
K&amp;C CAPITAL MANAGEMENT  웹 페이지 제작
[회사 홈페이지 링크](http://knccapital.co.nz/) <br>
[메일 보내기 기능 관련(with firebase) 레파지토리 링크](https://github.com/Imjurney/SendEMail)
## 제작 기간
2023년 3월 22일 ~ 2023년 4월 5일

## Tech Stack 

0. Test Tool & convention

- storybook
- chromatic
- ESlint
- Prettier
- husky
- lintstage

1. FE Tool

- React
- TypeScript
- Vite
- axios
- tanstack/react-query
- react-router
- tailwindcss
- gsap
- clsx
- react-hook-form
- embla-carousel-react
- react-items-carousel
- react-icons

2. BE Tool

- node.js
- express
- cors
- nodemailer
- nodemailer-smtp-pool
- firebase



## KeyPoint
1. 뉴질랜드 현지 인터넷 상황을 고려해 `vite` 툴체인 선택 및 3g 환경에서 개발을 진행하였습니다.
2. css in css인 `tailwindcss`를 사용해 반응형을 대응 및 성능 향상을 도모했습니다.
3. `embla-carousel-react`, `react-items-carousel` 등 무겁지 않은 슬라이드 라이브러리를
   사용했습니다.
4. 클라이언트 요청으로 어드민 계정 개발 및 DB설계는 하지 않았습니다. 그래서 변경될 여지가 
   있는 데이터들은 `src/data/*`에 `json` 파일로 클라이언트 딴에서 관리하고있습니다.
5. 마이크로 애니메이션을 기업 문화에 해가 되지 않는 선에서 제작했습니다.
6. 기존 서버가 존재(hostpapa)하였으나 `node.js`로 서버를 배포하려면 추가요금을 내야해서 `firebase cloud functions` 기능을 활용하여 http 요청이 있을때만 호출되도록 제작했습니다.
7. 배포방식은 `FTP` 형태이며 직접 빌드된 파일을 `hostpapa` 서버에 접속해 배포를 진행했습니다.
8. `storybook`을 사용해 UI 테스트를 진행 `chromatic`으로 정적배포 후 클라이언트에게 
   제공하여 소통을 진행했습니다.
