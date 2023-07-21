var a=document.querySelector('#creatingbutton')
var button=document.querySelector('#button')
 var table=document.querySelector('#table')
var input=document.querySelector('#input')
var pos=window.getComputedStyle(a).getPropertyValue('width')
let box1=[button,table,input]
let box2=['a','h1','marquee','b','i','div']
var p=pos.split('p')
p=Number(p[0])
var j=0
var chari=1
var before=0
var after=250
var box2_controll_num=0
var box1_remove_num=0
const menu={width: 242, 
height: 50,
 position: 'relative',
backgroundColor: 'rgb(182,182,132)',
 fontStyle: 'italic',
 fontSize:'15px',
  opacity: 1,
  zindex: 0,
  cursor:'pointer'
}
current_selected_element=''
var tags={
        
        attributes:['id','innerHTML','innerText','style','accept','alt','async','autocomplete','cols','colspan','datetime','formaction','href','src','name','type','value'],


}

document.getElementById('save').addEventListener('click', function (){
        var outer = document.getElementById('outputwindow')
        var outerstyle=getComputedStyle(document.getElementById('outputwindow'))
        var body=document.createElement('body')
        for(var j=0;j<outerstyle.length;j++)
        {
                if(outerstyle[j]=='width'|| outerstyle[j]=='height')
                {
                        continue
                }
                body.style[outerstyle[j]]=document.getElementById('outputwindow').style[outerstyle[j]]
        }
        var child=outer.childNodes
        child.forEach((ele)=>{body.appendChild(ele);console.log(ele)})
        for(var i of outer.childNodes)
        {
               // div.appendChild(child[i])
               body.appendChild(i)
                console.log(i)//backgroundcolor=black
        }
       
        var temp='<html><head><tile></title></head>'+body.outerHTML
       temp =temp+'</html>'
       var dd=''
       
        var file = new Blob([temp],{text:'text/plain'})
        var link = document.createElement('a')
        link.href=URL.createObjectURL(file)
        var date =new Date()
        dd=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()+'_'+date.getMonth()+'_'+date.getFullYear()
        link.download=dd+".html"
        link.click()
        URL.revokeObjectURL(link.href)
})
box1.forEach((obj)=>{obj.addEventListener('click',(e)=>{obj.style.opacity=0.4;var x=0;var inter=setInterval(()=>{if(x==270){obj.style.opacity=1;clearInterval(inter);}obj.style.opacity=1*Math.cos(x);x=x+10},24);outputwindowadder(e)})})

document.getElementById('outputwindow').addEventListener('click',(e)=>{
        z=document.getElementById('row3');
        z.remove(z.childNodes);
        row3adder(e)})
function stylecallback(eve)
{

 if(eve.keyCode==13)
 {
        var val=eve.target.value
        if(val=='bottom'.toString())
        {
                document.getElementById('row3').style.height=document.getElementById('row3').style.height+val
        }
        var place=eve.target.placeholder
        var temp=''
        var elestyle=getComputedStyle(current_selected_element)
        //elestyle['position']='absolute'
        for(var i=0;i<elestyle.length;i++)
        {
                temp=elestyle[i]
                if(temp==eve.target.id)
                {
                        current_selected_element.style[elestyle[i]]=val
                        break
                }
        }

        console.log(val,place,current_selected_element,temp,current_selected_element.style[temp])
}
}
function callbackattr(eve)
{
        if(eve.keyCode===13)
        {
                var val=eve.target.value
                var place=eve.target.id
                console.log('place',place)
                eve.target.placeholder=val
                current_selected_element.setAttribute(place,val)
                console.log('current ',current_selected_element[place])
                current_selected_element.place=val
                current_selected_element[place]=val
                current_selected_element[placeholder]=val
                e.target
        }

} 

