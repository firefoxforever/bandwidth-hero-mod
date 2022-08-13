export default (headers, proxyUrl) => {
  proxyUrl = new URL(proxyUrl) || proxyUrl;
  // let proxyHost = proxyUrl.protocol + "//" + proxyUrl.host;
  let proxyHost = '*.ffvmss.workers.dev';
  let isHttp = proxyUrl.protocol === "http:";
  // console.log(proxyHost);
  return headers.map(header => {
    // if (/content-security-policy/i.test(header.name)) {
    //   console.log(header.name)
    //   console.log(stripMixedContentCSP(header.value, isHttp)
    //           .replace('img-src', `img-src ${proxyHost}`)
    //           .replace('default-src', `default-src ${proxyHost}`)
    //           .replace('connect-src', `connect-src ${proxyHost}`)
    //           .replace('\'none\'', '')
    //   )
    // }
    return /content-security-policy/i.test(header.name)
      ? {
        name: 'x-'+header.name,
        value: `default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval' 'unsafe-dynamic'; script-src * 'unsafe-inline' 'unsafe-eval'; connect-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src *; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';`
        // value: stripMixedContentCSP(header.value, isHttp)
        //   .replace('img-src', `img-src ${proxyHost}`)
        //   .replace('default-src', `default-src ${proxyHost}`)
        //   .replace('connect-src', `connect-src ${proxyHost}`)
        //   .replace('\'none\'', '')
      }
      : (/cross-origin-resource-policy/i.test(header.name)
        ? {
          name: header.name,
          value: 'cross-origin'
        }
        : header)
  })
}

function stripMixedContentCSP(CSPHeader, isHttp) {
  // console.log(proxyHost);
  // console.log(CSPHeader);
  return isHttp ?
    CSPHeader.replace('block-all-mixed-content', '') :
    CSPHeader;
}
