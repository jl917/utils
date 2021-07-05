const getFileExtension = (str: string) => str.substring(str.lastIndexOf('.') + 1).toLowerCase();

export default getFileExtension;
