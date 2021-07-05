async function fileDownload(url: string, fileName: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}

export default fileDownload;
