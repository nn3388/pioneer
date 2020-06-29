vscode 기본 셋업

- F1 - Configure Task - 엔터남발 -  tasks.json 생성
#--------------------------------------------------#
{
    "version": "0.1.0",
    "command": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "osx": {
        "command": "Google Chrome"
    },
    "args": [
        "${file}"
    ]
}
#--------------------------------------------------#
추가하기
- html 파일에서, Run Build Task(Ctrl + Shift + B) 실행
  
Extension

HTML CSS Support

+
Markdown All in one
++
Maven for Java
Tomcat for Java
