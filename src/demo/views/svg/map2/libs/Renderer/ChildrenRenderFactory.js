import { forEach } from '../utils';
import nodeShapeRelative from './nodeShapeRelative';
import { TREE } from '../constants';
function drawPoint(paper, x, y) {
    var point = paper.circle(x, y, 1);
    point.attr({
        fill: '#9f1407'
    })
}
/**
 * 子结点重绘的策略工厂
 * @type {Function}
 */
var ChildrenRenderFactory = (function(){
    return {
        createRenderStrategy: function(node, drawNode, drawEdge, setDrag){
            var strategy;
            //如果结点是根结点,则实现第一层结点添加算法
            if (node.childrenCountIsOdd()) {
                strategy = new ChildrenRenderStrategy(new OddNodeRender(drawNode, drawEdge, setDrag));
            } else {
                strategy = new ChildrenRenderStrategy(new EvenNodeRender(drawNode, drawEdge, setDrag));
            }
            return strategy;

        }
    };
}());

/**
 * 子结点重绘策略类
 * @param strategy
 * @constructor
 */
function ChildrenRenderStrategy(strategy){
    this.strategy = strategy;
}
ChildrenRenderStrategy.prototype.reRenderChildrenNode = function(node){
    this.strategy.doRender(node);
};

/**
 * 抽象子结点重绘类
 * @constructor
 */
function AbstractRender(drawNode, drawEdge, setDrag) {
    this.nodeXInterval = 100;
    this.nodeYInterval = 60;
    this.treeNodeXInterval = 60;
    this.treeNodeYInterval = 100;
    this.drawNode = drawNode;
    this.drawEdge = drawEdge;
    this.setDrag = setDrag;
}
// 奇数个节点时渲染方式
AbstractRender.prototype.commonOddRender = function(father, children, direction) {
    //获取父结点的中间坐标
    let hfx = father.x + nodeShapeRelative.getSingleNodeWidth(father)/2;
    let hfy = father.y + nodeShapeRelative.getSingleNodeHeight(father)/2;
    // 中间节点坐标
    let middle_node_index = father.getMiddleChildNodeIndex();
    let middle_node = children[middle_node_index];
    // 先渲染中间节点 x坐标 = 父节点右侧x + Ix
    let middle_node_x = hfx + (nodeShapeRelative.getSingleNodeWidth(father) / 2) + this.nodeXInterval;
    let middle_node_y = hfy - (nodeShapeRelative.getSingleNodeHeight(middle_node) / 2);
    this._reRenderNode(middle_node, middle_node_x, middle_node_y);
    
    // 渲染中间节点的左/上侧 (反向循环)
    //
    for(let i = middle_node_index - 1; i >= 0; i--) {
        let current_x = middle_node_x;
        // 下方节点的最头上的子节点
        let next_head_node = nodeShapeRelative.getChildHeadNode(children[i+1]);

        let current_y = next_head_node.y - this.nodeYInterval - nodeShapeRelative.getSingleNodeHeight(children[i]) - nodeShapeRelative.getOffsetYWidthLastNode(children[i]);
        this._reRenderNode(children[i], current_x, current_y);
    }

    // 渲染中间节点的右/下侧 (正向)
    for(let i = middle_node_index + 1; i < children.length; i++) {
        let current_x = middle_node_x;
        let last_last_node = nodeShapeRelative.getChildLastNode(children[i-1]);
        let current_y = last_last_node.y + nodeShapeRelative.getSingleNodeHeight(children[i-1]) + this.nodeYInterval + nodeShapeRelative.getOffsetYWithHeadNode(children[i]);
        this._reRenderNode(children[i], current_x, current_y);
    }
};

