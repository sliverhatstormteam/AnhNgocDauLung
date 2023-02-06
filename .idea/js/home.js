

function show2() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/blogs",
        //xử lý khi thành công
        success: function (staffs) {
            console.log(staffs)
            let str = ' <table class="table table-bordered">\n' +
                '            <thead>\n' +
                '            <tr>\n' +
                '                <th>Tên</th>\n' +
                '                <th>Tuổi</th>\n' +
                '                <th>Phòng Ban</th>\n' +
                '            </tr>\n' +
                '            </thead>';
            for (const staff of staffs) {
                str += `
                <tr>
                    <td>${staff.staffName}</td>
                    <td>${staff.age}</td>
                    <td> ${staff.category.name}</td>
                    <td><a type="button" class="btn btn-warning"  href="edit.html?id=${staff.id}&staffname=${staff.staffName}&age=${staff.age}&name=${staff.category.name}&idDepartment=${staff.category.id}"  >Edit</input></td>
                    <td><a type="button" class="btn btn-danger" onclick="deleteBlogs(${staff.id})">Delete</a></td>
                </tr>
                       `
            }
            str += `</tbody>`
            document.getElementById("show").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}

show2();

function clearEdit() {
    document.getElementById("id").value = 0;
    $("#name").val("");
    $("#age").val("");
    $("#departmentName").val("");
}

// function create() {
//     let blog = {
//         "title": document.getElementById("title").value,
//         "content": $("#content").val(),
//         "img": $("#img").val(),
//         "category": {
//             "id": $("#idCategoty").val(),
//         }
//     }
//
//     if (!isCreate) {
//         blog.id = $("#id").val();
//     }
//
//     $.ajax({
//         type: "Post",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         url: "http://localhost:8080/blogs",
//         data: JSON.stringify(blog),
//         //xử lý khi thành công
//         success: function (data) {
//             alert("Thành công");
//             show2();
//         },
//         error: function (err) {
//             console.log(err)
//         }
//     })
// }

function showEdit(id) {
    isCreate = false;
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/blogs/" + id,
        //xử lý khi thành công
        success: function (blog) {
            document.getElementById("id").value = blog.id;
            $("#content").val(blog.content);
            $("#title").val(blog.title);
            $("#img").val(blog.img);
            $("#idCategoty").val(blog.category.id);
            show3();
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function deleteBlogs(id) {
    $.ajax({
        url: "http://localhost:8080/blogs/" + id,
        type: 'DELETE',
        data: JSON.stringify(id),
        traditional: true,
        dataType: 'json',
        success: function (result) {
            alert("Thành công");
            show2();
        },
        error: function (result) {
            console.log(err)
        }

    });
}

function show3() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        url: "http://localhost:8080/blogs",
        //xử lý khi thành công
        success: function (blogs) {
            console.log(blogs)
            let str = `
                               <div id="categoriesSelect">
                                   <select id="idCategoty">
             `
            for (const blog of blogs.content) {
                str += `  
                        <option value=${blog.category.id}>${blog.category.name}</option>
                 `
            }
            str += `  
                      </select>
                    </div>   
                 `
            document.getElementById("categoriesSelect").innerHTML = str;

        },
        error: function (err) {
            console.log(err)
        }
    })
}