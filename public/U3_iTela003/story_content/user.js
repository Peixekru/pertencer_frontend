function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QPjeOI3cUc":
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

