function list_h1(){
    for(i=0;i<document.getElementsByTagName("h1").length;i++)
    {
        if(document.getElementsByTagName("h1")[i].textContent.indexOf("sb")!=-1)
        {
            return true
        }
    }
}

    
    if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1()){

      alert("xss")}

      function test_xss(){
        if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1()){

      alert("xss");
      document.documentElement.removeEventListener("DOMSubtreeModified", test_xss);
    }

      }

//检测dom变化
  document.documentElement.addEventListener("DOMSubtreeModified", test_xss, false);
  
