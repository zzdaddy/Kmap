import { forEach } from '../utils';

export default class Node {
    constructor(attr={}, renderer, nodeCount=0, canDrag=false) {
        this.renderer = renderer;
        this.canDrag = canDrag;
        if(attr.hasOwnProperty('id')) {
            this.id = attr.id;
        } else {
            this.id = nodeCount;
        }

        if(attr.hasOwnProperty('x') && attr.hasOwnProperty('y')) {
            this.x = attr.x;
            this.y = attr.y;
        } else {
            this.x = null;
            this.y = null;
        }

        // 是否根节点
        this.isRootNode = !!attr.isRootNode;

        //节点的直接子节点引用集合
        this.children = [];
        //节点的父节点引用
        this.father = null;

        //与父节点的边的引用
        this.connectFather = null;
        //与子节点的边的引用集合
        this.connectChildren = {};

        //节点的文本
        this.label = attr.label || "任务" + this.id;

        //节点的图形,其类型为Raphael的element或set对象
        this.shape = null;

        //判断在根结点左边还是右边的属性  默认放在右边 index.js中会修正位置
        this.direction = attr.direction || 1;

        this.isTreeNode = attr.isTreeMap || 0;

        this.data = attr.data || null;
    }

    setNodeDraggable(value) {
        this.canDrag = value;
    }

    isDraggable() {
        return this.canDrag;
    }

    checkIsRootNode() {
        return this.isRootNode;
    }

    checkIsTreeMap() {
        return !!+this.isTree;
    }

    childrenCount() {
        return this.children.length;
    }
    childrenWithShapeCount() {
        let count = 0;
        this.children.forEach( child => {
            if(child.shape) {
                count++;
            }
        })
        return count;
    }

    /**
     * 子节点数量为奇数
     * @returns {number}
     */
    childrenCountIsOdd() {
        return this.childrenCount() & 1 === 1;
    }

    /**
     * 奇数个子节点时, 中间的子节点索引
     * 偶数个子节点时, 中间点的下一个子节点索引
     */
    getMiddleChildNodeIndex() {
        return Math.floor(this.childrenCount() / 2);
    }

    // 获取指定子节点的索引
    getChildNodeIndex(nodeId) {
        return this.children.findIndex( child => child.id == nodeId)
    }

    // 获取指定子节点
    getChildNode(nodeId) {
        return this.children.find( child => child.id == nodeId)
    }

    /**
     * 判断是否有兄弟节点
     * @returns {null|boolean}
     */
    hasBrotherNode() {
        return this.father && this.father.children.length > 1
    }

    isTreeMapNode() {
        return this.isTreeNode == 1;
    }

    isFirstLevelNode() {
        return this.father && this.father.isRootNode;
    }
    isSecondMoreNode() {
        return !this.isRootNode && !this.isFirstLevelNode();
    }

    translate(dx, dy) {
        this.x += dx;
        this.y += dy;

        //节点移动渲染
        this.renderer.translateSingleNodeRender(this, dx, dy);
        this.children.forEach( child => {
            child.translate(dx, dy);
        })
    }
}
