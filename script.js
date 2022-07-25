var profileData = [
    {
        img: '/img/selvasir.jpeg',
        name: 'SelvaMariyappan',
        role: 'Staff from Thippanampatti',
        gitlink: 'https://github.com/selva06092020',
        resumelink: 'https://www.jobscan.co/wp-content/uploads/resume-upload-to-linkedin.png',
        primaryLang1: 'HTML,',
        primaryLang2: 'CSS,',
        primaryLang3: 'JavaScript',
        salary: '2.5 L',
        degree: 'BE-',
        year: '2019-',
        percentage: '55%-',
        hsc: 'HSC-State Board-2016-62%',
        sslc: 'SSLC-State-Board-2014-76%',
    },
    {
        img: '/img/muthukumar-img.jpeg',
        name: 'Muthukumar',
        role: 'Fresher from Pullukattuvalasai',
        gitlink: 'https://github.com/selva06092020',
        resumelink: 'https://www.jobscan.co/wp-content/uploads/resume-upload-to-linkedin.png',
        primaryLang1: 'HTML,',
        primaryLang2: 'CSS,',
        primaryLang3: 'JavaScript',
        salary: '3.5 L',
        degree: 'BSC-',
        year: '2019-',
        percentage: '55%-',
        hsc: 'HSC-State Board-2016-62%',
        sslc: 'SSLC-State-Board-2014-76%',
    },
    {
        img: '/img/rahul-img.jpeg',
        name: 'Rahul',
        role: 'Fresher from Pullukattuvalasai',
        gitlink: 'https://github.com/selva06092020',
        resumelink: 'https://www.jobscan.co/wp-content/uploads/resume-upload-to-linkedin.png',
        primaryLang1: 'HTML,',
        primaryLang2: 'CSS,',
        primaryLang3: 'JavaScript',
        salary: '3.5 L',
        degree: 'BSC-',
        year: '2019-',
        percentage: '55%-',
        hsc: 'HSC-State Board-2016-62%',
        sslc: 'SSLC-State-Board-2014-76%',
    },
    {
        img: '/img/alphanse-img.jpeg',
        name: 'Alphanse',
        role: 'Fresher from Alangulam',
        gitlink: 'https://github.com/selva06092020',
        resumelink: 'https://www.jobscan.co/wp-content/uploads/resume-upload-to-linkedin.png',
        primaryLang1: 'HTML,',
        primaryLang2: 'CSS,',
        primaryLang3: 'JavaScript',
        salary: '3.5 L',
        degree: 'BE-',
        year: '2019-',
        percentage: '55%-',
        hsc: 'HSC-State Board-2016-62%',
        sslc: 'SSLC-State-Board-2014-76%',
    },
    {
        img: '/img/mari-pic.jpeg',
        name: 'Mariselvam',
        role: 'Fresher from Pulangulam',
        gitlink: 'https://github.com/selva06092020',
        resumelink: 'https://www.jobscan.co/wp-content/uploads/resume-upload-to-linkedin.png',
        primaryLang1: 'HTML,',
        primaryLang2: 'CSS,',
        primaryLang3: 'JavaScript',
        salary: '3.5 L',
        degree: 'BE-',
        year: '2019-',
        percentage: '65%-',
        hsc: 'HSC-State Board-2016-62%',
        sslc: 'SSLC-State-Board-2014-76%',
    },
    {
        img: '/img/my-img.jpeg',
        name: 'Leowilson',
        role: 'Fresher from Surandai',
        gitlink: 'https://github.com/selva06092020',
        resumelink: 'https://www.jobscan.co/wp-content/uploads/resume-upload-to-linkedin.png',
        primaryLang1: 'HTML,',
        primaryLang2: 'CSS,',
        primaryLang3: 'JavaScript',
        salary: '3.5 L',
        degree: 'BCA-',
        year: '2019-',
        percentage: '55%-',
        hsc: 'HSC-State Board-2018-74%',
        sslc: 'SSLC-State-Board-2016-85%',
    },
    {
        
        img: '/img/chithirai-img.jpeg',
        name: 'Chithiraivel',
        role: 'Fresher from Vembar',
        gitlink: 'https://github.com/selva06092020',
        resumelink: 'https://www.jobscan.co/wp-content/uploads/resume-upload-to-linkedin.png',
        primaryLang1: 'HTML,',
        primaryLang2: 'CSS,',
        primaryLang3: 'JavaScript',
        salary: '3.5 L',
        degree: 'BE-',
        year: '2019-',
        percentage: '55%-',
        hsc: 'HSC-State Board-2018-74%',
        sslc: 'SSLC-State-Board-2016-85%',
    }
]
var mainContainer;
var flexDiv;
flexDiv = document.createElement('div');
flexDiv.setAttribute('id', 'first-div');
document.body.appendChild(flexDiv);

