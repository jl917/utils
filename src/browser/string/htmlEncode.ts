export default (input: string) => {
  let converter: HTMLDivElement | null = document.createElement('div');
  converter.innerText = input;
  const output = converter.innerHTML;
  converter = null;
  return output;
}
