function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nNmH88bnWa":
        Script1();
        break;
  }
}


//Encurtador de path
function path(element) {
  return parent.parent.document.querySelector(`#${element}`);
}

function Script1()
{
  
  let iFrameAction1 = path("iframeId1");
  iFrameAction1.click();

}
