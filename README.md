# chatbot-ze

first Thank you for Reading this package .

# tailwind Config

for using this package first you need import package on tailwind.
example:

```ts
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/chatbot-ze/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

you can change status position [send - received] :

```ts
<Chatbot status="send" />
```

this is simple of usage :

```ts
const ChatbotTest = () => {
  return (
    <Chatbot
      position="bottom-left"
      status="received"
      GreetingMessage="this is test message"
      // you can test class names in here
      rootClassname=""
      ShowButtonClassName=""
      ChatbotRootClassName=""
    />
  );
};
```
