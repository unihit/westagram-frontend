const input_area = document.querySelector('.input_area');
const upload_btn = document.querySelector('.upload_btn');
const comment_section_user_text = document.querySelector('.comment_section_user_text');
const search_bar_container = document.querySelector('.search_bar_container');

upload_btn.addEventListener('click',function(){
    let tag_list=document.createElement('li');

    if(input_area.value.length==0){
        alert("댓글을 입력해주세요");
    }else{    
        tag_list.innerHTML=`WeCode `+`${input_area.value}`;
        comment_section_user_text.appendChild(tag_list);
        input_area.value="";
    }
})

search_bar_container.addEventListener("click",function(){
    search_bar_container.remove();
})