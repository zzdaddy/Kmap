<template>
    <div class="view-controller">
        <button @click="minusScale" class="toolbar-btn btn btn-default btn-sm btn-success node-plus">-
        </button>
        <span>{{scale}}</span>
        <button @click="plusScale" class="toolbar-btn btn btn-default btn-sm btn-success node-plus">+
        </button>
        <div>
            <span>右侧最大节点数</span>
            <select v-model="rightNodeMaxCount">
                <option :value="item" v-for="item in rightNodeMaxCounts" :key="item">{{ item }}</option>
            </select>
        </div>
        <button class="toolbar-btn btn btn-default btn-sm btn-success node-btn disabled" @click="addNode">添加节点</button>
        <button class="toolbar-btn btn btn-default btn-sm btn-danger node-btn disabled" @click="removeNode">删除节点
        </button>
        <button class="toolbar-btn btn btn-default btn-sm btn-success" @click="toggleDraggable">暂不支持拖拽节点
        </button>
        <button class="toolbar-btn btn btn-default btn-sm" @click="saveData">保存数据(console)</button>
        <button class="toolbar-btn btn btn-default btn-sm" @click="$emit('updateMapDate', randomTree())">替换数据
        </button>
        <div>
            <input type="checkbox" id="check-map-mode" class="check-map-mode" v-model="isTreeMap">
            <label for="check-map-mode">树状导图</label>
        </div>
        <div class="label-group">
            <input type="text" class="form-control" v-model="currentText">
            <button class="btn btn-default btn-sm node-btn" @click="setGraphText">确定</button>
        </div>
    </div>
</template>

<script>
    import {cloneDeep} from 'lodash-es';
    import {forEach} from '../libs/utils';

    export default {
        name: 'ViewController',
        props: {
            childNodeCanDrag: {
                type: Boolean,
                default: true
            },
            renderer: {},
            graph: {},
        },
        data() {
            return {
                currentText: '',
                isTreeMap: true,
                scale: 1,
                rightNodeMaxCount: 5,
                rightNodeMaxCounts: [2, 3, 4, 5, 6, 7, 8]
            }
        },
        watch: {
            isTreeMap(val) {
                this.$emit('updateTreeMap', val ? 1 : 0);
            },
            rightNodeMaxCount(count) {
                this.graph.setRightNodeMaxCount(count);
            }
        },
        methods: {
            setGraphText() {
                this.currentText && this.graph.setLabel(this.currentText);
            },
            addNode() {
                this.graph.addNode();
            },
            removeNode() {
                this.graph.removeNode();
            },
            toggleDraggable() {
                return;
                this.$emit('update:childNodeCanDrag', !this.childNodeCanDrag)
            },
            saveData() {
                let rootNode = this.renderer.graph.getRootNode();
                // let rootCopy = $.extend(true, {}, rootNode);
                // let rootCopy = cloneDeep(rootNode);
                let tree = cloneDeep(rootNode);
                let data = this.formatData(tree);
                console.log(`保存的数据 ==>`, data);
            },
            parseNode(node) {
                let newNode;
                let {direction, isRootNode, id, label, isTreeNode, children} = node;
                newNode = {direction, isRootNode, id, label, isTreeNode, children};
                return newNode;
            },
            formatData(tree) {
                if(tree.children && tree.children.length) {
                    return {
                        id: tree.id,
                        label: tree.label,
                        isRootNode: !!tree.isRootNode,
                        children: tree.children.map( node => this.formatData(node))
                    }
                }else {
                    return {
                        id: tree.id,
                        label: tree.label,
                        isRootNode: !!tree.isRootNode,
                        children: []
                    }
                }
            },
            randomTree() {
                let rootNode = {
                    isRootNode: true,
                    id: 0,
                    label: `根节点-${this.randomNumber()}`,
                    children: []
                };
                let nodeTemplate = {
                    direction: 1,
                    id: 0,
                    label: '',
                    children: []
                };
                let childNodeCount = this.randomNumber(1, 5);
                for (let i = 1; i < childNodeCount; i++) {
                    nodeTemplate.id = i;
                    nodeTemplate.label = `节点${i}-${this.randomNumber()}`;
                    rootNode.children.push(nodeTemplate)
                }
                return rootNode;
            },
            randomNumber(min = 10, max = 100) {
                return Math.floor(Math.random() * max + min);
            },
            minusScale() {
                let scale = this.scale;
                scale -= 0.5;
                if (scale < 0.5) {
                    scale = 0.5;
                }

                this.renderer.viewportHandle.setViewportScale(scale);
                this.scale = scale;
            },
            plusScale() {
                let scale = this.scale;
                scale += 0.5;
                if (scale > 5) {
                    scale = 5;
                }

                this.renderer.viewportHandle.setViewportScale(scale);
                this.scale = scale;
            },

        }
    }
</script>

<style lang="less">
    .view-controller {
        width: 100%;
        height: 50px;
        top: 0;
        left: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        background: #b2b2b2;
        padding: 10px;
        z-index: 1000;
        display: flex;
        /*justify-content: center;*/
        align-items: center;

        &:hover {
            box-shadow: 1px 1px 4px #b9afaf;
        }

        button {
            margin: 0 6px 0 6px;
        }

        .check-map-mode {
            -webkit-appearance: checkbox;
        }
    }
</style>
