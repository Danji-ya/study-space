Table of Contents
--
- [Getting Started](#getting-started)
- [How to use](#how-to-use)
- [Demo](#demo)

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


**3:**  The toast object has the following properties:

| Name         | Type            | Default   | Description                                                                                                                                                               |
|------------  |---------------  |---------  |-------------------------------------------------------------------------------------------------------------------------------------------------------------------------  |
| title        | String          | ""      | Title of the toast                                                                                                                                                 |
| message(*)      | String          | null      | Message of the toast                                                                                                                                              |
| type        | String          | "success"      | Type of the toast. Available: **success**, **error** and **info**                                                                                    |
| duration     | Number          | "5000"        | Duration of the toast  |

### Demo
![image](https://user-images.githubusercontent.com/53927959/210123603-ada050c1-e801-498c-8cc4-6b77362ec73f.png)
