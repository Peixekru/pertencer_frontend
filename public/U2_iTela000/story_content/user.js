function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fW20yw4BzF":
        Script1();
        break;
  }
}

function Script1()
{
  //let iFrameAction1 = path("iframeId1");
//  iFrameAction1.click();
parent.parent.document.querySelector("#iframeId1").click();
}

