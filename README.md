模块名称：ngPlaceholder
指令名称：ngPlaceholder=“{{ text }}"
辅助属性：
placeholder-method=“focus(default)|input”(options)

    - focus: 获取到焦点时placeholder提示文本消失
    - input: 输入时placeholder提示文本消失

placeholder-class=“placeholder(default)”(options)

用法：
input元素需要被一元素包裹，并设置其样式position属性值为relative或者absolute
实例代码：
html:
<div class=“input-wrap”>
     <input type=“text” ng-placeholder=“文本” placeholder-method=“input” placeholder-class=“placeholder1">
</div>

css:
.input-wrap {
     position: relative;
     /* ... */
}
.placeholder1 {
     position: absolute;
     /* … */
}