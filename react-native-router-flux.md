# react-native-router-flux

## 安装

```
npm i react-native-router-flux --save
```

## 页面跳转与传值

### 正向跳转
从Home页跳转到Profile页面，Profile场景的key值为profile

##### 跳转
* 不带参数 

```
Actions.profile
```
* 带参数

```
Actions.profile({data:value})
```

##### 接收参数

```
this.props.KEY_NAME
```

**例**:

```
// 不带参数的最简写法 
onPress={Actions.proflie} 

// 带参数的最简写法，传递的参数必须是Object类型，每个参数建议使用键值对方式传递
onPress={() => {Actions.proflie({data:value})}}  

this.props.key // 接收参数
```

### 反向跳转

* 返回上一页面，不带参数

```
Actions.pop()
```

* 返回上一页面，带参数

```
Actions.pop({refresh:{data:value},timeout: 1})
```

* 返回指定页面

```
Actions.popTo('key')
setTimeout(() => Actions.refresh({data: 'value' }));        
```


`refresh`是直接刷新页面`props`,也可以在`componentWillReceiveProps`接收参数：

```
// 1. 必须在componentWillReceiveProps(nextProps)生命周期中接受传递的参数
// 2. 该生命周期方法中的参数必须叫做nextProps
// 3. 所有传递过来的参数都包含在nextProps参数中
// 4. 以nextProps.PARAM_NAME的方式获取指定的参数
componentWillReceiveProps(nextProps) {
    // 假设前一个页面传递过来一个名字叫做isRefresh的布尔型参数
    if(nextProps.isRefresh) {
        // TODO 根据需求执行相关操作
        ......
    }
}
```

## onBack

点击返回按钮调用

```
componentDidMount() {
    setTimeout(() => {
      Actions.refresh({
        onBack: this.onBack,
      });
    }, 1000);
  }
  onBack=()=>{
    console.log('执行代码')
    Actions.pop()
  }
```
或者

```
componentDidMount() {
        InteractionManager.runAfterInteractions(()=> {
            Actions.refresh({onBack:()=>this.onBack()})
        })
    }
```



## onEnter

每次进入页面调用

```
componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        if (this.props.enterTime !== nextProps.enterTime) {
            console.log('执行代码，发送action')
        }
    }
    
static onEnter(){
       setTimeout(() => {
          Actions.refresh({
            enterTime: new Date()
          });
    },1000)
    }
```