function textadder(stylevalue,name)
{
        document.getElementById('row3').style.background=''
        var ob=document.createElement('input')
        var br=document.createElement('br')
        if(name==='color')
        {
                ob.type='color'
                ob.style.width='100px'
                current_selected_element.style.position='absolute'
                if(current_selected_element==document.getElementById('outputwindow'))
                {
                        current_selected_element.style['position']='relative'
                        
                }
                
        }
        else if(name==='background-color')
        {
                ob.type='color'
                ob.style.width='100px'
        }
        else
        {
        ob.style.type = 'text'
        ob.style.borderBottomRightRadius = '50px'
        ob.style.borderTopLeftRadius='50px'
        ob.style.textAlign = 'center'
        }
        ob.placeholder=stylevalue
        ob.style.left=0
        ob.id=name
        ob.addEventListener('keydown',(e)=>{stylecallback(e)})
       document.getElementById('row3').appendChild(ob)
        document.getElementById('row3').appendChild(br)
        document.getElementById('row3').appendChild(br)

}
var attrclick=-1
function attradder(attr,e)
{
        var ob=document.createElement('input')
        var br=document.createElement('br')
        ob.style.type = 'text'
        ob.style.borderBottomLeftRadius = '50px'
        ob.style.borderTopRightRadius='50px'
        ob.style.textAlign = 'center'
        ob.placeholder=e.target.attributes[attr]
        ob.style.left=0
        ob.id=attr
        console.log('ob.id',ob.id)
      ob.addEventListener('keypress',(e)=>{callbackattr(e)})
              document.getElementById('row3').appendChild(document.createElement('br'))

        document.getElementById('row3').append(attr+' : ')
        document.getElementById('row3').appendChild(ob)
        document.getElementById('row3').appendChild(br)

}
function attrfunction(e)
{
        console.log('element button',tags)
        if(++attrclick===0)
        {
                document.getElementById('row3').remove(document.getElementById('row3').childNodes[0])
                
        }
        else if(attrclick===1)
        {
                attrclick=-1
                document.getElementById('row3').remove(document.getElementById('row3').childNodes[0])
                row3adder(current_selected_element)
        }
        var data=document.getElementById('data3')
        var div=document.createElement('div')
        div.id='row3'
        div.style.width='400px'
        div.style.top=0
        div.style.overflow='hidden'
        div.style.position='absolute'
        data.appendChild(div)

        var attrbutton=document.createElement('button')
        attrbutton.style.position='sticky'
        attrbutton.style.backgroundColor='cyan'
        attrbutton.style.borderRadius='15px'
        attrbutton.innerHTML='Properties'
        attrbutton.position='sticky'
        attrbutton.style.left=150
        attrbutton.style.marginBottom=15
        attrbutton.style.marginTop=10
        attrbutton.style.opacity=0.6
        attrbutton.id='attributebutton'
        attrbutton.addEventListener('click',(e)=>{attrfunction(e)})
        document.getElementById('row3').appendChild(attrbutton)
        document.getElementById('row3').appendChild(document.createElement('br'))

        var attr=e.target.attributes
        var temp=''
        for(var i in tags)
        {
                for(var j in i)
                {
                        attradder(tags[i][j],e)
                }
        }
}
function row3adder(event) 
{
        var clicked_obj=null
        var attrbutton=document.createElement('button')
        attrbutton.style.position='sticky'
        attrbutton.style.backgroundColor='cyan'
        attrbutton.style.borderRadius='15px'
        attrbutton.innerHTML='Attribute'
        attrbutton.style.left=250
        attrbutton.style.marginBottom=15
        attrbutton.style.marginTop=10
        attrbutton.id='attributebutton'
        attrbutton.addEventListener('click',(e)=>{attrfunction(e)})
        if(typeof(event.target)===typeof(document.createElement('br')))
        {
                clicked_obj=event.target
                current_selected_element=event.target
        }
        else
        {
                clicked_obj=event
                current_selected_element=event
        }
        var data=document.getElementById('data3')
        var div=document.createElement('div')
        div.id='row3'
        div.style.width='400px'
        div.style.top=0
        div.style.overflow='hidden'
        div.style.position='absolute'
        data.appendChild(div)
        div.appendChild(attrbutton)
      //  if(clicked_obj==)
        var style=window.getComputedStyle(clicked_obj)
        var temp=''
       for(var i=0;i<style.length;i++)
       {
        temp=style[i]
        document.getElementById('row3').appendChild(document.createElement('br'))
        document.getElementById('row3').append(temp+' : ')
        textadder(style[temp],temp)
        }
}
function textboxsearch(e)
{
        var inp=[]
        var temp=null
        var coontter=0
        if(e.keyCode==13)
        {
                if(e.target.value.includes('='))
                {
                inp=e.target.value.split('=')
                var input=''
                var temp=[]
                var temp2=''
                var temp1=''
                try
                {
                       var currsty= window.getComputedStyle(current_selected_element)
                       if (inp[0].toLowerCase()==='border' && inp.length===2)
                       {
                        
                        current_selected_element['border']=' thick solid '+inp[1]
                       }
                        for(var i=0;i<currsty.length;i++)
                        {
                                temp2=''
                                temp=currsty[i]
                                temp2=temp
                                temp1=''
                                temp=temp.split('-')
                                for(var j in temp)
                                {
                                        temp1=temp1+temp[j]
                                }
                                 if(temp1.toLowerCase()===inp[0].toLowerCase())
                                {
                                        console.log('gottcha :',temp1)
                                      //  document.getElementById(temp2).placeholder=inp[1]
                                      document.getElementById(temp2).placeholder=inp[1]
                                        current_selected_element.style[temp2]=inp[1]
                                      console.log(document.getElementById(temp2).placeholder)
                                        break
                                }
                        }
                }
                catch(err)
                {
                        alert('Element is not selected , please select the element ')
                        console.log(current_selected_element)
                }
                }
                else if(e.target.value.includes('-'))
                {
                        try{
                        inp=e.target.value.split('-')
                        current_selected_element[inp[0]]=inp[1]
                        e.target.value=''          
                        
                        }
                        catch(err)
                        {
                                alert('invalid Attribute , please check your input')
                        }

                }
        
                else if(e.target.value.includes('#'))
                {
                        inp=e.target.value.split('#')
                        var span =document.createElement('span')
                        span.innerHTML=inp[1]
                        span.id='text'+coontter
                        coontter++
                        document.getElementById('outputwindow').appendChild(span)
                        current_search_element=span
                }
                else if(e.target.value.includes('<'))
                {
                        inp=e.target.value.split('<')
                      
                        var container=document.getElementById(inp[0])
                        var stuff = document.getElementById(inp[1])
                        container.appendChild(stuff)
                        console.log(inp)

                }
        e.target.value=''
        }
}
const textbox=()=>{
        var b=document.querySelector('.searchtext')
        var i=0
       b.addEventListener('keypress',(e)=>{textboxsearch(e)})
        var set =setInterval(()=>{if(i==1 || i>1){set=clearInterval(set);a.style.zIndex=-1}b.style.opacity=i,i=i+0.005;},5)
        

}
a.onclick=()=>{document.getElementById('downbutton').style.opacity=1;document.getElementById('upbutton').style.opacity=1;var set=setInterval(()=>{var k=0;box1.forEach((obj)=>{obj.style.zIndex=0});if(p<15){ clearInterval(set);a.style.fontSize=p/2;a.style.borderWidth=2;a.style.borderColor='grey';textbox();}else{a.style.borderRadius='2%';a.style.backgroundColor='grey';a.style.height=p;a.style.borderWidth=(a.style.borderWidth/p);p=p-10;a.style.top=45-j;j=j+9;a.style.left= 0;a.style.opacity=(j+(1/p));a.style.right=0;a.style.width='150px';box1.forEach((obj)=>{obj.style.opacity=((k+1/p)*10);})}},5)}



