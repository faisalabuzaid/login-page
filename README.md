# Login Page Assignment

This project includes a Vue.js 3 component for a login page, designed as part of an assignment. The component provides a customizable and reusable login form with support for various input types, labels, required fields, and error messages.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Components Details](#component-details)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Features

- Support for different input types: text, password, number, email.
- Customizable labels, required fields, and error messages.
- Responsive design for a seamless user experience.

## Installation

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Component-Details

### The input component (BaseInput) accepts the following props:

- type: Input type ('password' | 'text' | 'number' | 'email').
- modelValue: Two-way binding for the input value.
- label: Label for the input field.
- id: HTML id attribute for the input field.
- required: Boolean, indicating whether the input is required.
- error: Error message to display.

### The login component (BaseLogin)

- Form, base inputs and a button.

## Styling

The component comes with scoped styles to ensure a consistent and visually appealing appearance. Styles include responsive design, error handling, and focused label animations.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
