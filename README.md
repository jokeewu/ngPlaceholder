*ngPlaceholder*用于那些比较老的浏览器对placeholder属性不支持的情况下。

### 模块名称：ngPlaceholder
### 指令名称：ngPlaceholder="{{ text }}"
### 辅助属性：

#### placeholder-method = "focus(default)|input"(optional)

* focus: 获取到焦点时placeholder提示文本消失
* input: 输入时placeholder提示文本消失

#### placeholder-class = "placeholder(default)"(optional)

### 用法：

input元素需要被一元素包裹，并设置其样式position属性值为relative或者absolute

### 实例代码：

#### Javascript

```javascript
angular.module('yourApp', ['ngPlaceholder']);
```

#### html:

```html
<div class="input-wrap">
    <input type="text" 
        ng-placeholder="文本" 
        placeholder-method="input" 
        placeholder-class="placeholder1">
</div>
```

#### css:

```css
.input-wrap {
    position: relative;
    /* Other styles */
}

.placeholder1 {
    position: absolute;
    /* Other styles */
}
```