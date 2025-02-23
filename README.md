# Password Strength Checker

## Overview
This project is a **Password Strength Checker** that evaluates the security level of a user-inputted password in real time. It provides visual feedback using a **color-coded strength indicator** and ensures compliance with industry security standards. Additionally, it prevents users from logging in unless a strong password is used.

## Features
- **Real-time Password Strength Validation**
- **Color-Coded Indicators**:
  - 🔴 Weak (Red)
  - 🟠 Moderate (Yellow)
  - 🟢 Strong (Green)
- **Animated Lock Indicator**
  - 🔓 Open Lock (Weak Password)
  - 🟡 Half-Locked (Moderate Password)
  - 🔒 Fully Locked (Strong Password)
- **Prevents Passwords Starting with Special Characters**
- **Minimum 8 Characters Requirement**
- **Login Button Activation** (Only enabled for strong passwords)
- **Responsive & User-Friendly Design**
- **Password Visibility Toggle** 

## Technologies Used
- **HTML**: Structure of the web page
- **CSS**: Styling and visual appearance
- **JavaScript**: Password validation and UI interactivity

## Usage
1. Enter a password in the input field.
2. Observe the **real-time strength indicator**.
3. Ensure your password meets the **strong criteria** before logging in.
4. Click the **Login** button (enabled only when password is strong).
5. Toggle Dark Mode for a customized experience.

## File Structure
```
password-checker/
├── passcode.html     # Main HTML file
├── passcode.css      # Stylesheet for UI design
├── passcode.js       # JavaScript logic for validation
├── README.md         # Documentation
```

## Future Enhancements
- Multi-language support
