const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

// إنشاء كائن Date للحصول على الوقت والتاريخ الحالي
var currentDate = new Date();

// الحصول على السنة
var year = currentDate.getFullYear();

// الحصول على الشهر (يبدأ من 0، لذا نقوم بإضافة 1)
var month = currentDate.getMonth() + 1;

// الحصول على اليوم
var day = currentDate.getDate();

// الحصول على الساعة
var hour = currentDate.getHours();

// الحصول على الدقائق
var minutes = currentDate.getMinutes();

// الحصول على الثواني
var seconds = currentDate.getSeconds();

// تجميع المكونات للحصول على تاريخ كامل
var fullDate = year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day + " " + (hour < 10 ? "0" : "") + hour + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;







const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// تمكين تحليل الجسم في طلبات POST
app.use(bodyParser.json());

const db = new sqlite3.Database('database.db');
const sql = `INSERT INTO names (name,awnser,date) VALUES (?,?,?)`;
// نقطة نهاية POST لاستقبال البيانات من العميل
app.post('/submit', (req, res) => {
  const { name, awnser } = req.body;
  console.log('Received name from client:', name);
  console.log('Received an awnser from client:', awnser);
  // هنا يمكنك تنفيذ العمليات المطلوبة مع الاسم المستلم
  db.run(sql, [name,awnser,fullDate], (err) => {
    if (err) {
      // التعامل مع الأخطاء
      console.error('Error inserting data into database:', err);
      res.status(500).json({ error: 'Error inserting data into database' });
    } else {
      // إرسال استجابة إلى العميل لإشعاره بنجاح العملية
      res.json({ message: 'Data inserted successfully' });
    }
  });
});

// بدء الخادم
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});