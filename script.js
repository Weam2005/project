// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp({
        apiKey: "AIzaSyC6bPe1t1BBFmKGqr5YaQJBlPg83fnDM3c",
        authDomain: "university-platform-wave.firebaseapp.com",
        projectId: "university-platform-wave",
        storageBucket: "university-platform-wave.firebasestorage.app",
        messagingSenderId: "138570274453",
        appId: "1:138570274453:web:d7b026542a18e6fe146d9c",
        measurementId: "G-F8XK17YPCC"
    });
const analytics = getAnalytics(app);
// تكوين Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// تهيئة Firebase
firebase.initializeApp({
        apiKey: "AIzaSyC6bPe1t1BBFmKGqr5YaQJBlPg83fnDM3c",
        authDomain: "university-platform-wave.firebaseapp.com",
        projectId: "university-platform-wave",
        storageBucket: "university-platform-wave.firebasestorage.app",
        messagingSenderId: "138570274453",
        appId: "1:138570274453:web:d7b026542a18e6fe146d9c",
        measurementId: "G-F8XK17YPCC"
    });
const database = firebase.database();

// ✅ (1) تبادل الكتب 📚
function addBook() {
    const bookTitle = document.getElementById("bookTitle").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const contactInfo = document.getElementById("contactInfo").value;

    if (bookTitle && bookAuthor && contactInfo) {
        database.ref("books").push({
            title: bookTitle, author: bookAuthor, description: bookDescription, contact: contactInfo
        });
        alert("تمت إضافة الكتاب!");
        loadBooks();
    } else {
        alert("الرجاء إدخال جميع المعلومات!");
    }
}

function loadBooks() {
    const booksList = document.getElementById("booksList");
    booksList.innerHTML = "";
    database.ref("books").once("value", (snapshot) => {
        snapshot.forEach((child) => {
            const book = child.val();
            booksList.innerHTML += `<div><strong>${book.title}</strong> - ${book.author} <br> ${book.description} <br> 📞 ${book.contact}</div>`;
        });
    });
}

// ✅ (2) تنظيم المذاكرة 📅
function addSchedule() {
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const notes = document.getElementById("notes").value;

    if (subject && date && time) {
        database.ref("studySchedule").push({ subject, date, time, notes });
        alert("تمت إضافة الجدول!");
        loadSchedule();
    } else {
        alert("الرجاء إدخال جميع المعلومات!");
    }
}

function loadSchedule() {
    const scheduleList = document.getElementById("scheduleList");
    scheduleList.innerHTML = "";
    database.ref("studySchedule").once("value", (snapshot) => {
        snapshot.forEach((child) => {
            const schedule = child.val();
            scheduleList.innerHTML += `<div>${schedule.subject} - ${schedule.date} ${schedule.time} <br>${schedule.notes}</div>`;
        });
    });
}

// ✅ (3) التذكيرات ⏰
function addReminder() {
    const task = document.getElementById("task").value;
    const dueDate = document.getElementById("dueDate").value;
    if (task && dueDate) {
        database.ref("reminders").push({ task, dueDate });
        alert("تمت إضافة التذكير!");
        loadReminders();
    }
}

function loadReminders() {
    const remindersList = document.getElementById("remindersList");
    remindersList.innerHTML = "";
    database.ref("reminders").once("value", (snapshot) => {
        snapshot.forEach((child) => {
            const reminder = child.val();
            remindersList.innerHTML += `<div>${reminder.task} - 🔔 الموعد: ${reminder.dueDate}</div>`;
        });
    });
}

// ✅ (4) متابعة التقدم الدراسي 📊
function addGrade() {
    const course = document.getElementById("course").value;
    const grade = document.getElementById("grade").value;
    if (course && grade) {
        database.ref("grades").push({ course, grade });
        alert("تمت إضافة الدرجة!");
        loadGrades();
    }
}

function loadGrades() {
    const gradesList = document.getElementById("gradesList");
    gradesList.innerHTML = "";
    database.ref("grades").once("value", (snapshot) => {
        snapshot.forEach((child) => {
            const grade = child.val();
            gradesList.innerHTML += `<div>${grade.course}: ${grade.grade} ⭐</div>`;
        });
    });
}

// ✅ (5) تنظيم الأنشطة والفعاليات 🎉
function addEvent() {
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    if (eventName && eventDate) {
        database.ref("events").push({ eventName, eventDate });
        alert("تمت إضافة الفعالية!");
        loadEvents();
    }
}

function loadEvents() {
    const eventsList = document.getElementById("eventsList");
    eventsList.innerHTML = "";
    database.ref("events").once("value", (snapshot) => {
        snapshot.forEach((child) => {
            const event = child.val();
            eventsList.innerHTML += `<div>${event.eventName} - 📆 ${event.eventDate}</div>`;
        });
    });
}

// ✅ (6) متابعة المواصلات 🚍
function loadTransport() {
    document.getElementById("transportInfo").innerHTML = "🚍 تحديث بيانات المواصلات...";
}
const db = firebase.database().ref("books");

// إضافة كتاب جديد
function addBook() {
    let title = document.getElementById("bookTitle").value;
    let author = document.getElementById("bookAuthor").value;
    let description = document.getElementById("bookDescription").value;
    let contact = document.getElementById("contactInfo").value;

    db.push({
        title, 
        author, 
        description, 
        contact
    });

    alert("📚 تمت إضافة الكتاب بنجاح!");
}

// عرض الكتب عند إضافتها
db.on("child_added", function(snapshot) {
    let book = snapshot.val();
    document.getElementById("booksList").innerHTML += `
        <div>
            <h3>${book.title}</h3>
            <p>المؤلف: ${book.author}</p>
            <p>${book.description}</p>
            <p>📞 ${book.contact}</p>
        </div>
        <hr>
    `;
});
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});
