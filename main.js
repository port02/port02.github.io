// 수야네로 들어온 주소에 대해서 blog.suyane24.com 로 리다이렉트 시켜주기

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

// 현재주소와 리다이렉트 주소가 다를때 액션
if (locationEntity.href !== redirectURL) {
  location.href = redirectURL;
}