// 偶数个子节点时渲染方式
AbstractRender.prototype.commonEvenRender = function(father, children, direction) {
    // 获取父结点的中间坐标
    let hfx = father.x + nodeShapeRelative.getSingleNodeWidth(father)/2;
    let hfy = father.y + nodeShapeRelative.getSingleNodeHeight(father)/2;
    // 中间点右侧的node
    let middle_node_index = father.getMiddleChildNodeIndex();

    // 中间点(父节点右侧x + Ix , hfy)
    let middle_x = hfx + (nodeShapeRelative.getSingleNodeWidth(father) / 2) + this.nodeXInterval;

    let middle_y = hfy;

    // 渲染中间点的左/上侧 (反向循环)  先渲染临近中间点的两个节点
    for(let i = middle_node_index - 1; i >= 0; i--) {
        if (i === middle_node_index - 1) {
            let last_x = middle_x;
            let last_y = middle_y - (this.nodeYInterval / 2) - nodeShapeRelative.getSingleNodeHeight(children[i]) - nodeShapeRelative.getOffsetYWidthLastNode(children[i]);
            this._reRenderNode(children[i], last_x, last_y);
        } else {
            // 等同 奇数的批量渲染
            let current_x = middle_x;
            let next_head_node = nodeShapeRelative.getChildHeadNode(children[i+1]);

            let current_y = next_head_node.y - this.nodeYInterval - nodeShapeRelative.getSingleNodeHeight(children[i]) - nodeShapeRelative.getOffsetYWidthLastNode(children[i]);
            this._reRenderNode(children[i], current_x, current_y);
        }
    }

    // 渲染中间节点的右/下侧 (正向)
    for(let i = middle_node_index; i < children.length; i++) {
        if (i === middle_node_index) {
            let next_x = middle_x;
            let next_y = middle_y + (this.nodeYInterval / 2) + nodeShapeRelative.getOffsetYWithHeadNode(children[i]);
            this._reRenderNode(children[i], next_x, next_y)
        } else {
            let current_x = middle_x;
            let last_last_node = nodeShapeRelative.getChildLastNode(children[i-1]);
            let current_y = last_last_node.y + nodeShapeRelative.getSingleNodeHeight(children[i-1]) + this.nodeYInterval + nodeShapeRelative.getOffsetYWithHeadNode(children[i]);
            this._reRenderNode(children[i], current_x, current_y);
        }
    }
}

// 树状导图 奇数节点数渲染
AbstractRender.prototype.commonTreeOddRender = function(father, children, direction) {
    //获取父结点的中间坐标
    let hfx = father.x + nodeShapeRelative.getSingleNodeWidth(father)/2;
    let hfy = father.y + nodeShapeRelative.getSingleNodeHeight(father)/2;
    // 中间节点坐标
    let middle_node_index = father.getMiddleChildNodeIndex();
    let middle_node = children[middle_node_index];
    // 先渲染中间节点 x坐标 = 父节点右侧x + Ix
    let middle_node_x = hfx - (nodeShapeRelative.getSingleNodeWidth(middle_node)/2);
    // let middle_node_x = hfx + (nodeShapeRelative.getSingleNodeWidth(father) / 2) + this.nodeXInterval;
    let middle_node_y = hfy + (nodeShapeRelative.getSingleNodeHeight(father)/2)  + this.treeNodeYInterval;
    this._reRenderNode(middle_node, middle_node_x, middle_node_y);

    // 渲染中间节点的左/上侧 (反向循环)
    //
    for(let i = middle_node_index - 1; i >= 0; i--) {
        let current_y = middle_node_y;
        // 下方节点的最头上的子节点
        let next_head_node = nodeShapeRelative.getChildFarLeftNode(children[i+1]);
        let current_last_node = nodeShapeRelative.getChildFarRightNode(children[i]);
        let current_x = next_head_node.x - this.treeNodeYInterval - nodeShapeRelative.getSingleNodeWidth(current_last_node) - nodeShapeRelative.getOffsetXBetweenNodes(current_last_node, children[i]);

        this._reRenderNode(children[i], current_x, current_y);
    }

    // 渲染中间节点的右/下侧 (正向)
    for(let i = middle_node_index + 1; i < children.length; i++) {
        let current_y = middle_node_y;
        let last_last_node = nodeShapeRelative.getChildFarRightNode(children[i-1]);
        let current_head_node = nodeShapeRelative.getChildFarLeftNode(children[i]);
        let current_x = last_last_node.x + nodeShapeRelative.getSingleNodeWidth(last_last_node) + this.treeNodeYInterval + nodeShapeRelative.getOffsetXBetweenNodes(current_head_node, children[i]);

        this._reRenderNode(children[i], current_x, current_y);
    }
};

