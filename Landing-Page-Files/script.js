const projects_box=document.querySelector(".projects-box")

projects.forEach(function(each_project){
    project_html='<div class="each-project">'
    project_html+='<h2>'+each_project.name+'</h2>'
    project_html+='<div class="button-box">'
    // If the project is static then only render Preview Button 
    if(each_project.is_static)
        project_html+='<a href="https://htmlpreview.github.io/?https://github.com/cat2k22/Hacktoberfest2022/blob/main/'+each_project.name+'/index.html"><button><i class="fa fa-external-link" aria-hidden="true"></i> Preview</button></a>'
    project_html+='<a href="https://github.com/cat2k22/Hacktoberfest2022/tree/main/'+each_project.name+'"><button class="github"><i class="fa fa-github" aria-hidden="true"></i> Github File</button></a>'
    project_html+='</div>'
    project_html+='<p>Contribution : <a href="https://github.com/'+each_project.author+'">'+each_project.author+'</a></p>'
    project_html+='</div>'
    projects_box.innerHTML+=project_html
})