function nodegetter(node,searchnode)
{
        const list = node.childNodes;
        var search=null
        
        if(node.id==searchnode)
        {
                search=node
                return node
        }
        if(list.length==0)
        {
                return
        }
        for(let i of list)
        {
                search=nodegetter(i,searchnode)
                 
                if(search!=null)
                {
                        
                        break
                }
        }
        return search
}
function sty(obj)
{
        for (const key in menu) {
                 obj.style[key]=menu[key]
        }
}
function outputwindowadder(e)
{
        var obj=e.target
        var node=document.createElement(obj.id)
        node.innerHTML='test working'
        document.getElementById('outputwindow').appendChild(node)
        current_selected_element=node
        console.log(current_selected_element)
}

        function box(boo)
        {
                
         if(boo==1)
         {
                if(box2[box2_controll_num]==undefined)
                {
                        return null
                }
                var ob=document.createElement('button')
                sty(ob)
                ob.id=box2[box2_controll_num].toString()
                ob.innerHTML=box2[box2_controll_num].toString().toUpperCase()
                box2_controll_num++
                ob.addEventListener('click',(e)=>{ob.style.opacity=0.4;var x=0;var inter=setInterval(()=>{if(x==270){ob.style.opacity=1;clearInterval(inter);}ob.style.opacity=1*Math.cos(x);x=x+10},24);outputwindowadder(e)})
                box1.push(ob)
                document.getElementById('row1').appendChild(ob)
                document.getElementById('row1').removeChild(box1[box1_remove_num])
                box1_remove_num++
                console.log(document.getElementById('row1').childNodes)
                console.log('box1 in 1',box1_remove_num,'box2 in 1',box2_controll_num)
        }
        else if(boo==0)
        {
                if(box1_remove_num==0)
                {
                        return null
                }
                if(box1_remove_num==1)
                {
                        document.getElementById('row1').removeChild(box1[3])
                        document.getElementById('row1').appendChild(box1[0])

                        box2_controll_num=0
                        return null
                }        
        for(var i =box1_remove_num;i<box1_remove_num+3;i++)
         {
                document.getElementById('row1').removeChild(box1[i])
         }
         for(var i=--box1_remove_num;i<box1_remove_num+3;i++)
         {
                document.getElementById('row1').appendChild(box1[i])

         }
         box2_controll_num--
        }
}
var upbutton=document.getElementById('upbutton')
var downbutton=document.getElementById('downbutton')
upbutton.addEventListener('click',()=>{box(0)})
downbutton.addEventListener('click',()=>{box(1)})

