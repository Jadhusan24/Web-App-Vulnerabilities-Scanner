function scanURL(url) {

  const vulnerabilities = [];

  const imgTagRegex = /<img(.*?)>/gi;
  const scriptTagRegex = /<script(.*?)>/gi;
  const onEventRegex = /on\w+="(.*?)"/gi;

  if (url.match(imgTagRegex) || url.match(scriptTagRegex) || url.match(onEventRegex)) {
    vulnerabilities.push('XSS');
  }

  return vulnerabilities;
}

const targetURL = 'https://example.com?param=<script>alert("XSS")</script>';
const vulnerabilitiesFound = scanURL(targetURL);

if (vulnerabilitiesFound.length > 0) {
  console.log('Vulnerabilities found:');
  vulnerabilitiesFound.forEach((vulnerability, index) => {
    console.log(`${index + 1}. ${vulnerability}`);
  });
} else {
  console.log('No vulnerabilities found.');
}
