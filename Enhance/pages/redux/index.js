//index.js

//获取应用实例
var app = getApp();

Page({

    onReady: function () {
        // console.log('onReady');
        var that = this;

        // Redux
        function f1() {
            // 这是一个 reducer，形式为 (state, action) => state 的纯函数。
            function counter(state = 0, action) {
                switch (action.type) {
                    case 'INCREMENT':
                        return state + 1;
                    case 'DECREMENT':
                        return state - 1;
                    default:
                        return state;
                }
            }

            // 创建 Redux store 来存放应用的状态
            var createStore = require('../../lib/redux/redux').createStore;
            var store = createStore(counter);
            // 可以手动订阅更新，也可以事件绑定到视图层。
            store.subscribe(() =>
                console.log(store.getState())
            );
            // 改变内部 state 唯一方法是 dispatch 一个 action。
            store.dispatch({ type: 'INCREMENT' }); // 输出：1        
            store.dispatch({ type: 'INCREMENT' }); // 输出：2
            store.dispatch({ type: 'DECREMENT' }); // 输出：1      
        }
        f1();


        // 通过combineReducers将多个reducer合并成一个
        function f2() {
            // 创建两个reducer
            function todos(state = [], action) {
                switch (action.type) {
                    case 'ADD_TODO':
                        return state.concat([action.text])
                    default:
                        return state
                }
            }
            function counter(state = 0, action) {
                switch (action.type) {
                    case 'INCREMENT':
                        return state + 1
                    case 'DECREMENT':
                        return state - 1
                    default:
                        return state
                }
            }
            // 将多个reducer合并成一个
            var combineReducers = require('../../lib/redux/redux').combineReducers;
            var rootReducer = combineReducers({
                todos,
                counter
            });
            var createStore = require('../../lib/redux/redux').createStore;
            var store = createStore(rootReducer);
            console.log(store.getState())
            // {
            //   counter: 0,
            //   todos: []
            // }
            store.dispatch({
                type: 'ADD_TODO',
                text: 'Use Redux'
            });
            // {
            //   counter: 0,
            //   todos: [ 'Use Redux' ]
            // }
        }
        f2();

        function f3() {
            
            function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  };
}

        }
    }
});