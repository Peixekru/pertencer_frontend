function ExecuteScript(strId)
{
  switch (strId)
  {
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

function Script1()
{
  finishContent();
}

function Script2()
{
  parent.finishContent();
}

function Script3()
{
  parent.parent.finishContent();
}

