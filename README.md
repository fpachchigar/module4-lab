# Lab #2 - Calculator Application

## Project Overview
A web-based calculator application that performs basic arithmetic operations with a modern, user-friendly interface.

## 1. Requirements Analysis

### Functional Requirements:
1. **Input Handling**: Accept two numbers as input
2. **Operations Support**: Support 4 basic operations (+, -, ×, ÷)
3. **Calculation**: Press equals button to display result
4. **Reset Functionality**: Clear button to reset the calculator

### Technical Requirements:
- Web-based application (HTML, CSS, JavaScript)
- Responsive design
- Error handling (division by zero)
- Keyboard support
- Clean, intuitive user interface

## 2. Application Design

### User Interface Sketch:
```
┌─────────────────────────────┐
│        [Display]            │
├─────────────────────────────┤
│  C  │  ⌫  │  ÷  │  ×  │
├─────────────────────────────┤
│  7  │  8  │  9  │  -  │
├─────────────────────────────┤
│  4  │  5  │  6  │  +  │
├─────────────────────────────┤
│  1  │  2  │  3  │  =  │
├─────────────────────────────┤
│    0     │  .  │  =  │
└─────────────────────────────┘
```

### Application Flow Diagram:
```
Start
  ↓
Display "0"
  ↓
User Input?
  ├─ Number → Add to display
  ├─ Operator → Store operator, prepare for next number
  ├─ Equals → Calculate result, display
  └─ Clear → Reset to "0"
  ↓
Continue until user closes app
```

## 3. Development Workflow

### Git Workflow:
1. **Main Branch**: Stable, production-ready code
2. **Feature Branches**: Individual features development
3. **Development Process**: 
   - Create feature branch
   - Develop feature
   - Test functionality
   - Merge to main

### Feature Branches Created:
- `feature/basic-layout` - HTML structure and basic styling
- `feature/calculator-logic` - JavaScript functionality
- `feature/ui-enhancements` - Advanced styling and animations
- `feature/keyboard-support` - Keyboard input handling
- `feature/error-handling` - Input validation and error management

## 4. Application Testing

### Test Cases:
a) **Get Data (Two Numbers)**
   - Test: Enter "5", then "+", then "3"
   - Expected: Display shows "5 + 3"

b) **Choose an Operator**
   - Test: Click +, -, ×, ÷ buttons
   - Expected: Operator is stored and displayed

c) **Get the Result**
   - Test: Enter "10 + 5 ="
   - Expected: Display shows "15"

d) **Reset the Screen**
   - Test: Click "C" button
   - Expected: Display clears to "0"

### Additional Test Cases:
- Division by zero handling
- Decimal number calculations
- Multiple operations in sequence
- Keyboard input functionality
- Responsive design on different screen sizes

## 5. File Structure
```
calculator-app/
├── README.md           # This documentation
├── index.html          # Main page with integrated features
├── calculator.html     # Standalone calculator
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── exercise1.html      # Exercise 1 implementation
├── exercise2.html      # Exercise 2 implementation
└── exercise3.html      # Exercise 3 implementation
```

## 6. Features Implemented

### Core Features:
- ✅ Basic arithmetic operations (+, -, ×, ÷)
- ✅ Clear and backspace functionality
- ✅ Decimal number support
- ✅ Equals button calculation
- ✅ Reset functionality

### Advanced Features:
- ✅ Keyboard input support
- ✅ Error handling (division by zero)
- ✅ Responsive design
- ✅ Modern UI with hover effects
- ✅ Continuous calculations
- ✅ Visual feedback for operators

## 7. Usage Instructions

### Mouse Interaction:
1. Click number buttons to enter numbers
2. Click operator buttons (+, -, ×, ÷) to select operation
3. Click "=" to calculate result
4. Click "C" to clear/reset
5. Click "⌫" to delete last character

### Keyboard Interaction:
- **Numbers**: 0-9 keys
- **Operators**: +, -, *, / keys
- **Calculate**: Enter or = key
- **Clear**: Escape or C key
- **Delete**: Backspace key
- **Decimal**: . (period) key

## 8. Technical Implementation

### HTML Structure:
- Semantic HTML5 structure
- Accessible button elements
- Readonly display input

### CSS Styling:
- CSS Grid for button layout
- CSS Flexbox for responsive design
- Modern gradient backgrounds
- Smooth transitions and hover effects
- Mobile-first responsive design

### JavaScript Functionality:
- Event-driven programming
- State management for calculator operations
- Input validation and error handling
- Keyboard event listeners
- Modular function structure

## 9. Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 10. Future Enhancements
- [ ] Scientific calculator functions
- [ ] History of calculations
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Theme switching (dark/light mode)
- [ ] Export calculation results
- [ ] Voice input support

---

## Getting Started

1. Clone the repository
2. Open `calculator.html` in a web browser
3. Start calculating!

## Development

To contribute to this project:

1. Create a new feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly
4. Commit your changes: `git commit -m "Add your feature"`
5. Push to the branch: `git push origin feature/your-feature`
6. Create a Pull Request
