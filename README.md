# XSS Challenge

## Overview

This repository contains an XSS (Cross-Site Scripting) Challenge that demonstrates a common vulnerability in web applications. The challenge allows users to experiment with injecting malicious JavaScript code into an input field, mimicking real-world attack scenarios. By completing this challenge, participants can learn how XSS attacks are executed and mitigated.

## How the Challenge Works

In this challenge, the user is presented with an input field and a set of challenges. The input is processed and rendered back onto the page. The goal of the challenge is to inject JavaScript code (XSS) into the input field to trigger an alert displaying a hidden flag.

### Challenges

There are two challenges:

1. **Challenge 1** (Javascript Injection):
   - In this challenge, you can inject a `javascript:` payload into an anchor tag to trigger an alert.
   - **Hint**: Use the `javascript:` protocol to trigger JavaScript execution from a link.

2. **Challenge 2** (Image Injection with OnError):
   - This challenge involves injecting an image tag with an `onerror` handler to trigger an alert.
   - **Hint**: A broken image will trigger the `onerror` event handler, which can be used to execute JavaScript.

### How to Play

1. **Select a Challenge**: 
   - Choose between Challenge 1 or Challenge 2 by selecting the corresponding radio button.

2. **Inject Your Payload**:
   - Try to inject the appropriate XSS payload into the input field. 
   - For Challenge 1, you can inject a link like:
     ```html
     <a href="javascript:alert('You found the flag!')">Click here</a>
     ```
   - For Challenge 2, try using an image with an `onerror` attribute:
     ```html
     <img src="broken_image.jpg" onerror="alert('You found the flag!')">
     ```

3. **Submit Your Input**: 
   - Click the "OK" button to submit your input and see the output.
   - If you successfully trigger the flag, you’ll see an alert box showing the hidden flag.

### Code Explanation

This challenge is implemented using basic HTML, CSS, and JavaScript. Here's a breakdown of the key parts:

#### HTML Structure

- The HTML contains a text input field where users can inject their XSS payload. 
- A `div` container displays the challenge description, hints, and any output or errors caused by user input.

#### JavaScript Logic

1. **Challenge Handling**: 
   - The JavaScript listens for changes to the challenge radio buttons. Based on the selected challenge, it processes the user input.
   - The `xssChallenge` function handles different cases for Challenge 1 (javascript injection) and Challenge 2 (image injection with `onerror`).

2. **Output**:
   - If the input matches a valid XSS payload (`javascript:alert(flag)` or a broken image with `onerror`), the flag is revealed.
   - The input is then displayed as a normal comment or image tag, but malicious code (XSS) can be executed when rendered.