var createBox = function idCard(data) {

    // create main container
    mainContainer = document.createElement('div');
    mainContainer.setAttribute('class', 'main-container');

    // create boxes
    var boxDiv = document.createElement('div');
    boxDiv.setAttribute('class', 'box-1');
    // mainContainer.appendChild(boxDiv);

    // create flex-1
    var flex_1 = document.createElement('div');
    flex_1.setAttribute('class', 'flex-1');
    boxDiv.appendChild(flex_1);

    // create img element
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.img);
    flex_1.appendChild(imgElement);

    // create name element
    var nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'name');
    var nameElement = document.createElement('h2');
    nameElement.innerHTML = data.name;
    var rolePara = document.createElement('p');
    rolePara.innerHTML = data.role;
    nameDiv.append(nameElement, rolePara);
    flex_1.appendChild(nameDiv);

    // create icon element
    var iconElement = document.createElement('div');
    iconElement.setAttribute('class', 'icon');
    var link_1 = document.createElement('a');
    link_1.setAttribute('href', data.gitlink);
    link_1.setAttribute('target', 'blank');
    var gitIcon = document.createElement('i');
    gitIcon.setAttribute('class', "fa fa-github");
    link_1.appendChild(gitIcon);
    // create icon-2 element
    var link_2 = document.createElement('a');
    link_2.setAttribute('href', data.resumelink);
    link_2.setAttribute('target', 'blank');
    var resIcon = document.createElement('i');
    resIcon.setAttribute('class', 'fa fa-file-text-o');
    link_2.appendChild(resIcon);
    iconElement.append(link_1, link_2);
    flex_1.appendChild(iconElement);


    // create flex-2
    var flex_2 = document.createElement('div');
    flex_2.setAttribute('class', 'flex-2');
    boxDiv.appendChild(flex_2);
    // console.log(flex_2);

    // create left container
    var leftContainer = document.createElement('div');
    leftContainer.setAttribute('class', 'left-flex');

    // create primary skill container
    var primaryDiv = document.createElement('div');
    primaryDiv.setAttribute('class', 'pri-skills');
    leftContainer.appendChild(primaryDiv);

    // create primary heading
    var primary = document.createElement('h2');
    primary.innerHTML = 'primary skills';
    primaryDiv.appendChild(primary);

    // create line 
    var lineHeightContainer = document.createElement('div');
    lineHeightContainer.setAttribute('class', 'line-1');
    var langPara = [data.primaryLang1, data.primaryLang2, data.primaryLang3];
    for (i = 0; i < langPara.length; i++) {
        var para = document.createElement('p');
        para.innerHTML = langPara[i];
        lineHeightContainer.append(para);
    }
    primaryDiv.appendChild(lineHeightContainer);

    // create secondary skill
    var primaryDiv_2 = document.createElement('div');
    primaryDiv_2.setAttribute('class', 'pri-skills');
    //  create secondary head
    var secondary = document.createElement('h2');
    secondary.innerHTML = 'secondary skill';
    primaryDiv_2.appendChild(secondary);

    // create line-2
    var lineHeightContainer_2 = document.createElement('div');
    lineHeightContainer_2.setAttribute('class', 'line-1');
    var a = ['visual-code-studio', 'git'];
    for (i = 0; i < a.length; i++) {
        var para_2 = document.createElement('p');
        para_2.innerHTML = a[i];
        lineHeightContainer_2.append(para_2);
    }
    primaryDiv_2.appendChild(lineHeightContainer_2);
    leftContainer.appendChild(primaryDiv_2);


    // salary container
    var primaryDiv_3 = document.createElement('div');
    primaryDiv_3.setAttribute('class', 'pri-skills');
    var salaryDiv = document.createElement('h2');
    salaryDiv.innerHTML = 'expected salary';
    primaryDiv_3.appendChild(salaryDiv);
    var lineHeightContainer_3 = document.createElement('div');
    lineHeightContainer_3.setAttribute('class', 'line-1');
    var para_3 = document.createElement('p');
    para_3.innerHTML = '2.5 L';
    lineHeightContainer_3.appendChild(para_3);
    primaryDiv_3.appendChild(lineHeightContainer_3);
    leftContainer.appendChild(primaryDiv_3);
    flex_2.appendChild(leftContainer);

    // create right container
    var rightContainer = document.createElement('div');
    rightContainer.setAttribute('class', 'right-flex');
    var primaryDiv_4 = document.createElement('div');
    primaryDiv_4.setAttribute('class', 'pri-skills');
    // create education element
    var education = document.createElement('h2');
    education.innerHTML = 'education';
    primaryDiv_4.appendChild(education);
    var lineHeightContainer_4 = document.createElement('div');
    lineHeightContainer_4.setAttribute('class', 'line-2');
    var instutionDetails = [data.degree, data.year, data.percentage, 'CGPA', data.hsc, data.sslc];
    for (i = 0; i < instutionDetails.length; i++) {
        var para_4 = document.createElement('p');
        para_4.innerHTML = instutionDetails[i];
        lineHeightContainer_4.appendChild(para_4);
    }
    primaryDiv_4.appendChild(lineHeightContainer_4);
    rightContainer.appendChild(primaryDiv_4);

    // available container create
    var availDiv = document.createElement('div');
    availDiv.setAttribute('class', 'pri-skills');
    // available element
    var availElement = document.createElement('h2');
    availDiv.appendChild(availElement);
    availElement.innerHTML = "availability";
    availDiv.appendChild(availElement);
    var lineHeightContainer_5 = document.createElement('div');
    lineHeightContainer_5.setAttribute('class', 'line-2');
    var para_5 = document.createElement('p');
    para_5.innerHTML = 'immediate';
    lineHeightContainer_5.appendChild(para_5);
    rightContainer.appendChild(availDiv);
    availDiv.appendChild(lineHeightContainer_5);
    // flexDiv.appendChild(mainContainer);
    mainContainer.appendChild(boxDiv);
    boxDiv.appendChild(rightContainer);
    flex_2.appendChild(rightContainer);
    // console.log(mainContainer);

    flexDiv.appendChild(mainContainer);
}
profileData.forEach(createBox);

// get filter-btn
var filter_btn = document.getElementById('fil-select');

// filtet-btn change option
filter_btn.addEventListener('change', function () {
    flexDiv.innerHTML = '';
    var y = filter_btn.value;
    var loop = function (fillterData) {
        var filterElement = fillterData;
        // console.log(filterElement.degree);
        if (filterElement.degree == y) {
            // x.data = filterElement;
            createBox(filterElement);
        }
    }
    profileData.forEach(loop);
});

 // another method for removeChild 

 // const list = document.getElementById("first-div");
 // while (list.hasChildNodes()) {
    //     list.removeChild(list.firstChild);
    // }

