# 导图

## 开始之前
需要提前知道的概念
- 原点为**左上角**, 所以横向导图需要计算Y,纵向(树状)导图需要计算X
- 单个节点数据结构为 { id: x, children: [] } 每个children中都是**节点的实例**
- shape: 指svg的图形形状
- edge: 指连接线
- 所有的x,y相关: 指的是节点的左上角的坐标, 以上右下左的方式转圈, 四个坐标依次为(x,y) (x1,y1) (x2,y2) (x3,y3)
- head_node: 离坐标轴最近的(索引为0)子节点
- last_node: 离坐标轴最远的(索引为length - 1)子节点
- 渲染方式(会保证节点的对称和节点的间距)
   ```bash
    子节点为奇数个时, 先渲染**中间节点**, 再向两侧渲染
    子节点为偶数个时, 先确定**中间点**, 然后渲染中间点两侧的两个节点, 再向两侧渲染
    这样可以保证整齐
   ```
- nodeXInterval,nodeYInterval: 简单理解是两个节点的间隔, 但是子节点会把其他节点撑开, 所以此处的间隔指的是, n节点的last_node - n+1节点的head_node = nodeYInterval
- 渲染思路
    1. 计算出点的位置(由ChildrenRenderFactory类计算)
    2. 画线(EdgeDraw类)(如果已经画了线, 则删除原来的线, 画新线)
    3. 删除时重新执行第1-2步(递归)
    4. 增加时重新执行第1-2步(递归)
   
## Graph
图形类

### Edge  
>连接线类

保存连接线的起始节点实例 和 结束节点实例, 以及线的 shape
### index
    
入口
- 增加节点
- 删除节点
- 递归重新渲染
- 断开线连接
- 调用Renderer
- ...

### Node
>节点

- x,y 节点坐标 
- shape 节点形状, Raphael对象
- isTreeNode 是否为树形节点 
- isRootNode 是否为根节点节点类型 
- father 节点的父节点 
- children 节点的子节点Array
- connectFather 节点与父节点的edge对象 
- connectChildren 节点与子节点们的edge对象
- label 节点的文本内容
- direction 节点的方向, 横向导图时用来区分在根节点的左右
- data
   
## Renderer
渲染类

### ChildrenRenderFactory
   
节点渲染类. 
- ChildrenRenderStrategy 子结点重绘策略类

    - reRenderChildrenNode 需要重绘节点位置时(Renderer)调用
- AbstractRender 子节点重绘类(一个超类)

    - commonOddRender 子节点为奇数个时调用此
    - commonEvenRender 子节点为偶数个时调用此
    - commonTreeOddRender 树状导图用 子节点为奇数个时调用此
    - commonTreeEvenRender 树状导图用 子节点为偶数个时调用此
    - _reRenderNode 重新渲染节点, 已经渲染的节点移动到指定位置, 新加的节点根据算好的位置渲染Node  
    - doRender 执行渲染策略, 应该被子类覆盖
- OddNodeRender 奇数子节点重绘类(继承AbstractRender)

    - doRender 判断是否为树状导图, 调用common\*Render或commonTree*Render
    
几种渲染逻辑

- 补图ing
### Drag
   
拖拽

- 设置节点的选中状态, 用于设置文本
- ~~拖拽相关~~ 
### EdgeDraw
   
绘制连接线
- 普通曲线
- 贝塞尔曲线(分为四个点)
  - 起点
  - 起点的控制点
  - 终点的控制点
  - 终点
    
### index
入口
   
### nodeShapeRelative
   
节点相关(Y相关的代表横向的导图用, X表示树状导图用)
- getSingleNodeWidth 节点宽
- getSingleNodeHeight 节点高
- getChildHeadNode 当前节点的所有子节点中(有的话)层级最深的节点(对应索引 0 ), 没有子节点则返回自身
- getChildLastNode 当前节点的所有子节点中(有的话)层级最深的节点(对应索引length - 1), 没有子节点则返回自身
- ~~getNodeAreaHeight 所有子节点所占高度区域~~
- ~~getNodeAreaWidth 所有子节点所占宽度区域~~
- getOffsetYWithHeadNode 获取当前节点.y距离距离层级最深的节点.y(没有子节点就返回自己)的距离   
- getOffsetYWithLastNode 获取当前节点.y距离距离层级最深的节点.y(没有子节点就返回自己)的距离
- getOffsetXWithHeadNode 获取当前节点.x距离距离层级最深的节点.x(没有子节点或最远节点的x都没有自身的x远(原因的是当前节点的文本太长)就返回当前节点)的距离
- getOffsetXWithLastNode 获取当前节点.x距离距离层级最深的节点.x(没有子节点或最远节点的x都没有自身的x远(原因的是当前节点的文本太长)就返回当前节点)的距离
- 上面的层级最深节点的操作只适用于横向的导图, 因为树状导图每一个节点都可能过于长, 导致他本身的两端比他层级最深的节点的两端都要远, 所以以下方法供树状导图使用
- getChildFarLeftNode 获取节点左侧在最左边的节点
- getChildFarRightNode 获取节点左侧在最右边的节点
- getOffsetXBetweenNodes 获取两个节点的x坐标差值
### shapeCustomAttr
封装画图形(节点样式)的工具类函数
- 利用Raphael绘制图形
### Viewport
视图, 即画svg的面板, 附带拖住面板功能
