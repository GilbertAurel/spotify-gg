export function hashSeparator() {
  const hash = window.location.hash;
  const hashFragment = hash.substring(1);
  const params = hashFragment.split('&');
  const keyValueParams: any = {};

  params.forEach((param) => {
    const values = param.split('=');
    const name = values[0];
    const value = values[1];
    keyValueParams[name] = value;
  });

  return keyValueParams;
}
