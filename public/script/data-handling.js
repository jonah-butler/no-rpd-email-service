function gatherData(obj){
  let message;
  if(obj.optionalMessageInput.value.length == 0){
    message = obj.defaultMessageInput.placeholder;
    // message = buildMessageBody(obj.nameInput.value, obj.emailInput.value, message, url);
  } else {
    message = obj.optionalMessageInput.value;
    // message = buildMessageBody(obj.nameInput.value, obj.emailInput.value, message, url);
  }
  let dataObj;
  return dataObj = {
    name: obj.nameInput.value,
    email: obj.emailInput.value,
    message: message,
    checkBox: obj.checkBox.checked,
    messageHeader: `This email was sent by ${obj.nameInput.value} who can be reached at ${obj.emailInput.value}.`,
    messageFooter: `This message was delivered through http://www.norpdinrps.com/ with the intent of providing ease of communication to those who would like to see the removal of RPD in RPS.`
  }
}

// function buildMessageBody(name, email, message, url){
//   return `This email  was sent by ${name} who can be reached at ${email} \n\n${message} \n\nSent through ${url}.`;
// }

export { gatherData };
