export default (fileSize:number, uploadedBytes: number, lastTime: number, lastUploadedBytes:number):number => {
  const endTime = (new Date).getTime();
  let currentSpeed = ((uploadedBytes - lastUploadedBytes) * 1000) / ((endTime - lastTime) * 1024);

  return parseFloat(currentSpeed.toFixed(2));
}