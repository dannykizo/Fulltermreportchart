const ctx = document.getElementById('doughnut').getContext('2d');
const doughnut = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Tiền lương', 'Phụ cấp', 'Tiền thưởng', 'Thu nhập phụ', 'Đầu tư', 'Khác'],
        datasets: [{
             label: 'Percentage',
            data: [65.3, 22.7, 5.2, 6.8, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                let label = data.labels[tooltipItem.index] || '';
                if (label) {
                  label += ': ';
                }
                label += parseFloat(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]).toFixed(2) + '\u0025';
                return label;
              }
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

let monthEle = document.querySelector('.month');
let yearEle = document.querySelector('.year');
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');
let dateEle = document.querySelector('.date-container');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function displayInfo() {
    // Hiển thị tên tháng
    let currentMonthName = new Date(
        currentYear,
        currentMonth
    ).toLocaleString('en-us', { month: 'long' });

    monthEle.innerText = currentMonthName;

    // Hiển thị năm
    yearEle.innerText = currentYear;
    
    // Hiển thị ngày trong tháng
    renderDate();
}

// Lấy số ngày của 1 tháng
function getDaysInMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
}

// Lấy ngày bắt đầu của tháng
function getStartDayInMonth() {
    return new Date(currentYear, currentMonth, 1).getDay();
}

// Active current day
function activeCurrentDay(day) {
    let day1 = new Date().toDateString();
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'active' : '';
}

// Hiển thị ngày trong tháng lên trên giao diện
function renderDate() {
    let daysInMonth = getDaysInMonth();
    let startDay = getStartDayInMonth();

    dateEle.innerHTML = '';

    for (let i = 0; i < startDay; i++) {
        dateEle.innerHTML += `
            <div class="day"></div>
        `;
    }

    for (let i = 0; i < daysInMonth; i++) {
        dateEle.innerHTML += `
            <div class="day ${activeCurrentDay(i + 1)}">
            ${i + 1}
            </div>
        `;
    }
}

// Xử lý khi ấn vào nút next month
btnNext.addEventListener('click', function () {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    displayInfo();
});

// Xử lý khi ấn vào nút previous month
btnPrev.addEventListener('click', function () {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    displayInfo();
});

window.onload = displayInfo;

// modal
// open modal register  
const regBtns = document.querySelectorAll('.js-register')
const modal = document.querySelector('.js-show_register')
function showModal() {
    modal.classList.add('open')
    modal1.classList.remove('open')
}
for (const regBtn of regBtns) {
    regBtn.addEventListener('click', showModal)
}


// close register
const closeBtn = document.querySelector('.js-close')
function hideBtn(){
    modal.classList.remove('open')
}
closeBtn.addEventListener('click', hideBtn)


// close when click outward
const authForms = document.querySelectorAll('.js-auth-form')
modal.addEventListener('click', hideBtn)
for (const authForm of authForms ) { 
    authForm.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}

// open modal login 
const showLogins = document.querySelectorAll('.js-login')
const modal1 = document.querySelector('.js-show_login')
function showModalLogin() {
    modal1.classList.add('open')
    modal.classList.remove('open')
}
for (const showLogin of showLogins) {
    showLogin.addEventListener('click', showModalLogin)
}

// close Login 
const closeLoginBtns = document.querySelectorAll('.js-login_close')
function hideLoginBtn(){
    modal1.classList.remove('open')
}
for (const closeLoginBtn of closeLoginBtns) {
    closeLoginBtn.addEventListener('click', hideLoginBtn)
}

// close when click outward
const authLoginForms = document.querySelectorAll('.js-auth-form_login')
modal1.addEventListener('click', hideLoginBtn)
for (const authLoginForm of authLoginForms ) { 
    authLoginForm.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}



// info-nhóm
const infoBtns = document.querySelectorAll('.js-info')
const modalInfo = document.querySelector('.js-show_info')
function showModalInfo() {
    modalInfo.classList.add('open')
    modal2.classList.remove('open')
}
for (const infoBtn of infoBtns) {
    infoBtn.addEventListener('click', showModalInfo)
}


// close info
const closeInfoBtn = document.querySelector('.js-info-close')
function hideBtnInfo(){
    modalInfo.classList.remove('open')
}
closeInfoBtn.addEventListener('click', hideBtnInfo)


// close when click outward
const authFormsInfo = document.querySelectorAll('.js-auth-form-info')
modalInfo.addEventListener('click', hideBtnInfo)
for (const authFormInfo of authFormsInfos ) { 
    authForm.addEventListener('click', function (event) {
        event.stopPropagation()
    })
}



