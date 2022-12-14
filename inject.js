let isDoit=true;

        function list_h1(){
            for(i=0;i<document.getElementsByTagName("h1").length;i++)
            {
            if(document.getElementsByTagName("h1")[i].textContent.indexOf("sb")!=-1)
            {
              return true
            }
            }
            }


        function test_xss1(){
            if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1())
            {
            alert("xss");
            isDoit=false;
            }
            } 


        function test_xss(){
            if(isDoit==false){return}
            if(document.documentElement.innerHTML.search(/\\sb"\s7/i)>1||list_h1())
            {
            alert("xss");
            isDoit=false;
            }
            }

test_xss1()

//检测dom变化
document.documentElement.addEventListener("DOMSubtreeModified", test_xss, false);