// 树状导图 偶数节点数渲染
AbstractRender.prototype.commonTreeEvenRender = function(father, children, direction) {
    // 获取父结点的中间坐标
    let hfx = father.x + nodeShapeRelative.getSingleNodeWidth(father)/2;
    let hfy = father.y + nodeShapeRelative.getSingleNodeHeight(father)/2;
    // 中间点右侧的node
    let middle_node_index = father.getMiddleChildNodeIndex();

    // 中间点 x 坐标
    let middle_x = hfx;
    // 中间点 y = (hfy + Iy , hfy)
    let middle_y = hfy + (nodeShapeRelative.getSingleNodeHeight(father) / 2) + this.treeNodeYInterval;

    // 渲染中间点的左/上侧 (反向循环)  先渲染临近中间点的两个节点
    for(let i = middle_node_index - 1; i >= 0; i--) {
        if (i === middle_node_index - 1) {
            let last_y = middle_y;
            let last_last_node = nodeShapeRelative.getChildFarRightNode(children[i]);
            let last_x = middle_x - (this.treeNodeXInterval / 2) - nodeShapeRelative.getSingleNodeWidth(last_last_node) - nodeShapeRelative.getOffsetXBetweenNodes(last_last_node, children[i]);
            this._reRenderNode(children[i], last_x, last_y);
        }
        else {
            // 等同 奇数的批量渲染
            let current_y = middle_y;
            let next_head_node = nodeShapeRelative.getChildFarLeftNode(children[i+1]);
            let current_last_node = nodeShapeRelative.getChildFarRightNode(children[i]);
            let current_x = next_head_node.x - this.treeNodeXInterval - nodeShapeRelative.getSingleNodeWidth(current_last_node) - nodeShapeRelative.getOffsetXBetweenNodes(children[i], current_last_node);
            this._reRenderNode(children[i], current_x, current_y);
        }
    }

    // 渲染中间节点的右/下侧 (正向)
    for(let i = middle_node_index; i < children.length; i++) {
        if (i === middle_node_index) {
            let next_y = middle_y;
            let next_head_node = nodeShapeRelative.getChildFarLeftNode(children[i]);
            let next_x = middle_x + (this.treeNodeXInterval / 2) + nodeShapeRelative.getOffsetXBetweenNodes(next_head_node, children[i]);
            this._reRenderNode(children[i], next_x, next_y)
        }
        else {
            let current_y = middle_y;
            let last_last_node = nodeShapeRelative.getChildFarRightNode(children[i-1]);
            let current_head_node = nodeShapeRelative.getChildFarLeftNode(children[i]);
            let current_x = last_last_node.x + nodeShapeRelative.getSingleNodeWidth(last_last_node) + this.treeNodeXInterval + nodeShapeRelative.getOffsetXBetweenNodes(current_head_node, children[i]);
            this._reRenderNode(children[i], current_x, current_y);
        }
    }
}

AbstractRender.prototype._reRenderNode = function(node, x, y){
    // 已经渲染的节点, 移动到指定的点, 如果有子节点, 子节点也会跟着移动
    if(node.shape){
        let dx = x - node.x;
        let dy = y - node.y;
        node.translate(dx, dy)
    }
    //如果节点仍未渲染,则渲染之
    else {
        node.x = x;
        node.y = y;
        this.drawNode(node);
    }
    // this.drawEdge(node.connectFather);
    // this.setDrag(node)

};

AbstractRender.prototype.doRender = function(node){
    console.log('该方法应该被覆盖');
};

/**
 * 渲染奇数个子节点的类
 * @param drawNode
 * @constructor
 */
function OddNodeRender(drawNode, drawEdge, setDrag) {
    this.drawNode = drawNode;
    this.drawEdge = drawEdge;
    this.setDrag = setDrag;
}
OddNodeRender.prototype = new AbstractRender();
OddNodeRender.prototype.constructor = OddNodeRender;

OddNodeRender.prototype.doRender = function(node) {
    if (node.isTreeMapNode()) {
        this.commonTreeOddRender(node, node.children, 1);
    } else {
        this.commonOddRender(node, node.children, node.direction);
    }
}


/**
 * 渲染奇数个子节点的类
 * @param drawNode
 * @constructor
 */
function EvenNodeRender(drawNode, drawEdge, setDrag) {
    this.drawNode = drawNode;
    this.drawEdge = drawEdge;
    this.setDrag = setDrag;
}
EvenNodeRender.prototype = new AbstractRender();
EvenNodeRender.prototype.constructor = EvenNodeRender;

EvenNodeRender.prototype.doRender = function(node) {
    if (node.isTreeMapNode()) {
        this.commonTreeEvenRender(node, node.children, 1);
    } else {
        this.commonEvenRender(node, node.children, node.direction);
    }
}
export default ChildrenRenderFactory;
