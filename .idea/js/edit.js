function edit(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let staffName = urlParams.get('staffname')
    let age = urlParams.get('age')
    let name = urlParams.get('name')
    console.log(staffName);
    let str = ' <table class="table table-bordered">\n' +
        '            <thead>\n' +
        '            <tr>\n' +
        '                <th>Tên</th>\n' +
        '                <th>Tuổi</th>\n' +
        '                <th>Phòng Ban</th>\n' +
        '            </tr>\n' +
        '            </thead>';
        str += `
                <tr>
                    <td><p id="txtstaffname">${staffName}</p></td>
                    <td><input type="text" value="${staffName}" id="txtstaffname2" hidden="true"></td>
                    <td><p id="txtage">${age}</p></td>
                    <td><input type="text" value="${age}" id="txtage2" hidden="true"></td>
                    <td><p id="txtname">${name}</p></td>
                    <td><input type="text" value="${name}" id="txtname2" hidden="true"></td>

                </tr>
                       `

    str += `</tbody>`
    document.getElementById("edit").innerHTML = str;
}