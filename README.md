# Frontend Mentor - Newsletter sign-up form with success message solution

## Table of contents | 目錄

- [Overview | 概述](#overview--概述)
  - [The challenge | 挑戰內容](#the-challenge--挑戰內容)
  - [Screenshot | 截圖](#screenshot--截圖)
  - [Links | 連結](#links--連結)
- [My process | 開發過程](#my-process--開發過程)
  - [Built with | 使用技術](#built-with--使用技術)
  - [What I learned | 學習心得](#what-i-learned--學習心得)
  - [Continued development | 持續改進](#continued-development--持續改進)
- [Author | 作者](#author--作者)

## Overview | 概述

### The challenge | 挑戰內容

Users should be able to:
使用者應該能夠：

- Add their email and submit the form
- 添加電子郵件並提交表單
- See a success message with their email after successfully submitting the form
- 在成功提交表單後看到包含其電子郵件的成功訊息
- See form validation messages if:
- 在以下情況下看到表單驗證訊息：
  - The field is left empty
  - 欄位為空
  - The email address is not formatted correctly
  - 電子郵件格式不正確
- View the optimal layout for the interface depending on their device's screen size
- 根據設備螢幕大小查看最佳介面佈局
- See hover and focus states for all interactive elements on the page
- 查看頁面上所有互動元素的懸停和焦點狀態

### Screenshot | 截圖

![](./screenshot.jpg)

### Links | 連結

- Solution URL: https://github.com/ylin320/Newsletter-sign-up-form
- Live Site URL: https://ylin320.github.io/Newsletter-sign-up-form/

## My process | 開發過程

### Built with | 使用技術

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (ES6+)
- [Validator.js](https://github.com/validatorjs/validator.js) - For email validation

### What I learned | 學習心得

In this project, I focused on implementing robust email validation using both regex patterns and the Validator.js library. Here are the key learnings:

在這個專案中，我專注於使用 regex 和 Validator.js 庫來實現穩健的電子郵件驗證。以下是主要學習內容：

1. Email Validation Techniques | 電子郵件驗證技術

```javascript
// Using regex for basic email validation
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

// Using Validator.js for comprehensive email validation
function validEmail(email) {
  if (!email) return false;
  const [, domain] = email.split("@");
  return (
    validator.isEmail(email) &&
    commonEmailDomains.includes(domain) &&
    validateEmailRegex(email)
  );
}
```

2. Validator.js Implementation | Validator.js 實現

- Comprehensive email validation using `validator.isEmail()`
- 使用 `validator.isEmail()` 進行全面的電子郵件驗證
- Integration with custom validation rules
- 與自定義驗證規則整合

3. Common Email Domains Check | 常見電子郵件域名檢查

```javascript
const commonEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  // ... more domains
];
```

4. Form Handling and State Management | 表單處理和狀態管理

```javascript
function handleSubmit(e) {
  e.preventDefault();
  // Form validation and state updates
}
```

5. Responsive Design Implementation | 響應式設計實現

- Mobile-first approach
- CSS Grid and Flexbox for layouts
- Media queries for different screen sizes

### Continued development | 持續改進

Areas for future improvement | 未來改進方向：

1. Add more comprehensive email validation rules

- 添加更全面的電子郵件驗證規則

2. Implement rate limiting for form submissions

- 實現表單提交的速率限制

3. Add loading states during form submission

- 添加表單提交時的載入狀態

4. Enhance accessibility features

- 增強無障礙功能

## Author | 作者

- GitHub - [@ylin320](https://github.com/ylin320)
- Frontend Mentor - [@ylin320](https://www.frontendmentor.io/profile/ylin320)
