// 수야네로 들1어온 주소에 대해서 blog.suyane24.com 로 리다이렉트 시켜주기

// const locationEntity = location;
// const mainDomain = "suyane24.com";
// const currentHOST = locationEntity.host;
// const httpProtocol = "https://";

// let redirectURL = locationEntity.href;

// // 현재 호스트가 메인 호스트와 같다면 리다이렉트 시켜주기
// if (mainDomain === currentHOST) {
//   console.log(1);
//   // 리다이렉트 주소로 변경해주기
//   redirectURL = httpProtocol + "blog." + mainDomain + locationEntity.pathname;
//   console.log("redirectURL", redirectURL);
// }

// console.log(2);

// // ads.txt 경로를 조회중이면 리다이렉트를 하지 않는다.
// if (locationEntity.pathname === "/ads.txt") {
//   console.log(3);
//   return;
// } else if (locationEntity.href !== redirectURL) {
//   console.log(4);
//   // 현재주소와 리다이렉트 주소가 다를때 액션
//   //location.href = redirectURL;
// }

var dest = "https://blog.suyane24.com"; // 2. 옮겨갈 새로운 도메인 지정
function canonicalLink() {
  var link = document.getElementsByTagName("link")[0];
  link.setAttribute("href", dest + location.pathname);
  document.head.appendChild(link); // 3. 포스트 주소가 포함된 canonical을 지정함
}

function domainRedirect() {
  var origin = location.origin; // 4. 접속한 정보에서 도메인정보를 확보
  var href = location.href; // 5. 접속한 정보에서 도메인이 포함된 포스트 주소를 확보
  var destination = href.replace(origin, dest); // 6. 접속한 도메인정보를 옮겨갈 새로운 도메인 주소로 치환
  location.href = destination; // 7. 이동
}
// 실행
canonicalLink();
domainRedirect();
