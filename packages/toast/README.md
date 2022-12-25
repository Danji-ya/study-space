Table of Contents
--
- [Getting Started](#getting-started)
- [How to use](#how-to-use)


### Getting Started
Use your preferred package manager:
```
npm install @danji-ya/toast
yarn add @danji-ya/toast
```
### How to use

**1:** Wrap your app inside a `ToastProvider` component
```jsx
import { ToastProvider } from ' @danji-ya/toast';

<ToastProvider>
    <App />
</ToastProvider>
```


**2:** You can use toast with `useToast` hook in your functional components

```javascript
import { useToast } from '@danji-ya/toast';

const MyButton = () => {
    const toast = useToast();
    const handleClick = () => {
        toast({message: 'write your message'});
    };

    return (
        <Button onClick={handleClick}>Show Toast</Button>
    );
}
```