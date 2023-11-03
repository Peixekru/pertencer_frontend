
//Código do Storyline
function ExecuteScript(strId) {

  switch (strId) {

    case "6DFbqsUOLfn":
      Script1();
      
      break;
    case "6ag3sXnhyhQ":

      Script2();
      break;
    case "6agHgAzc0iK":

      Script3();
      break;
  }
  
}

//Encurtador de path
function path(element) {
  return parent.parent.document.querySelector(`#${element}`);
}

//Btn01
function Script1() {
  let iFrameAction1 = path("iframeId1");
  iFrameAction1.click();

  alert('Botão 1 usou o método finishedContent')

}

//Btn02
function Script2() {
  let iFrameAction1 = path("iframeId1");
  iFrameAction1.click();

  alert('Botão 2 usou o método finishedContent')

}
//Btn03
function Script3() {
  let iFrameAction1 = path("iframeId1");
  iFrameAction1.click();

  alert('Botão 1 usou o método finishedContent')

}

