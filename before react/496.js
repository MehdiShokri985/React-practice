
//#region StrictMode
/**
 * ***********************************************************************************
 * StrictMode در جاوا اسکریپت (خود زبان)
 * ***********************************************************************************
 *
 * توضیح مختصر:
 * StrictMode یک حالت "سختگیرانه" برای کد جاوا اسکریپت شما است که خطاها و رفتارهای بد را که در حالت عادی
 * نادیده گرفته می‌شوند، صریحاً اعلام می‌کند. این کار به شما کمک می‌کند کدهای پاک‌تر و قابل اطمینان‌تری بنویسید
 * و از باگ‌های رایج جلوگیری کنید. برای فعال کردن آن، `'use strict';` را در ابتدای فایل یا تابع قرار دهید.
 */

// --- مثال واقعی 1: جلوگیری از متغیرهای سراسری ناخواسته ---

// حالت عادی (بدون StrictMode):
function calculateTotalLoose() {
  // اشتباهاً 'total' را بدون 'let' یا 'const' تعریف کردیم
  totalLoose = 100;
  console.log("Loose Mode - inside function:", totalLoose); // خروجی: 100
}
calculateTotalLoose();
console.log("Loose Mode - outside function (global):", totalLoose); // خروجی: 100 (اوه! 'totalLoose' تبدیل به یک متغیر سراسری شد)

// با StrictMode:
function calculateTotalStrict() {
  'use strict'; // فعال کردن StrictMode برای این تابع
  // totalStrict = 100; // Uncaught ReferenceError: totalStrict is not defined (جاوا اسکریپت سریعاً خطا می‌دهد!)
  let totalStrict = 100; // این درست است
  console.log("Strict Mode - inside function:", totalStrict);
}
calculateTotalStrict();
// console.log("Strict Mode - outside function (global):", totalStrict);
// اگر خط 'totalStrict = 100;' را کامنت کنید، این تابع بدون خطا اجرا می‌شود.
// برای دیدن خطای 'ReferenceError'، خط 'totalStrict = 100;' را فعال کنید و تابع را اجرا کنید.


// --- مثال واقعی 2: ممنوعیت پارامترهای تکراری تابع ---

// حالت عادی (بدون StrictMode):
function createProductLoose(id, name, name) { // 'name' دو بار تکرار شده
  console.log(`Loose Mode - ID: ${id}, Name: ${name}`); // از آخرین 'name' استفاده می‌شود
}
createProductLoose(1, 'Laptop', 'Notebook'); // خروجی: Loose Mode - ID: 1, Name: Notebook

// با StrictMode:
// (نکته: این خطا در زمان parsing کد رخ می‌دهد، نه در زمان اجرا، بنابراین اگر فعال باشد، فایل اجرا نمی‌شود.)
// اگر می‌خواهید این خطا را ببینید، خطوط زیر را از کامنت خارج کنید.
/*
'use strict';
function createProductStrict(id, name, name) { // SyntaxError: Duplicate parameter name not allowed in this context
  console.log(`Strict Mode - ID: ${id}, Name: ${name}`);
}
createProductStrict(2, 'Mouse', 'Wireless Mouse');
*/


/**
 * ***********************************************************************************
 * StrictMode در React (فقط برای توسعه)
 * ***********************************************************************************
 *
 * توضیح مختصر:
 * StrictMode در React یک ابزار توسعه‌دهنده (فقط برای حالت Development) است که به شما کمک می‌کند
 * مشکلات احتمالی در کامپوننت‌های React خود را شناسایی کنید. این کار را با انجام بررسی‌های اضافی و
 * دو بار فراخوانی برخی از توابع انجام می‌دهد تا اثرات جانبی ناخواسته را آشکار کند.
 * این حالت هیچ تأثیری بر بیلد نهایی (production build) ندارد.
 */

// --- نحوه فعال سازی StrictMode در React (معمولاً در index.js یا App.js) ---
/*
import React from 'react';
import ReactDOM from 'react-dom/client'; // برای React 18 به بعد
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App /> {/* کامپوننت اصلی شما و تمام فرزندان آن در StrictMode اجرا می‌شوند *///}
  /* </React.StrictMode>
 )*/


// --- مثال واقعی 1: شناسایی "اثرات جانبی" در useEffect (منابع پاک نشده) ---
// (این کد را نمی‌توان مستقیماً در یک فایل JS معمولی خارج از محیط React اجرا کرد،
//  اما می‌توانید مفهوم آن را در پروژه React خود تصور کنید.)

/*
import React, { useEffect, useState } from 'react';

function MyComponentStrictEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('--- Setting up effect ---'); // این پیام را در StrictMode دو بار می‌بینید
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // اگر خط return () => clearInterval(intervalId); فراموش شود،
    // در StrictMode (React 18+) خواهید دید که 'Setting up effect' دو بار اجرا می‌شود
    // بدون اینکه 'Cleaning up effect' بین آن اجرا شود، که نشان‌دهنده نشت حافظه است.
    return () => {
      clearInterval(intervalId);
      console.log('--- Cleaning up effect ---'); // این پیام نیز در StrictMode دو بار اجرا می‌شود
    };
  }, []); // [] به معنی یک بار اجرا شدن (در حالت عادی)

  console.log('--- Rendering MyComponentStrictEffect ---'); // این پیام را در StrictMode دو بار می‌بینید (به دلیل فراخوانی دوگانه render)

  return (
    <div>
      <h3>React StrictMode Example (useEffect)</h3>
      <p>Count: {count}</p>
      <p>Check your browser console for 'Setting up effect' and 'Cleaning up effect' messages.</p>
    </div>
  );
}

// برای استفاده در یک پروژه React:
// export default MyComponentStrictEffect;
// و آن را در <App /> یا کامپوننت دیگری که درون <React.StrictMode> قرار دارد، ایمپورت کنید.
*/

// --- مثال واقعی 2: شناسایی متدهای lifecycle منسوخ شده (فقط برای کامپوننت‌های کلاس) ---
// (این کد نیز برای محیط React است و در یک فایل JS معمولی اجرا نمی‌شود.)

/*
import React from 'react';

class OldComponentExample extends React.Component {
  // این متد (componentWillMount) منسوخ شده است و استفاده از آن در StrictMode هشدار می‌دهد
  UNSAFE_componentWillMount() {
    console.warn('WARNING: UNSAFE_componentWillMount is deprecated and detected by StrictMode!');
  }

  render() {
    return (
      <div>
        <h3>React StrictMode Example (Deprecated Lifecycle)</h3>
        <p>This component uses an UNSAFE lifecycle method.</p>
        <p>Check your browser console for StrictMode warnings if this component is rendered within {'<React.StrictMode>'}.</p>
      </div>
    );
  }
}

// برای استفاده در یک پروژه React:
// export default OldComponentExample;
// و آن را در <App /> یا کامپوننت دیگری که درون <React.StrictMode> قرار دارد، ایمپورت کنید.
*/

// --- نتیجه‌گیری کلی ---
/**
 * StrictMode در جاوا اسکریپت، زبان را سختگیرتر می‌کند تا خطاهای رایج را زودتر پیدا کنید و کدهای مطمئن‌تری بنویسید.
 * StrictMode در React، یک ابزار بازرسی در زمان توسعه است که با انجام تست‌های اضافی، به شما کمک می‌کند
 * اثرات جانبی ناخواسته و استفاده از الگوهای منسوخ شده را شناسایی کنید.
 * هر دو ابزار، به شما کمک می‌کنند کدهای با کیفیت‌تر و باگ‌های کمتری داشته باشید.
 */

//#endregion