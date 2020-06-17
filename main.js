// 수야네로 들1어온 주소에 대해서 blog.suyane24.com 로 리다이렉트 시켜주기

const locationEntity = location;
const mainDomain = "suyane24.com";
const currentHOST = locationEntity.host;
const httpProtocol = "https://";

let redirectURL = locationEntity.href;

// 현재 호스트가 메인 호스트와 같다면 리다이렉트 시켜주기
if (mainDomain === currentHOST) {
  // 리다이렉트 주소로 변경해주기
  redirectURL = httpProtocol + "blog." + mainDomain + locationEntity.pathname;
}

// ads.txt 경로를 조회중이면 리다이렉트를 하지 않는다.
if (locationEntity.pathname === "/ads.txt") {
  return;
} else if (locationEntity.href !== redirectURL) {
  // 현재주소와 리다이렉트 주소가 다를때 액션
  location.href = redirectURL;
}
