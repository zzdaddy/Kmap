
/**
 * 结点外形相关
 */
var nodeShapeRelative = (function(){

    return {
        nodeDefaultWidth: 80,
        nodeDefaultHeight: 38,
        littleNodeDefaultHeight: 26,
        nodeXInterval: 12,
        nodeYInterval: 20,
        getSingleNodeHeight: function(node){
            if(node.shape){
                return node.shape[1].attr('height');
            }
            //如果为新结点则返回默认高度
            else{

                if(node.isFirstLevelNode()){
                    return this.nodeDefaultHeight;
                }
                //@workaround:如果为第三层或以上层节点
                else{
                    return this.littleNodeDefaultHeight;
                }


            }
        },
        getSingleNodeWidth: function(node){
            if(node.shape){
                return node.shape[1].attr('width');
            }else{
                return this.nodeDefaultWidth;
            }
        },
        getNodeAreaHeight: function(node){
            //如果结点不是叶结点,则从子结点中累加高度
            if(node.childrenCount() > 0){
                var height = 0;
                for(var i in node.children){
                    height += this.getNodeAreaHeight(node.children[i]);
                }
                return height;
            }else{
                return this.getSingleNodeHeight(node) + this.nodeYInterval;
            }
        },
        getNodeAreaWidth: function(node){
            //如果结点不是叶结点,则从子结点中累加高度
            if(node.childrenCount() > 0){
                var width = 0;
                for(var i in node.children){
                    width += this.getNodeAreaWidth(node.children[i]);
                }
                return width;
            }else{
                //
                return this.getSingleNodeWidth(node) + this.nodeYInterval;
            }
        },

        // 获取节点中离开头节点最近的节点(一般是层级最深的开头节点, 但是在父节点文本过长时, 有可能会是父节点本身)(指数组中开头位置)
        getChildHeadNode(node) {
            if (node.childrenCount()) {
                // 最边上的子节点无子节点
                if (!node.children[0].childrenCount()) {
                    return node.children[0]
                } else {
                    return this.getChildHeadNode(node.children[0])
                }
            } else {
                return node
            }
        },
        // 获取子节点中层级最深的结尾节点(指数组中结尾位置)
        getChildLastNode(node) {
            if (node.childrenCount()) {
                // 最边上的子节点无子节点
                if (!node.children[node.childrenCount() - 1].childrenCount()) {
                    return node.children[node.childrenCount() - 1]
                } else {
                    return this.getChildLastNode(node.children[node.childrenCount() - 1])
                }
            } else {
                return node
            }
        },
        // 最左边的节点
        getChildFarLeftNode(node) {
            function getNextChildHeadNode(node) {
                nodes.push(node.children[0]);
                if (node.children[0].childrenCount()) {
                    getNextChildHeadNode(node.children[0])
                }
            }
            let nodes = [];
            nodes.push(node);

            if (node.childrenCount()) {
                // 最边上的子节点无子节点
                getNextChildHeadNode(node)
            }
            let result_node = nodes.reduce((result, node) => {
                if (!result.x) {
                    result = node;
                    return result;
                }
                if ( result.x > node.x) {
                    result = node
                }
                return result
            }, {});

            return result_node
        },
        getChildFarRightNode(node) {
            function getNextChildHeadNode(node) {
                nodes.push(node.children[node.childrenCount()-1]);
                if (node.children[node.childrenCount()-1].childrenCount()) {
                    getNextChildHeadNode(node.children[node.childrenCount()-1])
                }
            }
            let nodes = [];
            nodes.push(node);

            if (node.childrenCount()) {
                // 最边上的子节点无子节点
                getNextChildHeadNode(node)
            }
            let result_node = nodes.reduce((result, node) => {
                if (!result.x) {
                    result = node;
                    return result;
                }
                if ( (result.x + this.getSingleNodeWidth(result)) < (node.x + this.getSingleNodeWidth(node))) {
                    result = node
                }
                return result
            }, {});

            return result_node
        },
        // 获取当前节点离他最远的子节点的距离
        getOffsetYWithHeadNode(node) {
            let headNode = this.getChildHeadNode(node);
            return Math.abs(headNode.y - node.y);
        },
        getOffsetYWidthLastNode(node) {
            let lastNode = this.getChildLastNode(node);
            return Math.abs(lastNode.y - node.y);
        },
        getOffsetXBetweenNodes(node1, node2) {
            return Math.abs(node1.x - node2.x)
        },
        getOffsetXWithHeadNode(node) {
            let headNode = this.getChildHeadNode(node);
            return this.getOffsetXBetweenNodes(headNode, node)
        },
        getOffsetXWidthLastNode(node) {
            let lastNode = this.getChildLastNode(node);
            return this.getOffsetXBetweenNodes(lastNode, node);
        },
    }
}());

export default nodeShapeRelative;
